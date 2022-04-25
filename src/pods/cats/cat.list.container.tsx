import React from "react";

import { getCatList } from "./api/api";
import { PetsListComponent } from "commonApp/components/pet.list.component";
import { makeStyles } from "@material-ui/core/styles";
import { MyContext } from "core/myContext";

const PetContainerStyle = makeStyles(() => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    height: "max-content",
    borderRight: "3px solid black;",
  },
}));

export const CatListContainer: React.FC = () => {
  const { cartList } = React.useContext(MyContext);
  const [catList, setCatList] = React.useState([]);
  const classes = PetContainerStyle();

  React.useEffect(() => {
    getCatList().then((json) => {
      if (cartList.length > 0) {
        const newArrayElement = json.map((elem) => {
          return cartList.includes(elem.id)
            ? { ...elem, selected: true }
            : elem;
        });
        setCatList(newArrayElement);
      } else {
        setCatList(json);
      }
    });
  }, [cartList]);

  return (
    <div className={classes.container}>
      <PetsListComponent petList={catList} />
    </div>
  );
};
