import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexter/AuthContext";
import { Toaster } from "../Utils/Toaster";

export function Login(){
	const navigate = useNavigate();
    const { isUserLoggedIn, setIsUserLoggedIn, token } = useAuth();
	const usernameRef = React.useRef();
	const passwordRef = React.useRef();

    async function handleSubmit() {
        axios.interceptors.request.use(
			config => {
				config.headers.authorization = token;
				return config;
			},
			error => {
				return Promise.reject(error);
			}
		)

		if(!isUserLoggedIn){
			try{
				const userId = usernameRef.current.value;
				const password = passwordRef.current.value;
				if(userId !== "" || password !== "") {
					const { data,status } = await axios.post(
						"https://VideoLibraryData.saurabhsharma11.repl.co/v1/userData/60d57b0978730d00e0b096a4",
						{ userId:userId, password: password }
					);
					if(status === 200){
						setIsUserLoggedIn((isUserLoggedIn) => !isUserLoggedIn);
						isUserLoggedIn || navigate("/");
						localStorage?.setItem(
							"login",
							JSON.stringify({ isUserLoggedIn:true, token:data.token })
						);
						Toaster("Logged In successfully")
					} else if(status === 401 || status === 500){
						Toaster("Invalid UserID or Password..!");
					}
				} else {
					Toaster("Please enter valid UserID or Password..!");
				}
			}
			catch(err){
				Toaster("Invalid UserID or Password..!");
			}
		} else {
			setIsUserLoggedIn((isUserLoggedIn) => !isUserLoggedIn);
			isUserLoggedIn || navigate("/");
			localStorage?.removeItem("login");
			Toaster("Logged Out successfully");
		}
	};

    function SignUp(){
		navigate("/register")
	}

	async function GuestCred(){
		axios.interceptors.request.use(
			config => {
				config.headers.authorization = token;
				return config;
			},
			error => {
				return Promise.reject(error);
			}
		)

		if(!isUserLoggedIn){
			try{
				const userId = "sid@gmail.com";
				const password = "12345";
				if(userId !== "" || password !== "") {
					const { data,status } = await axios.post(
						"https://VideoLibraryData.saurabhsharma11.repl.co/v1/userData/60d57b0978730d00e0b096a4",
						{ userId:userId, password: password }
					);
					if(status === 200){
						setIsUserLoggedIn((isUserLoggedIn) => !isUserLoggedIn);
						isUserLoggedIn || navigate("/");
						localStorage?.setItem(
							"login",
							JSON.stringify({ isUserLoggedIn:true, token:data.token })
						);
						Toaster("Logged In successfully")
					} else if(status === 401 || status === 500){
						Toaster("Invalid UserID or Password..!");
					}
				} else {
					Toaster("Please enter valid UserID or Password..!");
				}
			}
			catch(err){
				Toaster("Invalid UserID or Password..!");
			}
		} else {
			setIsUserLoggedIn((isUserLoggedIn) => !isUserLoggedIn);
			isUserLoggedIn || navigate("/");
			localStorage?.removeItem("login");
			Toaster("Logged Out successfully");
		}
	}

    return (
        <div>
			<h1>LOGIN</h1>
            <label style={{border:"2px solid #41464b",borderRadius:"3px",padding:"5px",fontWeight:"bold",marginRight:"15px",color: "orange"}}>UserID</label>
            <input style={{padding:"7px",border:"2px solid #41464b",marginLeft:"20px",width:"10rem"}} type="text" ref={usernameRef} disabled={isUserLoggedIn ? true : false} required/>
            <br /><br />
            <label style={{border:"2px solid #41464b",borderRadius:"3px",padding:"5px",fontWeight:"bold",marginRight:"15px",color: "orange"}}>Password</label>
            <input style={{padding:"7px",border:"2px solid #41464b",width:"10rem"}} type="password" ref={passwordRef} disabled={isUserLoggedIn ? true : false} required/>
            <br /><br />
            <button style={{backgroundColor:"#41464b",color: "orange",fontWeight:"bold",padding: "5px",borderRadius: "5px",fontSize: "medium",margin:"0px 5px"}} onClick={handleSubmit}>
            {/** {isUserLoggedIn ? "Logged In" : "Logged out"} */}
            {isUserLoggedIn ? "Logout" : "Login"}
            </button>
            <button style={{backgroundColor:"#41464b",color: "orange",fontWeight:"bold",padding: "5px",borderRadius: "5px",fontSize: "medium",margin:"0px 5px"}} onClick={SignUp} disabled={isUserLoggedIn ? true : false}>SignUp</button><br/><br/>
			<button style={{backgroundColor:"#41464b",color: "orange",fontWeight:"bold",padding: "5px",borderRadius: "5px",fontSize: "medium",margin:"0px 5px"}} onClick={() => GuestCred()}>Guest Credentials</button>
        </div>
    )
}