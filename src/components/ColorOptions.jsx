import PropTypes from "prop-types";
import ColorOption from "./ColorOption";

export default function ColorOptions( {colors, handleGuess} ) {
    return(
        <div className="color-options">
            {colors.map((color, index) => (
                <ColorOption key={index} color={color} handleGuess={handleGuess} />
            ))}
        </div>
    );
};

ColorOptions.propTypes = {
    colors: PropTypes.array.isRequired,
    handleGuess: PropTypes.func.isRequired,
};