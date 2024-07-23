/**
 * 사용자가 입력한 UID의 유효성을 검사하는 함수
 */
export const validateUid = (uid, setErrorMessage) => {
  if (!uid) {
    setErrorMessage("Please enter your UID");
    return false;
  }
  if (!checkUidForm(uid)) {
    setErrorMessage("Check your UID again");
    return false;
  }
  return true;
};

const checkUidForm = (uid) => {
  const regex = /^\d{9}$/;
  if (regex.test(uid)) {
    return true;
  }
  return false;
};
