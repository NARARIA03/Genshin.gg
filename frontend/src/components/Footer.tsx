import React from "react";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="w-full bg-gray-800">
      <div className="w-[98%] flex flex-col justify-center items-center border-t border-gray-700 mx-auto">
        <div className="flex flex-col p-2">
          <p className="text-gray-300 px-2 py-1">이 웹페이지는 취미로 개발되었으며, 상업적 용도가 아닙니다.</p>
          <p className="text-sm text-gray-300 p-2">Developed by CHS</p>
          <a href="https://github.com/EnkaNetwork/API-docs" className="text-gray-300 hover:text-gray-400 p-2">
            <div className="flex">
              <img className="w-6 h-6 mr-2" src="/enka.png" alt="Enka.network Logo" />
              <p>Powered by Enka.network</p>
            </div>
          </a>
          <a href="https://github.com/NARARIA03/Genshin.gg" className="text-gray-300 hover:text-gray-400 p-2">
            <div className="flex">
              <img className="w-6 h-6 mr-2" src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt="Github Logo" />
              <p>Github repo</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
