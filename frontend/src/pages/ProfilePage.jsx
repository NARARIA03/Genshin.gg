import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();
  const uid = useRecoilValue(uidState);
  const [userData, setUserData] = useRecoilState(profileState);
  const [loading, setLoading] = useState(false);
  const [fetchIsSuccess, setFetchIsSuccess] = useState();

  useEffect(() => {
    if (!userData && !uid) {
      // Recoil-persistant에 uid가 기록되지 않은, 초기 유저가 profile을 클릭한 경우 alert로 안내하고 초기페이지로 강제이동
      alert("Main 화면에서 UID를 검색한 뒤에 이용해주세요.");
      navigate("/");
    } else if (!userData || userData.uid !== uid) {
      // userData가 비어있거나, userData에 저장된 uid와 검색할 때 사용하는 uid가 다르면 fetch 수행
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
