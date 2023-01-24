import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { loginHandler } from "./loginHandler";

const LoginInput = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { user, setUser } = useContext(UserContext);

	// Fetches, or registers, user object on form submit and sets user.
	function onSubmit(data) {
		loginHandler.fetchUser(data.username).then((res) => {
			setUser(res);
			sessionStorage.setItem("username", res.username);
		});
	}

	// Handles potential form input errors.
	const handleErrors = (() => {
		if (errors.username?.type === "required")
			return <span>Username is required.</span>;
		if (errors.username?.type === "minLength")
			return <span>Username must be longer than 2 characters.</span>;
		if (errors.username?.type === "maxLength")
			return <span>Username must be shorter than 20 characters.</span>;
	})();

	return (
		<>
			{user?.username && <Navigate to="/translation" />}
			<form onSubmit={handleSubmit(onSubmit)} className="mt-10 border w-44">
				<input
					type="text"
					placeholder="Username"
					{...register("username", {
						required: true,
						minLength: 3,
						maxLength: 20,
					})}
				/>
				<input type="submit" />
			</form>
			{handleErrors}
		</>
	);
};

export default LoginInput;
