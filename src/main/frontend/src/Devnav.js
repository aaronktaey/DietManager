import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <nav className="Navs">
        <ul>
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
          <li>
            <Link to="/home">홈</Link>
          </li>
          <li>
            <Link to="/profile">프로필</Link>
          </li>
          <li>
            <Link to="/calculate">계산결과</Link>
          </li>
          <li>
            <Link to="/detail">상세보기</Link>
          </li>
          <li>
            <Link to="/advice">조언보기</Link>
          </li>
          <li>
            <Link to="/reactprac">연습페이지</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
