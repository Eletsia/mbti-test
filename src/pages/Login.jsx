import { useEffect, useState } from "react";
import AuthForm from "../components/AuthForm";
import { login, getUserProfile } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);
  const handleLogin = async (formData) => {
    let response;
    try {
      response = await login(formData);
      setStatus(response.success);
      setUser(response);
    } catch (e) {}
  };

  useEffect(() => {
    if (status === true) {
      navigate("/");
    }
  }, [status, navigate]);

  return (
    <div>
      <div>
        <h1>로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div>
          <p>
            계정이 없으신가요? <Link to="/sign-up">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
