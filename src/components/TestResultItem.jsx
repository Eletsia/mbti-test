import {
  deleteTestResult,
  updateTestResultVisibility,
} from "../api/testResults";

const TestResultItem = ({ userId, testResults, setTestResults }) => {
  console.log(testResults);

  const changeVisibility = (e) => {
    const id = e.target.id;
    const btnText = e.target.innerText;
    if (btnText === "공개") {
      e.target.innerText = "비공개";
      updateTestResultVisibility(id, true);
    } else {
      e.target.innerText = "공개";
      updateTestResultVisibility(id, false);
    }
  };

  const deleteResult = (e) => {
    const id = e.target.id;
    console.log(deleteTestResult(id));
    setTestResults(testResults.filter((e) => e.id !== id));
  };

  return (
    <div>
      <h1>Test Results</h1>
      {testResults.length === 0 ? (
        <p>결과가 없습니다.</p>
      ) : (
        testResults.map((e) => (
          <div key={e.id} className="bg-white shadow-lg rounded-lg p-4 mb-4">
            <div className="border-b pb-2 mb-2">
              <p className="text-gray-700 font-semibold">
                이름: <span className="text-blue-500">{e.userId}</span> | MBTI:{" "}
                <span className="text-purple-500">{e.mbtiResult}</span>
              </p>
            </div>

            {e.userId === userId && (
              <div className="flex justify-end">
                <button
                  id={e.id}
                  onClick={changeVisibility}
                  className={`px-4 py-2 text-white font-semibold transition first:rounded-l-lg ${
                    e.visibility
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-gray-500 hover:bg-gray-600"
                  }`}
                >
                  {e.visibility ? "공개" : "비공개"}
                </button>
                <button
                  id={e.id}
                  onClick={deleteResult}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold transition last:rounded-r-lg"
                >
                  삭제
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TestResultItem;
