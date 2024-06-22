# Genshin.gg

- Hoyoverse의 게임인 "원신" 플레이어를 위해 개발하는 사이드프로젝트 웹페이지입니다.
- 본인의 UID를 입력하면 다양한 본인의 계정에 대한 Report를 제공하도록 만들어보려고 하고 있습니다.

---

## 배포 웹 테스트

[Click Me!](https://web-genshin-gg-frontend-128y2k2llvjel4ui.sel5.cloudtype.app/)

---

## 개발환경

- FrontEnd
  - react: 18.2.0
  - react-router-dom: 6.22.3
  - axios: 1.6.7
  - qs: 6.12.1
  - recoil: 0.7.7
  - tailwindcss: 3.4.1
    - postcss: 8.4.38
    - autoprefixer: 10.4.19
  - tailwind-scrollbar-hide: 1.1.7
- BackEnd
  - python: 3.11.7
  - fastapi: 0.110.0
  - httpx: 0.27.0
  - uvicorn: 0.28.0

---

## 사용 API

- Enka.Network - API를 사용하였습니다.
  [Enka.Network API Github](https://github.com/EnkaNetwork/API-docs)

---

## How To Start

**frontend**

```shell
cd frontend
echo REACT_APP_API_URL=당신의 FastAPI 구동 주소 >> .env
npm install
npm start
```

**backend**

```shell
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirement.txt
uvicorn main:app --reload
```

---

## 결과물

### 24.03.17 기준 결과물

| ![image1](https://github.com/NARARIA03/Genshin.gg/assets/107057834/eda147ff-0673-4c72-a218-ce0f2e7a1e2b) | ![image2](https://github.com/NARARIA03/Genshin.gg/assets/107057834/0d78a586-b4da-4906-b8db-ae1ce55a2b18) |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |

UID를 불러와 기본적인 정보를 보여주기 성공

---

### 24.03.20 기준 결과물

![image3](https://github.com/NARARIA03/Genshin.gg/assets/107057834/c74d2636-acb2-4f13-ad8a-e4831ad43995)

보유 캐릭터를 불러와 보여주기 성공

---

### 24.04.15 기준 결과물

| ![image4](https://github.com/NARARIA03/Genshin.gg/assets/107057834/a1a63324-1feb-4fcb-8ab0-7b9011bffec8) 예외처리 추가 | ![image5](https://github.com/NARARIA03/Genshin.gg/assets/107057834/36eedac8-d940-4036-a665-dc339eb17b11) 상단바를 화면에 고정 |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |

| ![image6](https://github.com/NARARIA03/Genshin.gg/assets/107057834/fcdd7c20-5def-4712-95ef-34a8efe0c2ee) `UID`는 불러왔으나, `avatarInfoList`가 `undefined`인 경우 위와 같이 안내한다. | ![image7](https://github.com/NARARIA03/Genshin.gg/assets/107057834/91301aaa-15d5-4b79-93ce-dad811787bf7) 진열장에 캐릭터가 많은 경우에도 스크롤을 내렸을 때 배경색이 유지되도록 고쳤다. |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

---

### 24.04.27 기준 결과물

| ![image8](https://github.com/NARARIA03/Genshin.gg/assets/107057834/aa72b9df-4778-4a9c-8d12-2abe4e2f0d1e) | ![image9](https://github.com/NARARIA03/Genshin.gg/assets/107057834/8271ad5c-dadb-4fe8-8cbc-c2ef087c5354) |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |

우측의 캐릭터 버튼을 클릭해서 해당 캐릭터 정보를 볼 수 있는 상세 컴포넌트 구현 (현재는 캐릭터 이미지와 이름 레벨 정도만 출력)

캐릭터 이미지를 구하기 위해 `avatarInfo.SideIconName`에서 캐릭터 이름을 따로 파싱해서 API주소로 사용함

```js
const sideIconName = characters[avatarId]?.SideIconName;
const avatarName = sideIconName.substring("UI_AvatarIcon_Side_".length);
const url = "https://enka.network/ui/UI_Gacha_AvatarImg_" + avatarName + ".png";
```

---

### 24.05.05 기준 결과물

| ![image10](https://github.com/NARARIA03/Genshin.gg/assets/107057834/6285264d-7d94-48f7-b943-39eefde52c42) | ![image11](https://github.com/NARARIA03/Genshin.gg/assets/107057834/09cb1e8c-d15b-47e9-b229-1bc403da5183) |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |

모바일, PC에 적절하게 프로필 페이지를 더 다듬고, 반응형 웹 디자인 도입
