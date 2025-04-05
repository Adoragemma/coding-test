from pydantic import BaseModel

class DealDto(BaseModel):
    client: str
    value: float
    status: str
