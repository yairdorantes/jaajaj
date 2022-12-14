import { Routes, Route } from "react-router-dom";
import Cards from "../components/Cards";
// import LoginAuth from "../components/LoginAuth";
import LoginPage from "../components/LoginPage";
import Menu from "../components/Menu";
import Session from "../components/Session";
import { AuthProvider } from "../context/AuthContext";

import PrivateRoute from "./PrivateRoute";
import ShortsV2 from "../components/ShortsV2";
import Posts from "../components/Posts";
import PostPage from "../components/PostPage";

const Routers = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/signup" element={<LoginPage />}></Route>

        <Route path="/login" element={<Session />}></Route>
        {/* <Route path="/login" element={<LoginAuth />}></Route> */}
        <Route element={<PrivateRoute />}>
          <Route path="/cards" element={<Cards />}></Route>

          <Route path="/shorts" element={<ShortsV2 />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/postpage/:id" element={<PostPage />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default Routers;
