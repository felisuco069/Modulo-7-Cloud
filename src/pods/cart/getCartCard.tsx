import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

import { MyContext } from "core/myContext";
import { PictureInfo } from "commonApp/components/pet.Model";

interface Props {
  pet: PictureInfo;
}

const cardUseStyles = makeStyles(() => ({
  root: {
    width: "200px",
    margin: "12px",
    "& span": {
      fontSize: "1rem",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cart: {
    display: "flex",
    flexDirection: "column",
    width: 100,
    height: 100,
    margin: "6px",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  margin: {
    margin: "12px",
  },
}));

export const GetCardCart = (props: Props) => {
  const { pet } = props;
  const { cartList, setCartList, petListurchased, setPetListCurchased } =
    React.useContext(MyContext);

  const classes = cardUseStyles();

  const handleClick = () => {
    const newArrayIds = cartList.filter((elem) => elem !== pet.id);
    const newPetsArray = petListurchased.filter((elem) => elem.id !== pet.id);
    setCartList(newArrayIds);
    setPetListCurchased(newPetsArray);
  };

  return (
    <Card className={classes.root}>
      <div className={classes.title}>
        <IconButton
          aria-label="delete"
          className={classes.margin}
          onClick={handleClick}
        >
          <DeleteIcon />
        </IconButton>
        <CardHeader title={pet.title} />
      </div>
      <CardMedia
        className={classes.media}
        image={pet.picUrl}
        title={pet.title}
      />
    </Card>
  );
};
