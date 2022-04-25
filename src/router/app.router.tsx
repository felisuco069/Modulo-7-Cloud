import { MyContextProvider } from "core/myContext";
import { AppLayaut } from "layaut/app-layaut";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CatsScene } from "scenes/cats.scene";
import { DogsScene } from "scenes/dogs.scene";

export const AppRouter: React.FC = () => {
  return (
    <MyContextProvider>
      <BrowserRouter>
        <AppLayaut>
          <Routes>
            <Route path="/" element={<DogsScene />} />
            <Route path="/dogs" element={<DogsScene />} />
            <Route path="/cats" element={<CatsScene />} />
          </Routes>
        </AppLayaut>
      </BrowserRouter>
    </MyContextProvider>
  );
};
