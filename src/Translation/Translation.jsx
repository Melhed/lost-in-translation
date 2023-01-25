import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../common/UserContext";
import Navbar from "../common/Navbar";
import TranslationInput from "./TranslationInput";
import useValidateUser from "../common/useValidateUser";
import TranslationListDisplay from "./TranslationListDisplay";

// Renders the translation view.
const Translation = () => {
	const { user } = useContext(UserContext);
	const [signs, setSigns] = useState([]);
	const validateUser = useValidateUser();
	document.title = "Translation - Lost in Translation";

	useEffect(() => {
		validateUser();
	}, [validateUser]);

	return (
		<>
			<Navbar user={user} />
			<div className="w-full flex h-36 bg-amber-400">
				<TranslationInput setSigns={setSigns} />
			</div>
			<TranslationListDisplay signs={signs} />
		</>
	);
};

export default Translation;
