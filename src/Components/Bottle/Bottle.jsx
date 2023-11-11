import PropTypes from "prop-types";
import "./Bottle.css";
const Bottle = ({ bottle, handleAddtoCart }) => {
  const { name, img, price } = bottle;
  console.log(bottle);
  return (
    <div className="bottle">
      <h3>Bottle: {name} </h3>
      <img src={img} alt="" />
      <p>Price: ${price}</p>
      <button onClick={() => handleAddtoCart(bottle)}>Purchase</button>
    </div>
  );
};
Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handleAddtoCart: PropTypes.func.isRequired,
};

export default Bottle;
