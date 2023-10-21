import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../../styles/Profile.scss';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile">
        <p><b>Signed in as:</b></p>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;