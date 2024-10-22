import { Route, Routes } from "react-router-dom";
import Jobs from "./Components/Jobs";
import Home from "./Components/Home";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
import ProtectedRoutes from "./Components/protectedRoutes";
import UniqueJobDetail from "./Components/UniqueJobDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoutes Component={Home} />} />
        <Route path="/jobs" element={<ProtectedRoutes Component={Jobs} />} />
        <Route
          path="/jobs/:id"
          element={<ProtectedRoutes Component={UniqueJobDetail} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
