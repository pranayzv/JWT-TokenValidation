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
          <Route exact path="/" element={<LoginComponent />} />
          <Route
            path="/welcome"
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
/*

git add .
git commit -m "first commit"
git branch -M main
git push -u origin main

*/
