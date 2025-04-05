import os
from openai import OpenAI
from ..dtos.prompt_response_dto import PromptResponseDto

# Shared in-memory history (currently for all users)
# TODO: Replace shared `conversation_history` with session-specific history per user
conversation_history = [
    {"role": "system", "content": "You are a helpful assistant."}
]

class AIService:
    _client = None

    def _get_client(self):
        if AIService._client is None:
            AIService._client = OpenAI(
                base_url="https://openrouter.ai/api/v1",
                api_key=os.getenv("OPENROUTER_API_KEY")
            )
        return AIService._client

    async def ask_question(self, prompt: str) -> PromptResponseDto:
        client = self._get_client()  

        conversation_history.append({"role": "user", "content": prompt})

        response = client.chat.completions.create(
            model="meta-llama/llama-3.3-70b-instruct:free",
            messages=conversation_history,
        )

        answer = response.choices[0].message.content
        conversation_history.append({"role": "assistant", "content": answer})

        return PromptResponseDto(response=answer)
