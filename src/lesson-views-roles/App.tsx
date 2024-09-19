import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import { RequireAdminRole } from "./middleware/RequireAdminRole";
import { RequireAuth } from "./middleware/RequireAuth";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import NotFoundView from "./views/NotFoundView";
import ProtectedAdminView from "./views/ProtectedAdminView";
import ProtectedView from "./views/ProtectedView";
import { DashboardNavbar } from "./components/DashboardNavbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
        </Route>
        <Route path="/" element={<RequireAuth />}>
          <Route path="/" element={<DashboardNavbar />}>
            <Route path="/protected" element={<ProtectedView />} />
            <Route path="/" element={<RequireAdminRole />}>
              <Route path="/admin" element={<ProtectedAdminView />} />
            </Route>
          </Route>
        </Route>
        <Route path="/*" element={<NotFoundView />} />
      </Routes>
    </>
  );
}

export default App;
