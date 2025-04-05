from fastapi import APIRouter
from ..services.ai_service import AIService
from ..dtos.prompt_request_dto import PromptRequestDto
from ..dtos.prompt_response_dto import PromptResponseDto

ai_router = APIRouter()
ai_service = AIService()


@ai_router.post("/ask", response_model=PromptResponseDto)
async def ask_ai(request: PromptRequestDto):
    return await ai_service.ask_question(request.prompt)
