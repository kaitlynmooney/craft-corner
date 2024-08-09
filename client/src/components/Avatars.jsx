/* AVATARS */
const Crafts = ({ title, crafts }) => {
  // Returns array of crafts, called in dashboard component
  return (
    <div>
      <h3>{title}</h3>
      <div>
        {/* Maps through each individual craft */}
        {crafts?.map((craft, index) => (
          <div key={index}>
            <p>{craft.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* EXPORT */
export default Crafts;
