import { Routes, Route } from "react-router-dom";
import LoginPage from "../components/Login/LoginPage/loginPage";
import LoginForm from "../components/Login/LoginForm/loginForm";
import HomePage from "../components/HomePage/homePage";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/LoginForm" element={<LoginForm />} />
      <Route path="/HomePage" element={<HomePage />} />
    </Routes>
  );
}
