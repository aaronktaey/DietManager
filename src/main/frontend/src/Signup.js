import "./Signup.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [signupId, setsignupId] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handlesignupId = (e) => {
    setsignupId(e.target.value);
    console.log(e.target.value);
  };

  const handlepassword = (e) => {
    setpassword(e.target.value);
    console.log(e.target.value);
  };

  const handleNavigateToLogin = (e) => {
    navigate("/login");
  };

  const handlesignupBtnClick = (e) => {
    axios
      .post("/api/signup", {
        signupId: signupId,
        password: password,
      })
      .then((response) => alert(response))
      .catch((error) => alert("회원가입 실패.", error));
  };

  // 페이지 렌더링 후 가장 처음 호출되는 함수
  useEffect(
    () => {
      console.log("컴포넌트 렌더링 끝");
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    []
  );

  return (
    <div id="signup" className="signup-container">
      <div className="signup-item">
        <h1>회원가입</h1>
      </div>
      <div className="signup-item">
        <button type="button" onClick={handleNavigateToLogin}>
          로그인 하기
        </button>
      </div>
      <div className="signup-item">
        <label htmlFor="signupId">아 이 디 : </label>
        <input
          type="text"
          name="signupId"
          value={signupId}
          onChange={handlesignupId}
        />
      </div>
      <div className="signup-item">
        <label htmlFor="password">비밀번호 : </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlepassword}
        />
      </div>
      <div className="signup-item">
        <button type="button" onClick={handlesignupBtnClick}>
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Signup;
