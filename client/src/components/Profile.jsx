/* USER PROFILE INFO */
const Profile = ({ user }) => {
  // Return profile info, including avatar, craft status, and number of completed crafts
  return (
    <div id="profile">
      {/* TODO: ADD AVATAR <div></div> */}
      <div id="user-info">
        <h2>{user?.username}</h2>
        <p>Crafter Status: </p>
        {/* TODO: SET CRAFTER STATUS */}
        <p>Completed Crafts: {user?.completedProjects?.length}</p>
        <button className="inter borders">Pick an avatar!</button>
      </div>
    </div>
  );
};

/* EXPORT */
export default Profile;
