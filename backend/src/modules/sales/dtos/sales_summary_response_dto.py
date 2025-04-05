from pydantic import BaseModel

class SalesSummaryResponseDto(BaseModel):
    id: int
    name: str
    role: str
    region: str
