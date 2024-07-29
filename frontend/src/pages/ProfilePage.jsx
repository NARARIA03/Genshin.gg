import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { uidState, profileState } from "../recoil/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { fetchUserData } from "../apis/fetchUserData";

import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import Namecard from "../components/Namecard";
import Characters from "../components/Characters";
import CharPrivacyWarnPage from "./CharPrivacyWarnPage";
import UidSearchFailPage from "./UidSearchFailPage";
import Footer from "../components/Footer";

export default function ProfilePage() {
  ReactGA.send({
    hitType: "pageview",
    page: "/profile",
    title: "Profile",
  });

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
      <div className="w-full bg-gray-800">
        <Navbar />
        <div className="w-full flex justify-center">
          {loading ? (
            <Loading />
          ) : fetchIsSuccess ? (
            userData?.avatarInfoList ? (
              <div className="w-full h-[73rem] md:h-[60rem] bg-gray-800">
                <Namecard />
                <Characters />
                <Footer />
              </div>
            ) : (
              <div className="flex flex-col">
                <CharPrivacyWarnPage />
                <Footer />
              </div>
            )
          ) : (
            <div className="flex flex-col">
              <UidSearchFailPage />
              <Footer />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
