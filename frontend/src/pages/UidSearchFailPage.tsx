import React from "react";

export default function UidSearchFailPage(): React.JSX.Element {
  return (
    <div className="h-screen flex justify-center flex-col items-start">
      <p className="text-white text-sm md:text-base lg:text-xl mx-5">UID 검색에 실패했습니다. UID를 다시 확인해주세요.</p>
      <p className="text-white text-sm md:text-base lg:text-xl mx-5">
        혹은, 현재 API 서버가 점검 중일 수 있습니다. 잠시 후 다시 시도해주세요.
      </p>
    </div>
  );
}
