import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  if (localStorage.getItem("accessToken"))
    return (
      <div>
        <h1>무료 성격 테스트</h1>
        <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
        <Link to="/profile">내 정보</Link>
        <br />
        <Link to="/test">성격테스트 시작하기</Link>
        <button onClick={logout}>로그아웃</button>
      </div>
    );
  else
    return (
      <div>
        <h1>무료 성격 테스트</h1>
        <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
        <Link to="/login">로그인하기</Link>
        <br />
        <Link to="/test">성격테스트 시작하기</Link>
      </div>
    );
};

export default Home;
