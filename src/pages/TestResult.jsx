import TestResultList from "../components/TestResultList";

const TestResult = ({ user }) => {
  return (
    <div>
      <h1>테스트 결과 페이지</h1>
      <TestResultList user={user} />
    </div>
  );
};

export default TestResult;
