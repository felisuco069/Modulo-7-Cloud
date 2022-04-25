export interface PictureInfo {
  id: string;
  picUrl: string;
  title: string;
  selected: boolean;
}

export interface Context {
  cartList: string[];
  setCartList: (value: string[]) => void;
  petListurchased: PictureInfo[];
  setPetListCurchased: (value: PictureInfo[]) => void;
  visible: boolean;
  setVisible: (value: boolean) => void;
}
