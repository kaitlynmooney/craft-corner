/* DEPENDENCIES */
import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { CHANGE_AVATAR } from "../utils/mutations";
import Avatars from "./Avatars";

/* PROFILE */
const Profile = ({ user }) => {
  // Crafter status names
  const statuses = [
    "Glu Gun Guru",
    "Stitch Witch",
    "Thread Tamer",
    "Crafting Connoisseur",
    "Chief Crafting Officer",
    "Master of Makes",
  ];

  const [showAvatars, setShowAvatars] = useState(false);
  const [crafterStatus, setCrafterStatus] = useState("Glu Gun Guru");
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

  // Function to find user's crafter status
  const getCrafterStatus = (num) => {
    const numStatuses = statuses.length;
    const unroundedLevel = Math.pow(num, 1 / 1.5);
    const level = Math.floor(unroundedLevel);

    // If level is above number of statuses, give highest status
    if (level >= numStatuses) {
      return statuses[numStatuses - 1];
    }
    return statuses[level];
  };

  // Function to update crafter status when user completes a project
  useEffect(() => {
    if (user.completedProjects) {
      const status = getCrafterStatus(user.completedProjects.length);
      setCrafterStatus(status);
    }
  }, [user.completedProjects]);

  // Return profile info, including avatar, craft status, and number of completed crafts
  return (
    <div>
      <div id="inner-profile">
        <img
          id="profile-img"
          src={`../../${user.avatar}`}
          alt="User Avatar"
        ></img>
        <div id="user-info">
          <h2>{user.username}</h2>
          <p>Status: {crafterStatus}</p>
          <p>Completed Crafts: {user.completedProjects?.length}</p>
          <button
            onClick={handleShowAvatars}
            className="inter borders"
            id="change-avatar"
          >
            Change picture
          </button>
        </div>
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
