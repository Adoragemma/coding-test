from typing import Callable
from fastapi import Request
from fastapi.responses import JSONResponse
from .base_exception import AppBaseException


def app_exception_handler(status_code: int) -> Callable:
    async def handler(request: Request, exc: Exception):
        if isinstance(exc, AppBaseException):
            return JSONResponse(
                status_code=status_code,
                content={
                    "error": {
                        "message": exc.detail,
                        "code": exc.error_code
                    }
                }
            )

        # Generic fallback for unhandled exceptions (500)
        return JSONResponse(
            status_code=500,
            content={
                "error": {
                    "message": "An unexpected error occurred.",
                    "code": "INTERNAL_SERVER_ERROR"
                }
            }
        )

    return handler
