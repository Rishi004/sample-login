import React from "react";
import LoginForm from "./LoginForm";
import "./login-page.css";

function LoginPage() {
    return (
        <>
            <div className="login-page-main">
                <div>
                    <LoginForm />
                </div>
            </div>
        </>
    );
}

export default LoginPage;
