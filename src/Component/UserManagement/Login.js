import React from "react";
import { useNavigate,NavLink } from "react-router-dom";
import { useAuth } from "../../Contexter/AuthContext";

export function Login(){
	const navigate = useNavigate();
    const { isUserLoggedIn, setIsUserLoggedIn, token } = useAuth();
	const usernameRef = React.useRef();
	const passwordRef = React.useRef();

    async function handleSubmit() {}

    function SignUp(){
		navigate("/register")
	}

    return (
        <div>
            <h1>Login</h1>
            <label style={{marginRight:"15px"}}>UserID</label>
            <input type="text" ref={usernameRef} disabled={isUserLoggedIn ? true : false} required/>
            <br /><br />
            <label style={{marginRight:"4px"}}>Password</label>
            <input type="password" ref={passwordRef} disabled={isUserLoggedIn ? true : false} required/>
            <br /><br />
            <button	onClick={handleSubmit}>
                {/** {isUserLoggedIn ? "Logged In" : "Logged out"} */}
                {isUserLoggedIn ? "Logout" : "Login"}
            </button>
            <button onClick={SignUp} disabled={isUserLoggedIn ? true : false}>SignUp?</button>
        </div>
    )
}