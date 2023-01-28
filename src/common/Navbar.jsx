import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

// Creates navbar
const Navbar = ({ user }) => {
	return (
		<div className="font-lylas text-white bg-amber-400 w-full h-24 flex justify-between">
			<div className="flex float-left my-auto md:ml-44 ml-0">
				<img
					src="assets/NavbarLogo.png"
					alt="Happy Robot"
					className="h-20 my-auto"
				/>
				<h1 className="text-3xl my-auto">Lost in Translation</h1>
			</div>

			{user && (
				<div className="my-auto md:mr-44 mr-0 h-18">
					<Link to={"/profile"}>
						<div className="bg-amber-500 rounded-full py-2 px-4 my-auto text-xl">
							<FontAwesomeIcon icon={faUserAlt} className="mr-2" />
							<span className="">{user.username}</span>
						</div>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Navbar;
