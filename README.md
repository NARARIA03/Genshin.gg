# Genshin.gg

- Hoyoverse의 게임인 "원신" 플레이어를 위해 개발하는 사이드프로젝트 웹페이지입니다.
- 본인의 UID를 입력하면 다양한 본인의 계정에 대한 Report를 제공하도록 만들어보려고 하고 있습니다.

---

## 배포 웹 테스트

배포 주소: https://genshin.gg.mooo.com

> FE 및 BE를 https로 배포하기 위한 자세한 과정: [Link](https://github.com/NARARIA03/Mypage?tab=readme-ov-file#2-%EA%B0%9C%EC%9D%B8-ubuntu-server%EC%97%90-%EB%8F%84%EB%A9%94%EC%9D%B8%EC%9D%84-%EB%93%B1%EB%A1%9D%ED%95%98%EA%B3%A0-https-%EC%A0%81%EC%9A%A9)

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

---

### 24.06.23 기준 결과물

| ![image12](https://github.com/NARARIA03/Genshin.gg/assets/107057834/ad31a55a-5d29-416e-bf68-e0b5cf31fbed) | ![image13](https://github.com/NARARIA03/Genshin.gg/assets/107057834/19f0e19a-c933-4471-9b58-e866032ee7de) | ![image14](https://github.com/NARARIA03/Genshin.gg/assets/107057834/e4b982a0-3d0e-419e-a9a1-0710ee081cbd) |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |

각 캐릭터마다 무기 1개와 성유물 5개를 장착 가능한데, 장착한 장비를 이미지로 보여주며 마우스를 올리거나 클릭 시 팝업을 띄워 상세 정보를 확인할 수 있도록 구현해줬다.

단, 아직 모바일에서는 UI가 완벽하지 않아 손 볼 필요가 있다.

---

### 24.07.17 기준 결과물

| ![image15](https://github.com/user-attachments/assets/d8f55cc1-bf11-4189-b856-99da1a779dfc) | ![image16](https://github.com/user-attachments/assets/2a837afb-bd6f-473d-9f14-b0e84d0573d7) | ![image17](https://github.com/user-attachments/assets/c66770b8-4442-4208-8957-900372545e00) |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |

| ![image19](https://github.com/user-attachments/assets/835ae3ae-d9a3-4846-9af7-0bdab52b7fe9) | ![image18](https://github.com/user-attachments/assets/f68b85fa-9a74-43b5-9990-1d1e61c51863) |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |

캐릭터 이미지를 가운데 두고 `position: relative;` 적용, 캐릭터 소개와 장비 스펙 등의 컴포넌트에 `position: absolute;` 를 적용해 이미지에 대한 상대적 위치로 배치해줬다.
별 일이 없다면, 캐릭터 관련 컴포넌트의 레이아웃은 이대로 fix할 것 같다.

이번에 레이아웃 잡으면서 알게 된 사실:

- tailwindCSS에서 반응형 레이아웃을 구성할 때 주로 `sm:` `md:` `lg:` `xl:`를 사용하게 되는데 이것들은 `min-width` 기준으로 미디어 쿼리를 적용시킨다.
- `max-width`에 익숙하다 보니 `min-width`가 잘 와닿지 않았는데, 레이아웃이 바뀌었으면 하는 기준(예를 들어 `640px`)에서 더 작을 때 원하는 속성은 그냥 적고, 더 클 때 원하는 속성을 `sm:`을 붙여 적으면 된다.
- 즉, 작을 때 적용될 속성은 그냥 적고, 특정 width 이상일 때 적용될 속성을 `md:`와 같은걸 붙여 적으면 된다.

`Navbar`의 하단에 `border`를 넣어 디자인해줬고, `Footer`도 만들었다. 내용은 조금씩 채워나갈 예정.

`border` 색상과 두께 역시 좀 더 얇게 해줬다. 두꺼우니 안 예뻐서..

---

### 24.07.29 기준 결과물

| ![image20](https://github.com/user-attachments/assets/c09589c2-3f2d-4da1-9af5-9267f8784b72) | ![image21](https://github.com/user-attachments/assets/acb83bca-53c6-4003-b233-65e649846934) |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |

진열장 캐릭터들의 스텟 정보를 보여주는 기능 구현 완료. UI도 좀 더 수정해줘야 할 것 같고, 함께 보여주면 좋을 정보들도 고민중이다.

---
