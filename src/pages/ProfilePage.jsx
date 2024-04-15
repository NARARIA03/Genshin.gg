import React, { useEffect, useState } from "react";
import { uidState, profileState } from "../recoil/Atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { fetchUserData } from "../apis/FetchUserData";

import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import Namecard from "../components/Namecard";
import Characters from "../components/Characters";

export default function ProfilePage() {
  const uid = useRecoilValue(uidState);
  const [userData, setUserData] = useRecoilState(profileState);
  const [loading, setLoading] = useState(false);
  const [fetchIsSuccess, setFetchIsSuccess] = useState();

  useEffect(() => {
    // userData가 비어있거나, userData에 저장된 uid와 검색할 때 사용하는 uid가 다르면 fetch 수행
    if (!userData || userData.uid !== uid) {
      fetchUserData(uid, setUserData, setLoading, setFetchIsSuccess);
    }
  }, []);
  return (
    <div className="h-screen w-screen bg-gray-800">
      <Navbar />
      <div className="h-full w-full flex justify-center">
        {loading ? (
          <Loading />
        ) : fetchIsSuccess ? (
          userData?.avatarInfoList ? (
            <div className="w-full h-full">
              <Namecard />
              <Characters />
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <p className=" text-white text-xl">
                캐릭터 상세보기가 비공개 상태이거나, 진열장에 전시된 캐릭터가
                없습니다. 인게임에서 확인 부탁드립니다!
              </p>
            </div>
          )
        ) : (
          <div className="flex justify-center items-center">
            <p className=" text-white text-xl">
              UID 검색에 실패했습니다. 메인 화면에서 다시 시도해주세요!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
