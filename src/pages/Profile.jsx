import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";

function Profile() {
  const { isAuthenticated, loading, user } = useContext(Context);

  if (loading) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return (
      <div className="profile">
        <div>🔒</div>
        <div >Please log in to view your profile.</div>
      </div>
    );
  }

  return (
    <div className="profile">
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
  );
}

export default Profile;
