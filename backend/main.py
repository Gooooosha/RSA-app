from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from RSAKeyManager import RSAKeyManager

app = FastAPI()

key_manager = RSAKeyManager()


class Message(BaseModel):
    message: str


class Signature(BaseModel):
    message: str
    signature: str


@app.get("/keys")
def get_keys():
    if key_manager.private_key is None or key_manager.public_key is None:
        raise HTTPException(status_code=500, detail="Keys have not been generated")
    private_pem = key_manager.serialize_private_key()
    public_pem = key_manager.serialize_public_key()
    return {"private_key": private_pem, "public_key": public_pem}


@app.post("/sign")
def sign(msg: Message):
    if key_manager.private_key is None:
        raise HTTPException(status_code=500, detail="Private key not found")
    signature = key_manager.sign_message(msg.message)
    return {"signature": signature.hex()}


@app.post("/verify")
def verify(sig: Signature):
    if key_manager.public_key is None:
        raise HTTPException(status_code=500, detail="Public key not found")
    signature_bytes = bytes.fromhex(sig.signature)
    is_valid = key_manager.verify_signature(sig.message, signature_bytes)
    return {"valid": is_valid}


# To run the app, use the following command:
# uvicorn main:app --reload
