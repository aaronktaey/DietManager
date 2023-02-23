import "./Login.css"
import {useEffect, useState} from 'react';

function Login() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const handleInputId = (e) =>{
    setInputId(e.target.value);
  }

  const handleInputPw = (e) =>{
    setInputPw(e.target.value);
  }

  const handleLoginBtnClick = (e) =>{
    alert('로그인 버튼 클릭');
  }

  const handleOAuthBtnClick = (e) =>{
    alert('구글 로그인 버튼 클릭');
  }

  //  const [hello, setHello] = useState('')

  //   useEffect(() => {
  //       axios.get('/api/hello')
  //       .then(response => setHello(response.data))
  //       .catch(error => console.log('아직 API가 없어...'))
  //   }, []);

  return (
    <div id="login" className="login-container">
      <div className="login-item">
        <h1>
          Page Login.
        </h1>
      </div>
      <div>
        <label htmlFor="input_id">아 이 디 : </label>
        <input type="text" name="input_id" value={inputId} onChange={handleInputId}/>
      </div>
      <div>
        <label htmlFor="input_pw">비밀번호 : </label>
        <input type="text" name="input_pw" value={inputPw} onChange={handleInputPw}/>
      </div>
      <div>
        <button type="button" onClick={handleLoginBtnClick}>로그인</button>
      </div>
      <div>
        <button type="button" onClick={handleOAuthBtnClick}>구글 로그인</button>
      </div>
    </div>
  );
}

export default Login;
