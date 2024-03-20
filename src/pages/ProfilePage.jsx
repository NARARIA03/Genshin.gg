import React, { useEffect, useState } from "react";
import { uidState, profileState } from "../recoil/Atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { fetchUserData } from "../apis/FetchUserData";

import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import Namecard from "../components/Namecard";
import Characters from "../components/Characters";

const ProfilePage = () => {
  const uid = useRecoilValue(uidState);
  const [userData, setUserData] = useRecoilState(profileState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // userData가 비어있거나, userData에 저장된 uid와 검색할 때 사용하는 uid가 다르면 fetch 수행
    if (!userData || userData.uid !== uid) {
      fetchUserData(uid, setUserData, setLoading);
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center bg-gray-800">
        {loading ? (
          <Loading />
        ) : (
          <div className="w-full">
            {/* 여기 w-full 넣기 전까지 반응형 안먹었음 ㅋㅋ;;*/}
            <Namecard />
            <Characters />
          </div>
        )}
      </div>
    </>
  );
};

export default ProfilePage;
