import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import StartPage from './view/Start';
import Translation from './view/Translation';
import Profile from './view/Profile';
import { UserProvider } from './UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* <Route path="/" element={<StartPage />}/> */}
          {/* <Route path="/" element={<TranslationPage/>}/> */}
          <Route path="/" element={<Profile/>}/>    
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
