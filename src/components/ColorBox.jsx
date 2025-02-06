import PropTypes from "prop-types";

const ColorBox = ({ color }) => {
  return (
    <div
      className="color-box"
      style={{
        backgroundColor: color,
        width: "150px",
        height: "150px",
        border: "2px solid black",
        margin: "20px auto",
      }}
      data-testid="colorBox"
    ></div>
  );
};

ColorBox.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorBox;
