import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { UserPage } from "../pages/userPage";
import { AddCourse } from "../pages/addCourse";
import { CoursePage } from "../pages/course";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-page" element={<UserPage />} />
      <Route path="/add-course" element={<AddCourse />} />
      <Route path="/course/:id" element={<CoursePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
