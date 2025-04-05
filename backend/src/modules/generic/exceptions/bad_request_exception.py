from .base_exception import AppBaseException
from starlette.status import HTTP_400_BAD_REQUEST

class AppBadRequestException(AppBaseException):
    """
    🔴 AppBadRequestException (400)
    Used to represent client-side errors due to invalid requests.
    
    - Common use cases: validation failures, missing fields, bad input formats
    - `error_code` can be used by clients to handle errors programmatically
    
    Example:
        raise AppBadRequestException("Email is required.", "EMAIL_REQUIRED")
    """
    def __init__(self, message: str, error_code: str = "BAD_REQUEST"):
        super().__init__(message, error_code, status_code=HTTP_400_BAD_REQUEST)