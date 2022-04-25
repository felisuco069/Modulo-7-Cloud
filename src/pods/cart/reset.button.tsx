import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { MyContext } from "core/myContext";

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      margin: "24px 0",
      fontSize: "0.5rem",
    },
  })
);

export const ResetButton = () => {
  const { cartList, setCartList, petListurchased, setPetListCurchased } =
    React.useContext(MyContext);
  const classes = useStyles();

  const handleClick = () => {
    setCartList([]);
    setPetListCurchased([]);
  };
  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      startIcon={<DeleteIcon />}
      onClick={handleClick}
    >
      Delete Cart
    </Button>
  );
};
