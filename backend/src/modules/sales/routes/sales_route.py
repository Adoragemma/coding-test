from typing import List
from fastapi import APIRouter
from ..services.sales_service import SalesService
from ..dtos.sales_summary_response_dto import SalesSummaryResponseDto
from ..dtos.sales_rep_details_response_dto import SalesRepDetailsResponseDto

sales_router = APIRouter()
sales_service = SalesService()


@sales_router.get("/", response_model=List[SalesSummaryResponseDto])
async def get_sales_summary():
    return await sales_service.get_sales_summary()


@sales_router.get("/{sales_id}", response_model=SalesRepDetailsResponseDto)
async def get_sales_rep_details(sales_id: int):
    return await sales_service.get_sales_rep_details(sales_id)
