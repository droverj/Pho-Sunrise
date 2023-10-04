import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios"; // Import Axios for making API requests
import '../../styles/LoginButtons.scss';

const LoginButton = () => {
  const { loginWithRedirect, user } = useAuth0();

  // Function to check if the user exists in your database
  const checkUserExists = async (email) => {
    try {
      // Make an API request to your backend to check if the user exists
      const response = await axios.get(`http://your-api-url/check-user?email=${email}`);
      return response.data.exists;
    } catch (error) {
      console.error("Error checking user existence:", error);
      return false; // Return false in case of an error
    }
  };

  // Function to add the user to your database
  const addUserToDatabase = async (email) => {
    try {
      // Make an API request to your backend to add the user to the database
      const response = await axios.post("http://your-api-url/add-user", { email });
      return response.data.success;
    } catch (error) {
      console.error("Error adding user to the database:", error);
      return false; // Return false in case of an error
    }
  };

  const handleLogin = async () => {
    // Redirect the user to Auth0 login
    loginWithRedirect();
  };

  // Handle the Auth0 login event
  const handleAuth0Login = async () => {
    if (user) {
      // Check if the user exists in your database
      const userExists = await checkUserExists(user.email);

      if (!userExists) {
        // If the user doesn't exist, add them to your database
        const addedToDatabase = await addUserToDatabase(user.email);

        if (addedToDatabase) {
          console.log("User added to the database.");
        } else {
          console.error("Failed to add user to the database.");
        }
      }
    }
  };

  // Listen for the Auth0 login event and handle it
  React.useEffect(() => {
    handleAuth0Login();
  }, [user]);

  return (
    <button className='login-buttons' onClick={handleLogin}>
      Sign In
    </button>
  );
};

export default LoginButton;
