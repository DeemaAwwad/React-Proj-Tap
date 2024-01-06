import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Details from "./components/pages/details/Details";
import Home from "./components/pages/home/Home";
import FavouritesProvider from "./contexts/FavouritesContext";

export default function App() {
 
  return (
    <FavouritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FavouritesProvider>
  );
}
