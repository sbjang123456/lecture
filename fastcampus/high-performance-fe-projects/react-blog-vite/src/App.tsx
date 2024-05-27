import { useState } from "react";
import { app } from "firebaseApp";
import { getAuth } from "firebase/auth";
import Router from "./components/Router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const auth = getAuth(app);
  const [isAuthenticated, setIsAuthenticated] = useState(!!auth?.currentUser);
  return (
    <>
      <ToastContainer />
      <Router isAuthenticated={isAuthenticated} />
    </>
  );
}

export default App;
