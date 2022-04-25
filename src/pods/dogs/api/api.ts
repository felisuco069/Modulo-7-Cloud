import { PictureInfo } from "commonApp/components/pet.Model";

const url = `${process.env.API_BASE_URL}`;

export const getDogList = (): Promise<PictureInfo[]> =>
  fetch(`${url}/dogsList`).then((response) => response.json());
