import "./App.css";
import LoginComponent from "./components/LoginComponent";
import { AuthProvider } from "./components/ComponentAuthProvider";
import AuthRequest from "./components/AuthRequest";
import WelcomeComponent from "./components/WelcomeComponent";
import { Routes, Route } from "react-router-dom";
export const base = "/JWT-TokenValidation";
function App() {
 
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/JWT-TokenValidation" element={<LoginComponent />} />
          <Route
            path={`${base}/welcome`}
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
