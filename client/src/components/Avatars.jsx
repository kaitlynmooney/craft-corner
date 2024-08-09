/* AVATARS */
const Avatars = ({ showAvatars, onClose }) => {
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
          <div className="modal-body">{/* Your avatar selection logic */}</div>
        </div>
      </div>
    </div>
  );
};

/* EXPORT */
export default Avatars;
