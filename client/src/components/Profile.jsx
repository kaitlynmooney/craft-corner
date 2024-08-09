const Profile = ({ user }) => {
  return (
    <div id="profile">
      {/* TODO: ADD AVATAR <div></div> */}
      <div id="user-info">
        <h2>{user.username}</h2>
        <p>Crafter Status: </p>
        {/* TODO: SET CRAFTER STATUS */}
        <p>Completed Crafts: {user.completedProjects.length}</p>
      </div>
    </div>
  );
};

export default Profile;
