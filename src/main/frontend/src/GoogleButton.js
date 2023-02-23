// import "./Login.css"
import GoogleLogin from 'react-google-login';
import {useEffect, useCallback} from 'react';
import { gapi } from 'gapi-script';
import axios from 'axios';

const clientId = '54088883439-vjqo4c1u6727cdtj175sf8kbbsvuup7l.apps.googleusercontent.com';

const GoogleButton = () => {

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId,
        scope: 'email',
      });
    }

    gapi.load('client:auth2',start);

  },[]);

  const onSuccess = (res) =>{
    alert(res.tokenObj.access_token);
    // axios.post('api/login/google', res.tokenObj)
    // .then(response => alert(response))
    // .catch(error => alert('구글 로그인 실패.',error))
  }

  const onFailure = (res) =>{
    alert(res);
  }

  

  return (
    <div>
      <GoogleLogin
      clientId={clientId}
      buttonText="구글 아이디로 로그인"
      onSuccess={onSuccess}
      onFailure={onFailure}
      />
    </div>
  );
}

export default GoogleButton;
