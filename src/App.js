import "./App.css";
import LoginComponent from "./components/LoginComponent";
import { AuthProvider } from "./components/ComponentAuthProvider";
import AuthRequest from "./components/AuthRequest";
import WelcomeComponent from "./components/WelcomeComponent";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/JWT-TokenValidation" element={<LoginComponent />} />
          <Route
            path="/JWT-TokenValidation/welcome"
            element={
              <AuthRequest>
                <WelcomeComponent />
              </AuthRequest>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
