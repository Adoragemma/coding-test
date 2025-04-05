from pydantic import BaseModel

class ClientDto(BaseModel):
    name: str
    industry: str
    contact: str
