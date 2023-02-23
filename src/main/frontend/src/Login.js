import "./Login.css"
import axios from 'axios';
import {useEffect, useState} from 'react';
import GoogleButton from './GoogleButton';

function Login() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const handleInputId = (e) =>{
    setInputId(e.target.value);
    console.log(e.target.value)
  }

  const handleInputPw = (e) =>{
    setInputPw(e.target.value);
    console.log(e.target.value)
  }

  const handleLoginBtnClick = (e) =>{
    axios.post('/api/login', 
    {
      id : inputId,
      password: inputPw,
    }
    )
    .then(response => alert(response))
    .catch(error => alert('로그인 실패.',error))
  }

  // 페이지 렌더링 후 가장 처음 호출되는 함수
  useEffect(() => {
    console.log('컴포넌트 렌더링 끝');
  },
  // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
  [])

  return (
    <div id="login" className="login-container">
      <div className="login-item">
        <h1>
          Page Login.
        </h1>
      </div>
      <div className="login-item">
        <label htmlFor="input_id">아 이 디 : </label>
        <input type="text" name="input_id" value={inputId} onChange={handleInputId}/>
      </div>
      <div className="login-item">
        <label htmlFor="input_pw">비밀번호 : </label>
        <input type="text" name="input_pw" value={inputPw} onChange={handleInputPw}/>
      </div>
      <div className="login-item">
        <button type="button" onClick={handleLoginBtnClick}>로그인</button>
      </div>
      <div className="login-item">
        <GoogleButton/>
      </div>
    </div>
  );
}

export default Login;
