# Genshin.gg

- Hoyoverse의 게임인 "원신" 플레이어를 위해 개발하는 사이드프로젝트 웹페이지입니다.
- 본인의 UID를 입력하면 다양한 본인의 계정에 대한 Report를 제공하도록 만들어보려고 하고 있습니다.

---

## 개발환경

- FrontEnd
  - react 18.2.0
  - react-router-dom 6.22.3
  - axios 1.6.7
  - recoil 0.7.7
  - recoil-persist 5.1.0
  - tailwindcss 3.4.1
- BackEnd
  - python 3.11.7
  - fastapi 0.110.0
  - httpx 0.27.0
  - uvicorn 0.28.0

---

## 사용 API

- Enka.Network - API를 사용하였습니다.
  [Enka.Network API Github](https://github.com/EnkaNetwork/API-docs)

---

## How To Start

```
npm start
uvicorn main:app --reload
```

---

## 결과물

### 24.03.17 기준 결과물

<img alt="스크린샷 2024-03-20 20 22 07" src="https://github.com/NARARIA03/Genshin.gg/assets/107057834/eda147ff-0673-4c72-a218-ce0f2e7a1e2b">

<img alt="스크린샷 2024-03-20 20 22 07" src="https://github.com/NARARIA03/Genshin.gg/assets/107057834/0d78a586-b4da-4906-b8db-ae1ce55a2b18">

---

### 24.03.20 기준 결과물

<img alt="스크린샷 2024-03-20 20 22 07" src="https://github.com/NARARIA03/Genshin.gg/assets/107057834/c74d2636-acb2-4f13-ad8a-e4831ad43995">

---

### 24.04.15 기준 결과물

예외처리 추가, 상단바 화면고정 방식으로 변경
<img width="1031" alt="스크린샷 2024-04-16 03 17 28" src="https://github.com/NARARIA03/Genshin.gg/assets/107057834/36eedac8-d940-4036-a665-dc339eb17b11">
상단바가 화면에 고정된 것을 볼 수 있다.
<img width="1028" alt="스크린샷 2024-04-16 03 24 16" src="https://github.com/NARARIA03/Genshin.gg/assets/107057834/fcdd7c20-5def-4712-95ef-34a8efe0c2ee">
UID는 불러왔으나, avatarInfoList가 undefined인 경우 위와 같이 안내한다.
<img width="1030" alt="스크린샷 2024-04-16 03 25 14" src="https://github.com/NARARIA03/Genshin.gg/assets/107057834/a1a63324-1feb-4fcb-8ab0-7b9011bffec8">
UID가 없거나, 기타 문제가 발생해 API response를 받아오지 못 한 경우 위와 같이 안내한다.
<img width="1028" alt="스크린샷 2024-04-16 03 31 28" src="https://github.com/NARARIA03/Genshin.gg/assets/107057834/91301aaa-15d5-4b79-93ce-dad811787bf7">
진열장에 캐릭터가 많은 경우에도 스크롤을 내렸을 때 배경색이 유지되도록 고쳤다.

---

### 24.04.27 기준 결과물

<img width="1511" alt="스크린샷 2024-04-27 23 14 08" src="https://github.com/NARARIA03/Genshin.gg/assets/107057834/aa72b9df-4778-4a9c-8d12-2abe4e2f0d1e">
<img width="1508" alt="스크린샷 2024-04-27 23 17 22" src="https://github.com/NARARIA03/Genshin.gg/assets/107057834/8271ad5c-dadb-4fe8-8cbc-c2ef087c5354">
우측의 캐릭터 버튼을 클릭해서 해당 캐릭터 정보를 볼 수 있는 상세 컴포넌트 구현 (현재는 캐릭터 이미지와 이름 레벨 정도만 출력)

캐릭터 이미지를 구하기 위해 `avatarInfo.SideIconName`에서 캐릭터 이름을 따로 파싱해서 API주소로 사용함

```js
const sideIconName = characters[avatarId]?.SideIconName;
const avatarName = sideIconName.substring("UI_AvatarIcon_Side_".length);
const url = "https://enka.network/ui/UI_Gacha_AvatarImg_" + avatarName + ".png";
```

---
