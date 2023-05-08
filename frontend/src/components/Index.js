import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import Header from "./Navbar/Header";
import VideoList from "./Video/VideoList";
import Video from "./Video/Video";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function Index(props) {
  const { isLoggedIn, setLoggedIn } = props;
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      <BrowserRouter>
        {isLoggedIn ? (
          <Routes>
            <Route
              path="/video"
              element={
                <VideoList setLoggedIn={setLoggedIn} Navigate to="/" replace />
              }
            ></Route>
            <Route
              path="/video/:id"
              element={<Video setLoggedIn={setLoggedIn} />}
            ></Route>
            <Route path="*" element={<Navigate to="/video" replace />}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <SignIn setIsLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />
              }
            ></Route>
            <Route
              path="/signup"
              element={<SignUp setIsLoggedIn={setLoggedIn} />}
            ></Route>
            <Route path="*" element={<Navigate to="/" replace />}></Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}
