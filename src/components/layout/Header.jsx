import React from 'react'
import './Header.css'
import { useFavourites } from '../../contexts/FavouritesContext';
export default function Header() {
  const { toggleIsFavOpen } = useFavourites();
  return (
   <>
    <div className="header container-fluid">
     <div className="header-content">
     <div className="col-md-6">
        <h1>Web Topics</h1>
      </div>
      <div className="col-md-6 btn">
        <button>
        <ion-icon name="moon-outline"></ion-icon>
          Dark Mode</button>
        <button onClick={toggleIsFavOpen}>
        <ion-icon name="heart"></ion-icon>
          Favourites</button>
      </div>
     </div>
    </div>
   </>
  )
}
