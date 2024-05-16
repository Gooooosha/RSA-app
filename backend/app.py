from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models.RSA import RSA

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/rsa")
async def get_all_urls(rsa: RSA):
    


