import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { HeaderPage } from "layaut/header.page";
import { CartScene } from "scenes/cart.scene";
import { MyContext } from "core/myContext";

const appUseStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    display: "flex",
  },
}));

export const AppLayaut = ({ children }) => {
  const { visible } = React.useContext(MyContext);

  const classes = appUseStyles();

  return (
    <div className={classes.root}>
      <header>
        <HeaderPage />
      </header>
      <div className={classes.container}>
        <main>{children}</main>
        {visible ? <CartScene /> : <></>}
      </div>
    </div>
  );
};
