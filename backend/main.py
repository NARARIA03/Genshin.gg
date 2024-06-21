from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from typing import List
import httpx
import json


app = FastAPI()  # FastAPI 객체 만들기
f = open("./TextMapKR.json", "r")  # 한국어 지원을 위한 hashmap 불러오기
text_map_kr = json.load(f)

origins = [
    "http://211.215.13.73:8000",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization"],
)


@app.get("/getprofile/{uid}")
async def get_user_data(uid: str) -> dict:
    url = f"https://enka.network/api/uid/{uid}"
    async with httpx.AsyncClient() as client:
        res = await client.get(url)
    return res.json()


@app.get("/getavatarname")
async def get_avatar_name(nameHashAry: List[str] = Query(...)) -> list[str]:
    name_ary = []
    for hash_map_key in nameHashAry:
        name_ary.append(text_map_kr[hash_map_key])
    return name_ary


@app.get("/getequipname")
async def get_equip_name(hashMapList: List[str] = Query(...)) -> list[str]:
    name_ary = []
    for hash_map_key in hashMapList:
        name_ary.append(text_map_kr[hash_map_key])
    return name_ary
