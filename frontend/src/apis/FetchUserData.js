import axios from "axios";
/**
 * FastAPI 서버로 UID를 보내 Enka Network API 에서 userData를 받아온다
 */
export const fetchUserData = async (
  uid,
  setUserData,
  setLoading,
  setFetchIsSuccess
) => {
  // 로딩 상태로 변경
  setLoading(true);
  try {
    const API_URL = "http://127.0.0.1:8000/getprofile/" + uid;
    await axios.get(API_URL).then((res) => {
      console.log(res.data);
      setUserData(res.data);
      // ProfilePage에서 userData에 접근해서 NameCard와 Characters 컴포넌트를 불러와도 된다고 알리기 위해 true
      setFetchIsSuccess(true);
    });
  } catch (e) {
    // 오류 발생시 오류코드 Alert
    alert(`에러 발생 => ${e}`);
    // ProfilePage에서 userData에 접근하지 말라고 알리기 위해 false
    setFetchIsSuccess(false);
  } finally {
    // 로딩 상태 종료
    setLoading(false);
  }
};
