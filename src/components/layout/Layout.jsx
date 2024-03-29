import React from 'react'
import {  Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Welcome from './Welcome'
import { useFavourites } from '../../contexts/FavouritesContext'
import Favourites from '../pages/favourites/Favourites.jsx'





export default function Layout() {
  const { isFavOpen } = useFavourites();

  return (
    <>
    <Header />
    <Welcome />
    <main>
    <Outlet />
    {isFavOpen && <Favourites /> }
    
    </main>
    <Footer />
    </>

  )
}
