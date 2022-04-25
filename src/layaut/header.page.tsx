import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { MyContext } from "core/myContext";
import React from "react";
import { Link } from "react-router-dom";

const headertUseStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  navigation: {
    listStyle: "none",
  },
  button: {
    width: "80px",
    margin: "0 8px",
    fontSize: "0.5rem",
  },
}));

export const HeaderPage = () => {
  const { visible, setVisible } = React.useContext(MyContext);

  const classes = headertUseStyles();

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div className={classes.container}>
      <nav>
        <ul className={classes.navigation}>
          <li>
            <Link to={"/dogs"}>Buy Dogs</Link>
          </li>
          <li>
            <Link to={"/cats"}>Buy Cats</Link>
          </li>
        </ul>
      </nav>
      <div>
        {visible ? (
          <Button
            variant="contained"
            size="small"
            color="primary"
            className={classes.button}
            onClick={handleClick}
          >
            Hide Cart
          </Button>
        ) : (
          <Button
            variant="contained"
            size="small"
            color="primary"
            className={classes.button}
            onClick={handleClick}
          >
            Show Cart
          </Button>
        )}
      </div>
    </div>
  );
};
