import React from "react";
import { uidState } from "../recoil/Atoms";
import { useRecoilValue } from "recoil";

const ProfilePage = () => {
  const uid = useRecoilValue(uidState);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <p className="text-3xl">Profile Page</p>
      <p className="text-3xl">{uid}</p>
    </div>
  );
};

export default ProfilePage;
