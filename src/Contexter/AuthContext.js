import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

	const { isUserLoggedIn:isUserLogin, token: savedToken } = JSON.parse(
	localStorage?.getItem("login")
	) || {};

	const [isUserLoggedIn, setIsUserLoggedIn] = useState(isUserLogin);
	const [ token ] = useState(savedToken);

	/* useEffect(() => {
		const  { isUserLoggedIn, token } = JSON.parse(localStorage?.getItem("login")) || {};
		isUserLoggedIn && setIsUserLoggedIn(true);
		token && setToken(token);
	  }, []); */

	return (
		<AuthContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn, token }} >
			{children}
		</AuthContext.Provider>
	);
};