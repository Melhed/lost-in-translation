import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import { loginHandler } from "../Login/loginHandler";

// Fetches user if present in sessionStorage, but not in state.
const useValidateUser = () => {
	const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate();

	const validateUser = () => {
		if (!user.translations) {
			if (!sessionStorage.getItem("username")) return navigate("/");

			loginHandler
				.fetchUser(sessionStorage.getItem("username"))
				.then((fetchedUser) => {
					setUser(fetchedUser);
					sessionStorage.setItem("username", fetchedUser.username);
				});
		}
	};

	return validateUser;
};

export default useValidateUser;
