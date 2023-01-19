import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import StartPage from './pages/StartPage';
import TranslationPage from './pages/TranslationPage';
import ProfilePage from './pages/ProfilePage';
import { UserProvider } from './UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />}/>
          <Route path="/translation" element={<TranslationPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>    
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
