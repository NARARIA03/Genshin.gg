import React from "react";

export default function CharPrivacyWarnPage(): React.JSX.Element {
  return (
    <div className="h-screen flex justify-center flex-col items-start">
      <p className="text-white text-sm md:text-base lg:text-xl mx-5">
        원신 게임 내에서 캐릭터 상세보기가 비공개 상태이거나, 진열장에 전시된 캐릭터가 없어서 정보를 불러올 수 없습니다. 인게임에서 확인
        부탁드립니다!
      </p>
      <p className="text-white text-sm md:text-base lg:text-xl mx-5">
        혹은, 현재 API 서버가 점검 중일 수 있습니다. 잠시 후 다시 시도해주세요.
      </p>
    </div>
  );
}
