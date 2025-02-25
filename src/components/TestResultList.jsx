import { useState, useEffect } from "react";
import { getTestResults } from "../api/testResults";
import TestResultItem from "./TestResultItem";
const TestResultList = ({ user }) => {
  const [testResults, setTestResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchTestResults = async () => {
    try {
      const results = await getTestResults();
      const fillteredResults = testResults.filter(
        (e) => e.visibility === true || e.userId === userId
      );

      setTestResults(fillteredResults);
      setTestResults(results);
    } catch (error) {
      setError("데이터 로딩 오류");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTestResults();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <TestResultItem
      userId={user.userId}
      testResults={testResults}
      setTestResults={setTestResults}
    ></TestResultItem>
  );
};

export default TestResultList;
