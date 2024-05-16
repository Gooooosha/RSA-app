from pydantic import BaseModel

class RSA(BaseModel):
    message: str
    e: str
    n: str