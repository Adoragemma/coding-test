from fastapi import HTTPException

class AppBaseException(HTTPException):
    def __init__(self, message: str, error_code: str, status_code: int):
        self.error_code = error_code
        super().__init__(status_code=status_code, detail=message)
