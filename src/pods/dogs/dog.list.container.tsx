import React from "react";

import { getDogList } from "pods/dogs/api/api";
import { PetsListComponent } from "commonApp/components/pet.list.component";
import { makeStyles } from "@material-ui/core/styles";
import { MyContext } from "core/myContext";
import { PictureInfo } from "commonApp/components/pet.Model";

const PetContainerStyle = makeStyles(() => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    height: "max-content",
    borderRight: "3px solid black;",
  },
}));

export const DogListContainer: React.FC = () => {
  const { cartList } = React.useContext(MyContext);
  const [dogList, setDogList] = React.useState<PictureInfo[]>([]);
  const classes = PetContainerStyle();

  React.useEffect(() => {
    getDogList().then((json) => {
      if (cartList.length > 0) {
        const newArrayElements = json.map((elem) => {
          return cartList.includes(elem.id)
            ? { ...elem, selected: true }
            : elem;
        });
        setDogList(newArrayElements);
      } else {
        setDogList(json);
      }
    });
  }, [cartList]);

  return (
    <div className={classes.container}>
      <PetsListComponent petList={dogList} />
    </div>
  );
};
