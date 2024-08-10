/* DEPENDENCIES */
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CHANGE_AVATAR } from "../utils/mutations";
import Avatars from "./Avatars";

/* USER PROFILE INFO */
const Profile = ({ user }) => {
  const [showAvatars, setShowAvatars] = useState(false);
  const [changeAvatar] = useMutation(CHANGE_AVATAR);

  // Function to handle the button click and toggle the avatar picker
  const handleShowAvatars = () => {
    setShowAvatars(!showAvatars);
  };

  // Function to handle changing of avatar
  const handleAvatarChange = async (newAvatar) => {
    try {
      const { data } = await changeAvatar({
        variables: { username: user.username, avatar: newAvatar },
      });
    } catch (error) {
      console.error("Error changing avatar:", error);
    }
  };

  // Return profile info, including avatar, craft status, and number of completed crafts
  return (
    <div className="inter" id="profile">
      <img
        id="profile-img"
        src={`../../${user.avatar}`}
        alt="User Avatar"
      ></img>
      <div id="user-info">
        <h2>{user.username}</h2>
        <p>Crafter Status: </p>
        {/* TODO: SET CRAFTER STATUS */}
        <p>Completed Crafts: {user.completedProjects?.length}</p>
        <button onClick={handleShowAvatars} className="inter borders">
          Pick an avatar!
        </button>
      </div>
      {showAvatars && (
        <Avatars
          user={user}
          showAvatars={showAvatars}
          onClose={handleShowAvatars}
          onAvatarChange={handleAvatarChange}
        />
      )}
    </div>
  );
};

/* EXPORT */
export default Profile;
