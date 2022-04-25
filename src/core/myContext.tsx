import React from "react";
import { Context, PictureInfo } from "./context.model";

export const MyContext = React.createContext<Context>({
  cartList: [],
  setCartList: (value) => {},
  petListurchased: [],
  setPetListCurchased: (value) => {},
  visible: true,
  setVisible: (value) => {},
});

export const MyContextProvider: React.FC = ({ children }) => {
  const [cartList, setCartList] = React.useState<string[]>([]);
  const [visible, setVisible] = React.useState<boolean>(true);
  const [petListurchased, setPetListCurchased] = React.useState<PictureInfo[]>(
    []
  );

  return (
    <MyContext.Provider
      value={{
        cartList,
        setCartList,
        petListurchased,
        setPetListCurchased,
        visible,
        setVisible,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
