import { React, useContext } from "react";
import CartContext from "../../Context/cart-context";
import classes from "./Products.module.css";

const ProductItems = (props) => {
  const useCtx = useContext(CartContext);
  const onClickHandler = (e) => {
    e.preventDefault();
    console.log(props.title);
    useCtx.addItem({
      id: props.id,
      title: props.title,
      amount: 1,
      imageUrl: props.imageUrl,
      quantity: props.quantity,
      price: props.price
    });
  };
  return (
    <form key={props.title} onSubmit={onClickHandler}>
      <h2>{props.title}</h2>
      <img src={props.imageUrl} alt="images" className={classes.img} />
      <h3>Price: {props.price}</h3>
      <button type="submit">Add to cart</button>
    </form>
  );
};

export default ProductItems;
