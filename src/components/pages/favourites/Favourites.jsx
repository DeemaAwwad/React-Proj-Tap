import { useFavourites } from "../../../contexts/FavouritesContext";
import './Favourites.css'
export default function Favourites() {
  const { favItems } = useFavourites();
  
  return (
    <div className="container-fluid">
      <div className="favourites">
        <h2>My Favourites </h2>
        <div className="favo-card">
        {favItems?.map((item)=>
        
           <div className="card-fav " key={item.id}>
            <img src={`../imgs/` + item.image} className="img-fluid" alt={item.topic} />
            <h2>{item.topic}</h2>
            <p>{item.rating}</p>
          </div>
        
        )}
        </div>
     
    </div>
    

    </div>
  );
}

// <pre>{JSON.stringify(favItems, null, "\t")}</pre>//