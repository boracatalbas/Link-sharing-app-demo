import "./Content.scss";
import Link from "../../pages/Links/Link";
import Profile from "../../pages/ProfileDetails/Profile";
import { Routes, Route } from "react-router-dom";

export default function Content() {
  return (
    <Routes>
      <Route path="/" element={<Link />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
