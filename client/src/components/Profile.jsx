/* DEPENDENCIES */
import React, { useState } from "react";
import Avatars from "./Avatars";

/* USER PROFILE INFO */
const Profile = ({ user }) => {
  const [showAvatars, setShowAvatars] = useState(false);

  // Function to handle the button click and toggle the avatar picker
  const handleShowAvatars = () => {
    setShowAvatars(!showAvatars);
  };

  // Return profile info, including avatar, craft status, and number of completed crafts
  return (
    <div id="profile">
      {/* TODO: ADD AVATAR <div></div> */}
      <div id="user-info">
        <h2>{user?.username}</h2>
        <p>Crafter Status: </p>
        {/* TODO: SET CRAFTER STATUS */}
        <p>Completed Crafts: {user?.completedProjects?.length}</p>
        <button onClick={handleShowAvatars} className="inter borders">
          Pick an avatar!
        </button>
      </div>
      {showAvatars && (
        <Avatars showAvatars={showAvatars} onClose={handleShowAvatars} />
      )}
    </div>
  );
};

/* EXPORT */
export default Profile;
