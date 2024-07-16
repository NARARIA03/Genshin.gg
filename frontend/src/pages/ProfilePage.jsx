import React, { useEffect, useState } from "react";
import { uidState, profileState } from "../recoil/Atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { fetchUserData } from "../apis/FetchUserData";

import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import Namecard from "../components/Namecard";
import Characters from "../components/Characters";
import CharPrivacyWarnPage from "./CharPrivacyWarnPage";
import UidSearchFailPage from "./UidSearchFailPage";
import Footer from "../components/Footer";

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
    <>
      <div className="w-full h-[73rem] md:h-[60rem] bg-gray-800">
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
              <CharPrivacyWarnPage />
            )
          ) : (
            <UidSearchFailPage />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
