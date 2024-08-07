import React from "react";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="w-full bg-gray-800">
      <div className="w-[98%] flex flex-col justify-center items-center border-t border-gray-700 mx-auto">
        <div className="flex flex-col p-2">
          <a href="https://github.com/EnkaNetwork/API-docs" className="text-gray-300 hover:text-gray-400 p-2">
            <div className="flex items-center">
              <img className="w-4 md:w-6 mr-2" src="/enka.png" alt="Enka.network Logo" />
              <p className="text-xs md:text-base">Powered by Enka.network</p>
            </div>
          </a>
          <a href="https://github.com/NARARIA03/Genshin.gg" className="text-gray-300 hover:text-gray-400 p-2">
            <div className="flex items-center">
              <img className="w-4 md:w-6 mr-2" src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt="Github Logo" />
              <p className="text-xs md:text-base">Github</p>
            </div>
          </a>
          <p className="text-xs md:text-base text-gray-400 px-2 py-1">
            Genshin.gg는 HoYoverse와 연관이 없습니다. 이 웹페이지는 취미로 개발되었으며, 상업적 용도가 아닙니다.
          </p>
          <p className="text-xs md:text-base text-gray-400 px-2 py-1">
            Genshin Impact, 게임의 콘텐츠와 소재의 트레이드마크와 저작권은 HoYoverse에 있습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
