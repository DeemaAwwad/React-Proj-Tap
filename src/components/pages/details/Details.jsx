import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFavourites } from "../../../contexts/FavouritesContext";
import "./Details.css";

export default function DetailsPage() {
  const { id } = useParams();
  const [topic, setTopic] = useState(null);
  const { isFavItem, addToFavItems, removeFromFavItems, favItems } =
    useFavourites();
  const [isFavTopic, setIsFavTopic] = useState(false);
  useEffect(() => {
    setIsFavTopic(isFavItem(id));
  }, [isFavItem, id]);

  useEffect(() => {
    fetch(`https://tap-web-1.herokuapp.com/topics/details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTopic(data);
      });
  }, [id]);

  function toggleFavItem() {
    if (isFavTopic) {
      removeFromFavItems(topic.id);
    } else {
      addToFavItems(topic);
    }
  }
 
  let result = "";
  return (
    <section className="languages">
      <article className="languge-page ">
        <div className=" languge-type container">
          <span>{topic?.category}</span>
          <h2>{topic?.topic}</h2>
          <div className="stars">
            <ion-icon name="star" />
            <ion-icon name="star" />
            <ion-icon name="star" />
            <ion-icon name="star" />
            <ion-icon name="star-outline" />
          </div>
          <p>{topic?.description}</p>
        </div>
      </article>
      <article className="sub-topics ">
        <div className="container topics-page">
          <div className="sub-topic">
            <h2>{topic?.topic} Sub Topics</h2>
            <ul>
              {topic?.subtopics.forEach((subtopic) => {
               
                let listItem = `<li>
        <ion-icon name="checkmark-circle-outline"></ion-icon>
        <span class="trim-one">{subtopic}</span>
        </li>
     ` ;
                result = result + listItem;
              
                
              })}
                  {result} 
             
            </ul>
          </div>
        </div>
      </article>
      <article>
        <div className="topic-card">
          <img src={`../imgs/` + topic?.image} alt={topic?.topic} />
          <div className="card-top">
            <h3>
              {topic?.topic} by <a href="#">{topic?.name}</a>
            </h3>
            <div className="card-bottom">
              <h4>Interested about this topic?</h4>
              <button onClick={toggleFavItem}>
                {isFavTopic ? "Remove From Favourites" : "Add To Favourites"}
              </button>
              <p>Unlimited Credits</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
