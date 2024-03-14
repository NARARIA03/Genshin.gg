import React, { useEffect, useState } from "react";
import { uidState } from "../recoil/Atoms";
import { useRecoilValue } from "recoil";
import axios from "axios";

import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

const ProfilePage = () => {
  const uid = useRecoilValue(uidState);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const testGetProfile = async (uid) => {
    setLoading(true);
    try {
      const API_URL =
        "https://cors-anywhere.herokuapp.com/" +
        "https://enka.network/api/uid/" +
        uid +
        "/";
      const data = await axios.get(API_URL);
      setUserData(data.data);
    } catch {
      // 오류 발생시 실행
      console.error("error");
    }
    setLoading(false);
  };

  useEffect(() => {
    testGetProfile(uid);
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
