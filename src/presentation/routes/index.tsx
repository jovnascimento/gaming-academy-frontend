import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/home"
import { UserPage } from "../pages/userPage";

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Navigate to="/" />}></Route>
            <Route path="/userPage" element={<UserPage/>}/>
        </Routes>
    );
}