import json
from pathlib import Path
from typing import List
from ..dtos.sales_summary_response_dto import SalesSummaryResponseDto
from ..dtos.sales_rep_details_response_dto import SalesRepDetailsResponseDto
from ..enums.sales_error_code_enum import SalesErrorCode
from src.modules.generic.exceptions.not_found_exception import AppNotFoundException
from src.modules.generic.exceptions.bad_request_exception import AppBadRequestException

class SalesService:
    def __init__(self):
        self.data_path = Path(__file__).resolve().parent.parent / "data" / "dummyData.json"

    def _load_data(self) -> List[dict]:
        with open(self.data_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        return data["salesReps"]

    async def get_sales_summary(self) -> List[SalesSummaryResponseDto]:
        sales_data = self._load_data()
        return [SalesSummaryResponseDto(**sales) for sales in sales_data]

    async def get_sales_rep_details(self, sales_id: int) -> SalesRepDetailsResponseDto:
        sales_data = self._load_data()
        for sales in sales_data:
            if sales["id"] == sales_id:
                return SalesRepDetailsResponseDto(**sales)

        raise AppNotFoundException( message="Sales representative not found.", error_code=SalesErrorCode.NOT_FOUND )

