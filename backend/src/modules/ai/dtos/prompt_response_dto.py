from pydantic import BaseModel

class PromptResponseDto(BaseModel):
    response: str

