import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uidState } from "../recoil/Atoms";
import { useRecoilState } from "recoil";
import { validateUid } from "../utils/validateUid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainPage() {
  const [_, setUid] = useRecoilState(uidState);
  const [localUid, setLocalUid] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  /**
   * Atom에 UID 상태를 업데이트한다
   */
  const fetchUidToAtom = () => {
    setUid(localUid);
  };

  /**
   * 버튼을 누르면 프로필 페이지로 이동하는 함수
   */
  const goToProfilePage = () => {
    if (validateUid(localUid, setErrorMessage)) {
      fetchUidToAtom();
      // 프로필 페이지로 이동하는 로직
      navigate("/profile");
    }
  };

  /**
   * errorMessage 상태가 비어있으면 green, 존재하면 red로 border 색을 바꾸는 함수
   */
  const getInputBorderStyle = () => {
    return errorMessage ? "border-red-500 focus:border-red-500" : "border-green-600 focus:border-green-600";
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-gray-800 relative">
        <Navbar />
        <div className="bg-white w-full max-w-lg py-10 mx-10 rounded-lg text-center">
          <h3 className="text-3xl text-gray-800 font-bold">UID를 입력해주세요</h3>
          <div className="flex flex-col mt-5 px-5">
            <input
              value={localUid}
              inputMode="decimal"
              onChange={(e) => setLocalUid(e.target.value)}
              placeholder="Your genshin UID"
              className={`bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:${getInputBorderStyle()} mb-3 py-3 px-5 rounded-lg`}
            />
            {/* 오류 메시지를 표시하는 부분 */}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <button
              onClick={goToProfilePage}
              className="py-3 px-5 bg-gray-800 text-white mt-3 text-lg rounded-lg focus:outline-none hover:opacity-90 font-bold"
            >
              Enter
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
