import React from "react";

export default function CharPrivacyWarnPage(): React.JSX.Element {
  return (
    <div className="flex justify-center flex-col items-center">
      {/* 태블릿, 핸드폰에서 보일 메시지 */}
      <p className="md:hidden text-white text-base mx-7 my-2">
        원신 게임 내에서 캐릭터 상세보기가 비공개 상태이거나, 진열장에 전시된 캐릭터가 없어서 정보를 불러올 수 없습니다. 인게임에서 확인
        부탁드립니다!
      </p>
      {/* 노트북, 데스크탑에서 보일 메시지 */}
      <div className="hidden md:flex justify-center items-center flex-col text-white text-2xl mx-7 my-1">
        <p>원신 게임 내에서 캐릭터 상세보기가 비공개 상태이거나,</p>
        <p>진열장에 전시된 캐릭터가 없어서 정보를 불러올 수 없습니다.</p>
        <p>인게임에서 확인 부탁드립니다!</p>
      </div>
    </div>
  );
}
