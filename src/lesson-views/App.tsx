import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import { useContext } from "react";
import ProtectedView from "./views/ProtectedView";
import { AuthContext } from "./contexts/AuthProvider";
import LoginView from "./views/LoginView";
import NotFoundView from "./views/NotFoundView";
import DefaultLayout from "./layouts/DefaultLayout";

function RequireAuth() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route
            path="/"
            element={
              <>
                <Outlet />
                Footer2 <br />
              </>
            }
          >
            <Route path="/" element={<HomeView />} />
            <Route path="/about" element={<HomeView />} />
          </Route>
          <Route path="/about" element={<AboutView />} />
        </Route>
        <Route path="/login" element={<LoginView />} />
        <Route element={<RequireAuth />}>
          <Route path="/protected" element={<ProtectedView />} />
          <Route path="/protected1" element={<ProtectedView />} />
          <Route path="/protected2" element={<ProtectedView />} />
          <Route path="/protected3" element={<ProtectedView />} />
        </Route>
        <Route path="/*" element={<NotFoundView />} />
      </Routes>
    </>
  );
}

export default App;
