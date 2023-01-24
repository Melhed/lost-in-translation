import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { profileHandler } from "./profileHandler";
import { UserContext } from "../../UserContext";
import ProfileHistory from "./ProfileHistory";
import useValidateUser from "../../useValidateUser";

// Renders the profile view
const Profile = () => {
	const { user, setUser } = useContext(UserContext);
	const validateUser = useValidateUser();
	const navigate = useNavigate();

	useEffect(() => {
		validateUser();
	}, [validateUser]);

	// Clears translations and updates user with new user object.
	const handleClearTranslations = () => {
		profileHandler.clearTranslations(user.id).then((res) => setUser(res));
	};

	// Clears user data in state and session.
	const handleLogout = () => {
		sessionStorage.removeItem("username");
		setUser(null);
		navigate("/");
	};

	return (
		<div>
			{user.translations && <ProfileHistory translations={user.translations} />}
			<button onClick={() => handleClearTranslations()}>
				Clear Translations
			</button>
			<button onClick={() => handleLogout()}>Logout</button>
		</div>
	);
};

export default Profile;
