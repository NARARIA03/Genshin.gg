import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* 로고 또는 사이트 제목 */}
        <div className="flex items-center">
          <a href="/" className="text-white font-bold text-lg">
            Genshin.GG
          </a>
        </div>
        {/* 네비게이션 링크 */}
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/profile" className="text-white hover:text-gray-300">
                Profile
              </a>
            </li>
            <li>
              <a href="/" className="text-white hover:text-gray-300">
                page2
              </a>
            </li>
          </ul>
        </div>
        {/* 모바일 화면용 햄버거 버튼 */}
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* 햄버거 버튼 클릭 시 메뉴 토글 */}
      {isMenuOpen && (
        <div>
          <ul className="flex flex-col space-y-3 mt-3">
            <li>
              <a href="/" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="text-white hover:text-gray-300">
                page1
              </a>
            </li>
            <li>
              <a href="/" className="text-white hover:text-gray-300">
                page2
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
