import time
from datetime import datetime
from fastapi import Request
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import Response
import logging

logging.getLogger("uvicorn.access").disabled = True

logger = logging.getLogger("http_logger")
logger.setLevel(logging.INFO)

if not logger.hasHandlers():
    handler = logging.StreamHandler()
    formatter = logging.Formatter('%(message)s')
    handler.setFormatter(formatter)
    logger.addHandler(handler)

class HttpLoggerMiddleware(BaseHTTPMiddleware):
    """
    Custom HTTP Logger Middleware

    ✅ Logs every HTTP request with detailed info (IP, method, URL, status, user-agent, etc.)
    ✅ Measures and logs request processing time (can help analyze bottlenecks)
    ✅ Useful for auditing, monitoring, and debugging in dev/staging/prod
    ✅ Logs can be shipped to ELK stack (Elasticsearch + Logstash + Kibana) for advanced visualization and analysis
    """
        
    async def dispatch(self, request: Request, call_next):
        start_time = time.time()

        response: Response = await call_next(request)

        end_time = time.time()
        process_time = int((end_time - start_time) * 1000)

        ip = request.client.host
        method = request.method
        url = request.url.path
        protocol = request.scope.get("http_version", "1.1")
        status_code = response.status_code
        content_length = response.headers.get("content-length", "-")
        referer = request.headers.get("referer", "-")
        user_agent = request.headers.get("user-agent", "-")

        timestamp = datetime.now().strftime("%d/%b/%Y:%H:%M:%S")

        logger.info(
            f'{ip} - - [{timestamp}] "{method} {url} HTTP/{protocol}" {status_code} {content_length} "{referer}" "{user_agent}" {process_time}ms'
        )

        return response
