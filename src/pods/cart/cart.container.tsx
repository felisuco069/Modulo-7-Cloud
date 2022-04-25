import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { MyContext } from "core/myContext";
import { CartCardComponent } from "./cartCardComponent";
import { ResetButton } from "./reset.button";

const carttUseStyles = makeStyles(() => ({
  cart: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // borderLeft: "3px solid black;",
    width: "35vw",
    height: "100vh",
    boxSizing: "border-box",
  },
  component: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

export const CartListContainer = () => {
  const { petListurchased } = React.useContext(MyContext);

  const classes = carttUseStyles();

  return (
    <div className={classes.cart}>
      <h1>Hello from Cart</h1>
      <ResetButton />
      <div className={classes.component}>
        <CartCardComponent petList={petListurchased} />
      </div>
    </div>
  );
};
