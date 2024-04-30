from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import httpx
import json

class AvatarNameReq(BaseModel):
    nameHashAry: List[str]

class UserDataReq(BaseModel):
    uid: str

app = FastAPI() # FastAPI 객체 만들기
f = open("./TextMapKR.json", "r") # 한국어 지원을 위한 hashmap 불러오기
text_map_kr = json.load(f)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 모든 Origin을 허용하려면 "*"
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization"],
)

@app.post("/getprofile")
async def return_user_data(req:UserDataReq):
    # print("uid: ", req.uid)
    url = f"https://enka.network/api/uid/{req.uid}"
    async with httpx.AsyncClient() as client:
        res = await client.get(url)
    return res.json()

@app.post("/getavatarname")
async def return_avatar_name(req:AvatarNameReq):
    name_ary = []
    for hash_map_key in req.nameHashAry:
        # print("hashMapKey: ", hash_map_key)
        # print("name: ", text_map_kr[hash_map_key])
        name_ary.append(text_map_kr[hash_map_key])
    # print("result: ", name_ary)
    return name_ary