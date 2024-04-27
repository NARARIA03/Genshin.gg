from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import httpx
import json

app = FastAPI() # FastAPI 객체 만들기
f = open("./src/store/textMapKR.json", "r") # 한국어 지원을 위한 hashmap 불러오기
text_map_kr = json.load(f)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 모든 Origin을 허용하려면 "*"
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization"],
)

@app.get("/getprofile/{uid}")
async def fetch_api(uid:str):
    url = f"https://enka.network/api/uid/{uid}"
    async with httpx.AsyncClient() as client:
        res = await client.get(url)
    return res.json()

@app.get("/getavatarname/{hashMapKey}")
async def return_avatar_name(hashMapKey:str):
    print(text_map_kr[hashMapKey])
    return text_map_kr[hashMapKey]