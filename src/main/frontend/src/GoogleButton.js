// import "./Login.css"
import GoogleLogin from 'react-google-login';
import {useEffect, useCallback} from 'react';
import { gapi } from 'gapi-script';

const clientId = '54088883439-vjqo4c1u6727cdtj175sf8kbbsvuup7l.apps.googleusercontent.com';

const GoogleButton = ({ onSocial }) => {

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
    console.log(res);
  }

  const onFailure = (res) =>{
    console.log(res);
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
