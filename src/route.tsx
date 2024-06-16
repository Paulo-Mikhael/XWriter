import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostScreen from "./pages/PostScreen";
import NotFound from "./pages/NotFound";
import CreateAccount from "./pages/Home/CreateAccount";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<PostScreen />} />
          <Route path="/session" element={<CreateAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}