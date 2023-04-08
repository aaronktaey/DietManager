### 프론트 기동

소스받은 다음에  
노드 설치  
npm 설치

frontend 폴더에서  
npm install  
npm run start  
하면 3000포트에 올라갈 것임

### 참고자료

https://velog.io/@u-nij/Spring-Boot-React.js-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD-%EC%84%B8%ED%8C%85 스프링 - 리액트 연동  
https://velog.io/@nuri00/Google-OAuth-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84 구글로그인  
https://goddaehee.tistory.com/308 리액트 useState, useEffect  
https://han-py.tistory.com/441 리액트 환경설정  
https://velog.io/@sunhwa508/react-native-flex-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-Layout-with-Flexbox css 플렉스

### API

/signup >> 회원가입
data : id, password

/login >> 일반 로그인 (아직 입력값 제한 없음)
data : id, password

/login/google >> 구글로그인
data : 구글에서 돌려받은 JSON response 그대로 보냄

2023.03.11
회원가입 시 비밀번호 확인할 수 있는 필드 필요.
추가 기능을 구현을 위해 멤버의 나이, 몸무게, 키 필드 필요할듯함.

깃에 푸시할때, 배포 됐는지 확인 !
aws -> codedeploy -> 배포 탭에 상태 확인할것.
로그인 시 response에 loginId 넘겨줌 -> loginId 있으면 프로필 화면으로 리다이렉트.