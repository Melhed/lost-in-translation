import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { UserContext } from "../common/UserContext";
import { loginHandler } from "./loginHandler";
import { faArrowCircleRight, faUser } from "@fortawesome/free-solid-svg-icons";

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
			<div>
				{user?.username && <Navigate to="/translation" />}
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="w-44 flex mx-auto justify-center"
				>
					<input
						type="text"
						placeholder="Username"
						{...register("username", {
							required: true,
							minLength: 3,
							maxLength: 20,
						})}
						className="block pl-12 pr-20 py-2 h-16 font-sanchez bg-gray-100
						rounded-full border-2 border-solid text-xl border-amber-500 transition ease-in-out
						focus:outline-none focus:border-white"
					/>
					<FontAwesomeIcon
						icon={faUser}
						className="absolute text-2xl mr-[330px] text-violet-600 mt-[19px]"
					/>
					<button type="submit" className="absolute mt-2 ml-80">
						<FontAwesomeIcon
							icon={faArrowCircleRight}
							className="text-violet-500 text-5xl"
						/>
					</button>
				</form>
			</div>
			<div className="text-center font-sanchez mt-2 text-lg text-red-500">
				{handleErrors}
			</div>
		</>
	);
};

export default LoginInput;
