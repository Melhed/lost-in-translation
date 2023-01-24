import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../UserContext";
import Navbar from "../Navbar";
import TranslationViewer from "./TranslationViewer";
import TranslationInput from "./TranslationInput";
import useValidateUser from "../../useValidateUser";

// Renders the translation view.
const Translation = () => {
	const { user } = useContext(UserContext);
	const validateUser = useValidateUser();
	const [signs, setSigns] = useState([]);

	useEffect(() => {
		validateUser();
	}, [validateUser]);

	return (
		<>
			<Navbar user={user} />
			<TranslationInput setSigns={setSigns} />
			<div>{signs[0] && <TranslationViewer signs={signs} />}</div>
		</>
	);
};

export default Translation;
