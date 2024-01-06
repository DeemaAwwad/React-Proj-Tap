import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Topics.css'
export default function TopicsCard({uiTopics,loading}) {
  
 
  return (
   <>
   <div className="container-fluid website">
    
   <h2 className="web-topics">"<span className="resultsNumber" >0</span>" Web Topics Found</h2>
     <div className="cards" >
     {loading? 
     <div>loading...</div>
     : uiTopics?.map((topic)=>
         <Link key={topic.id} to={`/details/${topic.id}`}>
         <div className="card" id="cards" >
           <img className="bg-white img-cover" src={`./imgs/` + topic.image} alt={topic.topic} />
           <div className="cards-content">
               <h3 className="topic-type trim-one">{topic.category}</h3>
               <h4 className="topic-name trim-two">{topic.topic}</h4>
               <div className="stars">
                   {topic.rating}
               </div>
               <p className="author">Author: {topic.name}</p>
           </div>
           </div>
         </Link>
     )}
     </div>
   </div>
   </>
  )
}
