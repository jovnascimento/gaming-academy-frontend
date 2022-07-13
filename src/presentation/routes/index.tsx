import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { UserPage } from "../pages/userPage";
import { AddCourse } from "../pages/addCourse";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userPage" element={<UserPage />} />
      <Route path="/add-course" element={<AddCourse />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
