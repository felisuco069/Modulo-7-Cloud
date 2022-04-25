import { PictureInfo } from "commonApp/components/pet.Model";

const url = `${process.env.API_BASE_URL}`;

export const getCatList = (): Promise<PictureInfo[]> =>
  fetch(`${url}/catsList`).then((response) => response.json());
