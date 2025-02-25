import TestPage from "../pages/TestPage";

const Test = ({ user }) => {
  console.log(user);
  return (
    <div>
      <h1>MBTI 테스트 페이지</h1>
      <TestPage user={user} />
    </div>
  );
};

export default Test;
