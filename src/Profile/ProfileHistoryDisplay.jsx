import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../common/UserContext";
import { profileHandler } from "./profileHandler";
import ProfileHistoryList from "./ProfileHistoryList";

const ProfileHistoryDisplay = () => {
	const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate();

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
		<div className="w-1/2 min-h-[300px] relative mx-auto pb-10 mt-10 bg-gray-100 rounded-xl font-sanchez shadow-lg">
			{user.translations && (
				<ProfileHistoryList translations={user.translations} />
			)}
			<div className="absolute flex justify-between h-10 w-full bottom-0 bg-violet-500 rounded-b-xl drop-shadow-lg">
				<button
					onClick={() => handleClearTranslations()}
					className="my-auto ml-3 py-0.5 px-2 bg-gray-100 rounded-full hover:bg-white"
				>
					Clear Translations
				</button>
				<button
					onClick={() => handleLogout()}
					className="my-auto mr-3 py-0.5 px-2 bg-gray-100 rounded-full hover:bg-white"
				>
					Logout
				</button>
			</div>
		</div>
	);
};

export default ProfileHistoryDisplay;
