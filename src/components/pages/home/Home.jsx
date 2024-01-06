import React, { useEffect, useState } from 'react'
import './Home.css'
import SearchBar from './SearchBar';
import TopicsCard from './TopicsCard';
export default function Home() {
  const [topics,setTopics] = useState(null);
  const [uiTopics,setUiTopics] = useState(null);
  const [loading,setLoading] = useState(true);
  const [search,setSearch] = useState('');
   const [sort,setSort] = useState('');
   const [filter,setFilter] = useState('');
   const [categories,setCategories] = useState(null);
   

   useEffect(()=>{
     const searchParams = new URLSearchParams({phrase: search});
      setLoading(true);
     fetch(`https://tap-web-1.herokuapp.com/topics/list?${searchParams}`)
     .then(res=> res.json())
     .then(result => {
      setTopics(result);
     })
     .finally(()=>{
      setLoading(false)
     })

   },[search])

   useEffect(()=>{
    if(topics){
      setCategories([...new Set(topics.map(topic=> topic.category))])
    }
   },[topics])

   useEffect(()=>{
    if(topics){
      setUiTopics(
        topics
        .filter((topic)=>{
          if(filter){
            return topic.category === filter;
          }
          return true;
        })
        .sort((a, b) => {
          switch (sort) {
            case "author":
              return a["name"] > b["name"] ? 1 : -1;
              break;
            case "topic":
              return a["topic"] > b["topic"] ? 1 : -1;
              break;
            default:
              return 0;
          }
        })
      )
    }
   },[topics,sort,filter])


  return (
   <>
    <SearchBar 
     searchVal={search}
      onSearch={setSearch}
       sortVal={sort}
        onSort={setSort}
         filterVal={filter}
         onFilter={setFilter}
          filterOption={categories}
    />
    <TopicsCard 
      loading={loading}
      uiTopics={uiTopics}

    />
   </>
 

  )
}
