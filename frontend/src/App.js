import { Route, Routes, BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga4";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);

  return (
    <BrowserRouter>
      <Routes>
        {/*  <Route path="주소규칙" element={보여 줄 컴포넌트 JSX} /> */}
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}
