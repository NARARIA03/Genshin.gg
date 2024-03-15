import axios from "axios";
/**
 * Enka.Network - API 에서 UID로 원신 프로필 fetch하는 함수
 */
export const fetchUserData = async (uid, setUserData, setLoading) => {
  // 로딩 상태로 변경
  setLoading(true);
  try {
    const API_URL = "http://127.0.0.1:8000/getprofile/" + uid;
    await axios.get(API_URL).then((res) => {
      console.log(res.data);
      setUserData(res.data);
    });
  } catch (e) {
    // 오류 발생시 오류코드 Alert
    alert(`에러 발생 => ${e}`);
  }
  // 로딩 상태 종료
  setLoading(false);
};
