import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Translation from "./components/Translation/Translation";
import Profile from "./components/Profile/Profile";
import { UserProvider } from "./UserContext";

function App() {
	return (
		<UserProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/translation" element={<Translation />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</Router>
		</UserProvider>
	);
}

export default App;
