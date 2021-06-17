import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export function Register(){
    const navigate = useNavigate();
    const [userRegisteration, setUserRegisteration] = useState({
        username : "",
        email : "",
        number : "",
        password : ""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserRegisteration({ ...userRegisteration, [name] : value});
    }

    async function handleSubmit(e) {
        e.preventDefault();
    }

    const HandleReset = () => {
        
    }

    const loginHandler = () => {
        navigate("/Login")
    }

    return (
        <div>
            <h1>SignUp</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username" style={{margin:"10px"}}>FullName</label>
                    <input type="text" onChange={handleInput} id="username" name="username" value={userRegisteration.username} required/>
                </div><br/>
                <div>
                    <label htmlFor="email" style={{margin:"20px"}}>E-Mail</label>
                    <input type="text" onChange={handleInput} id="email" name="email" value={userRegisteration.email} required/>
                </div><br/>
                <div>
                    <label htmlFor="number" style={{margin:"18px"}}>Number</label>
                    <input type="text" onChange={handleInput} id="number" name="number" value={userRegisteration.number} required/>
                </div><br/>
                <div>
                    <label htmlFor="password" style={{margin:"12px"}}>Password</label>
                    <input type="password" onChange={handleInput} autoComplete="off" id="password" name="password" value={userRegisteration.password} required/>
                </div><br/>
                <button type="submit">Register</button>
                <button type="reset" onClick={HandleReset}>Reset</button>
                <button onClick={loginHandler}>Login</button>
            </form>
        </div>
    )
}