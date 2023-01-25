import React, { useEffect } from "react";
import useValidateUser from "../common/useValidateUser";
import ProfileHero from "./ProfileHero";
import ProfileHistoryDisplay from "./ProfileHistoryDisplay";

// Renders the profile view
const Profile = () => {
	const validateUser = useValidateUser();
	document.title = "Profile - Lost in Translation";

	useEffect(() => {
		validateUser();
	}, [validateUser]);

	return (
		<>
			<ProfileHero />
			<ProfileHistoryDisplay />
		</>
	);
};

export default Profile;
