/* AVATARS */
const Avatars = ({ showAvatars, onClose }) => {
  const avatars = ["avatar-flower.jpeg"];
  const handleAvatarSelect = (avatar) => {
    // console.log("Selected Avatar:", avatar);
    // // You can add logic here to set the selected avatar in the user's profile
    // onClose(); // Close the modal after selection
  };

  // Returns modal of avatar choices
  return (
    <div
      className={`modal fade avatar-modal ${showAvatars ? "show" : ""}`}
      style={{ display: showAvatars ? "block" : "none" }}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="AvatarModal"
      aria-hidden={!showAvatars}
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Pick an avatar</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {/* {avatars.map((avatar, index) => (
              <img
                key={index}
                src={`../../${avatar}`}
                alt={`Avatar ${index + 1}`}
                onClick={() => handleSelectAvatar(avatar)}
                style={{ cursor: "pointer", margin: "10px" }}
              />
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

/* EXPORT */
export default Avatars;
