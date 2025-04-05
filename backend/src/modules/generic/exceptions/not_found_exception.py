from .base_exception import AppBaseException
from starlette.status import  HTTP_404_NOT_FOUND

class AppNotFoundException(AppBaseException):
    """
    🟡 AppNotFoundException (404)
    Raised when a requested resource cannot be found.

    - Common use cases: missing records, invalid route parameters
    - Custom `error_code` helps standardize error handling in frontend/backend
    
    Example:
        raise AppNotFoundException("User not found.", "USER_NOT_FOUND")
    """
    def __init__(self, message: str, error_code: str = "NOT_FOUND"):
        super().__init__(message, error_code, status_code=HTTP_404_NOT_FOUND)
