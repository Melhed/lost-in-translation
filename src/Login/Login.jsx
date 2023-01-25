import React from "react";
import LoginHero from "./LoginHero";
import LoginInput from "./LoginInput";

// Renders the Login view
const Login = () => {
	document.title = "Login - Lost in Translation";
	return (
		<>
			<div className="absolute mt-72 w-full">
				<LoginInput />
			</div>
			<LoginHero />
		</>
	);
};

export default Login;
