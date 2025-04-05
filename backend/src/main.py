from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os
from .modules.generic.exceptions.bad_request_exception import AppBadRequestException
from .modules.generic.exceptions.not_found_exception import AppNotFoundException
from .modules.generic.exceptions.exception_handler import app_exception_handler
from .modules.generic.middlewares.http_logger_middleware import HttpLoggerMiddleware
from .modules.ai.routes.ai_route import ai_router
from .modules.sales.routes.sales_route import sales_router

# Load environment variables
load_dotenv()

env = os.getenv("ENVIRONMENT", "development")
frontend_base_url = os.getenv("FRONTEND_BASE_URL", "http://localhost:3000")
version = "v1"

description = """
REST API Features:
- View sales summaries and detailed
- AI-powered chatbot
"""

version_prefix = f"/api/{version}"

docs_url = f"{version_prefix}/docs" if env == "development" else None
redoc_url = f"{version_prefix}/redoc" if env == "development" else None
openapi_url = f"{version_prefix}/openapi.json" if env == "development" else None

# Initialize FastAPI app
app = FastAPI(
    title="Sales Dashboard",
    description=description,
    version=version,
    contact={"name": "Steven", "email": "stevenhendy13401@gmail.com"},
    openapi_url=openapi_url,
    docs_url=docs_url,
    redoc_url=redoc_url
)

# ✅ Add CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[frontend_base_url],
    # allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Custom middleware & exception handlers
app.add_middleware(HttpLoggerMiddleware)
app.add_exception_handler(AppBadRequestException, app_exception_handler(400))
app.add_exception_handler(AppNotFoundException, app_exception_handler(404))
app.add_exception_handler(Exception, app_exception_handler(500))

# Routes
app.include_router(sales_router, prefix=f"{version_prefix}/sales", tags=["sales"])
app.include_router(ai_router, prefix=f"{version_prefix}/ai", tags=["ai"])
