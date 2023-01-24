import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { translationHandler } from "./translationHandler";

const TranslationInput = ({ setSigns }) => {
	const [input, setInput] = useState("");
	const { user } = useContext(UserContext);

	// Checks input for errors and posts translations to API on form submit.
	const handleSubmit = (e) => {
		e.preventDefault();

		if (input === "" || /[^a-zA-Z\s]/.test(input))
			throw new Error("ERROR: Numbers and special characters aren't allowed.");
		if (Array.from(input).indexOf(" ") !== -1) setSigns(input.split(" "));
		if (Array.from(input).indexOf(" ") === -1) setSigns([input]);

		user.translations.push(input);
		translationHandler.postTranslation(user.translations, user.id);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				value={input}
				onChange={(e) => setInput(e.target.value)}
				className="m-10 border w-44"
			/>
			<input type="submit" />
		</form>
	);
};

export default TranslationInput;
