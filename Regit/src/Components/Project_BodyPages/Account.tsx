import {BrowserRouter, Route, Routes} from "react-router-dom";
import ForgetPassword from "../Component_Elements/ForgetPassword.tsx";
import Login from "../Component_Elements/Login.tsx";
import SignUp from "../Component_Elements/SignUp.tsx";

export default function Account(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/forgetpassword" element={<ForgetPassword />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}