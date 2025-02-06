import PropTypes from "prop-types";

const ColorOption = ( {color, handleGuess} ) => {
    return(
        <button 
            className="color-option"
            style={{
                backgroundColor: color,
                width: "100px",
                height: "50px",
                margin: "5px",
                border: "none",
                cursor: "pointer",
            }}
            onClick={() => handleGuess(color)}
            data-testid="colorOption"
        >
            {}
        </button>
    );
};

ColorOption.propTypes= {
    color: PropTypes.string.isRequired,
    handleGuess: PropTypes.func.isRequired,
}

export default ColorOption;