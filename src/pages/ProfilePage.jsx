import React, { useEffect, useState } from "react";
import { uidState, profileState } from "../recoil/Atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { fetchUserData } from "../apis/FetchUserData";

import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

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
      <div className="h-screen flex items-center justify-center bg-gray-800">
        {loading ? (
          <Loading />
        ) : (
          <div>
            <p className="text-3xl">Profile Page</p>
            <p className="text-3xl">{userData?.playerInfo?.nickname}</p>
            <p className="text-3xl">{uid}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfilePage;
