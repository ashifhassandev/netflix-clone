import { useState } from "react";
import { useAuthContext } from "../context/authContext";

const useAuth = () => {
    const { alertMessage, setAlertMessage, showAlertMessage, login, signup, logout } = useAuthContext();
    const [loginState, setLoginState] = useState("Sign In");
    const [formState, setFormState] = useState({ name: "", email: "", password: "" });
    const [loading, setLoading] = useState(false);

    const toggleLoginState = () => setLoginState(loginState === "Sign In" ? "Sign Up" : "Sign In");

    const handleChange = (event) => setFormState({ ...formState, [event.target.name]: event.target.value });

    const handleUserAuthentication = async (event) => {
        event.preventDefault();
        setLoading(true);
    
        try {
            let userCredential;
            if (loginState === "Sign In") {
                userCredential = await login(formState.email, formState.password);
            } else {
                userCredential = await signup(formState.name, formState.email, formState.password);
            }
    
            if (userCredential) {
                showAlertMessage("success", "Signup successful!");
                setFormState({ name: "", email: "", password: "" });
                setLoginState("Sign In");
            } else {
                showAlertMessage("error", "Invalid credentials. Please try again.");
            }
        } catch (error) {
            console.error("Auth Error:", error.message);
            showAlertMessage("error", error.message);
        }

        setLoading(false);
    };    

    const handleLogout = async () => {
        try {
            await logout();
            showAlertMessage("success", "Logout successful!");
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return {
        loginState,
        formState,
        alertMessage,
        setAlertMessage,
        loading,
        toggleLoginState,
        handleChange,
        handleUserAuthentication,
        handleLogout,
    };
};

export default useAuth;