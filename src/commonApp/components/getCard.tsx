import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

import { MyContext } from "core/myContext";
import { PictureInfo } from "./pet.Model";

interface Props {
  pet: PictureInfo;
}

const cardUseStyles = makeStyles(() => ({
  root: {
    width: 345,
    margin: "12px",
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
}));

export const GetCard = (props: Props) => {
  const { pet } = props;
  const { cartList, setCartList, petListurchased, setPetListCurchased } =
    React.useContext(MyContext);

  const classes = cardUseStyles();

  const handleClick = () => {
    if (!pet.selected) {
      setCartList([...cartList, pet.id]);
      setPetListCurchased([...petListurchased, pet]);
    } else {
      const newArrayIds = cartList.filter((elem) => elem !== pet.id);
      const newPetsArray = petListurchased.filter((elem) => elem.id !== pet.id);
      setCartList(newArrayIds);
      setPetListCurchased(newPetsArray);
    }
  };

  return (
    <Card className={classes.root} key={pet.id}>
      <div className={classes.title}>
        <CardHeader title={pet.title} />
        <input type="checkbox" checked={pet.selected} onChange={handleClick} />
        <span>Buy</span>
      </div>
      <CardMedia
        className={classes.media}
        image={pet.picUrl}
        title={pet.title}
      />
    </Card>
  );
};
