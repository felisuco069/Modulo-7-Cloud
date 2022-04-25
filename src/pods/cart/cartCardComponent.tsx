import React from "react";

import { GetCardCart } from "./getCartCard";
import { PictureInfo } from "commonApp/components/pet.Model";

interface Props {
  petList: PictureInfo[];
}

export const CartCardComponent: React.FC<Props> = (props) => {
  const { petList } = props;

  return (
    <>
      {petList.map((pet) => {
        return <GetCardCart pet={pet} key={pet.id} />;
      })}
    </>
  );
};
