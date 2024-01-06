import { useFavourites } from "../../../contexts/FavouritesContext";
import './Favourites.css'
export default function Favourites() {
  const { favItems } = useFavourites();

  return (
    <div className="container-fluid">
      <div className="favourites">
        <h2>My Favourites </h2>
        <pre>{JSON.stringify(favItems, null, "\t")}</pre>
      </div>
    </div>
  );
}