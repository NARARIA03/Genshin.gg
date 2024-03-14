import React, { useEffect, useState } from "react";
import { uidState } from "../recoil/Atoms";
import { useRecoilValue } from "recoil";
import { fetchUserData } from "../apis/FetchUserData";

import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

const ProfilePage = () => {
  const uid = useRecoilValue(uidState);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUserData(uid, setUserData, setLoading);
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
