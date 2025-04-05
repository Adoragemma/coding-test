from typing import List
from .client_dto import ClientDto
from .deal_dto import DealDto
from .sales_summary_response_dto import SalesSummaryResponseDto

class SalesRepDetailsResponseDto(SalesSummaryResponseDto):
    skills: List[str]
    deals: List[DealDto]
    clients: List[ClientDto]
