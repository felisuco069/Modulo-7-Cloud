import React from "react";
import { GetCard } from "commonApp/components/getCard";
import { PictureInfo } from "./pet.Model";

interface Props {
  petList: PictureInfo[];
}

export const PetsListComponent: React.FC<Props> = (props) => {
  const { petList } = props;

  return (
    <>
      {petList.map((pet) => {
        return <GetCard pet={pet} key={pet.id} />;
      })}
    </>
  );
};
