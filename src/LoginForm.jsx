import React from "react";
import "./login-form.css";

function LoginForm() {
    return (
        <>
            <div className="wrapper">
                <div className="form-box login">
                    <h2>Document Approval System</h2>
                    <form>
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="person"></ion-icon>
                            </span>
                            <input type="text" />
                            <label>User ID</label>
                        </div>
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="lock-closed"></ion-icon>
                            </span>
                            <input type="password" />
                            <label>Password</label>
                        </div>
                        <button type="submit" className="btn">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginForm;
