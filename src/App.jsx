import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Player from './pages/Player/Player';
import { AuthProvider } from './context/authContext';

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/player/:id' element={<Player />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;