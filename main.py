from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI() # FastAPI 객체 만들기

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 모든 Origin을 허용하려면 "*"
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization"],
)

@app.get("/getprofile/{uid}")
async def something(uid:str):
    url = f"https://enka.network/api/uid/{uid}"
    async with httpx.AsyncClient() as client:
        res = await client.get(url)
    return res.json()