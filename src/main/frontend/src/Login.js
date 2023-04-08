import "./Login.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginId, setloginId] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handleloginId = (e) => {
    setloginId(e.target.value);
    console.log(e.target.value);
  };

  const handlepassword = (e) => {
    setpassword(e.target.value);
    console.log(e.target.value);
  };

  const handleNavigateToSignup = (e) => {
    navigate("/signup");
  };

  const handleLoginBtnClick = (e) => {
    axios
      .post("/api/login", {
        loginId: loginId,
        password: password,
      })
      .then((response) => console.log(response))
      .catch((error) => alert("로그인 실패.", error));
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
    <div id="login" className="login-container">
      <div className="login-item">
        <h1>로그인</h1>
      </div>
      <div className="login-item">
        <button type="button" onClick={handleNavigateToSignup}>
          회원가입 하기
        </button>
      </div>
      <div className="login-item">
        <label htmlFor="loginId">아 이 디 : </label>
        <input
          type="text"
          name="loginId"
          value={loginId}
          onChange={handleloginId}
        />
      </div>
      <div className="login-item">
        <label htmlFor="password">비밀번호 : </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlepassword}
        />
      </div>
      <div className="login-item">
        <button type="button" onClick={handleLoginBtnClick}>
          로그인
        </button>
        <div className="login-item">
          <a
            href="/oauth2/authorization/google"
            className="btn btn-success active"
            role="button"
          >
            구글 로그인
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
