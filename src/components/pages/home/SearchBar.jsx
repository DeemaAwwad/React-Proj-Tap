import React from 'react'

export default function SearchBar({searchVal, onSearch, sortVal, onSort, filterVal,onFilter, filterOption}) {
  return (
    <div className="container-fluid searches">
    <div className="search">
      <div className="input">
        <ion-icon name="search-outline" />
        <input type="text" placeholder="Search the website..." className="search-input" value={searchVal} onChange={(event)=>onSearch(event.target.value)} />
      </div>
      <button className="search-dropdown sort-by" id="sort-by">
        <label htmlFor="dropdown-sort">Sort by:</label>
        <select  id="dropdown-sort" value={sortVal} onChange={(event)=>onSort(event.target.value)}>
          <option value="Default">Default</option>
          <option value="topic">Topic Title</option>
          <option value="author">Author Name</option>
        </select>
      </button>
      <button className="search-dropdown filter-by">
        <label htmlFor="dropdown-filter">Filter by:</label>
        <select  id="dropdown-filter" value={filterVal} onChange={(event)=> onFilter(event.target.value)}>
         {filterOption?.map((option)=> <option key={option}>{option}</option>)}
        </select>
      </button>
    </div>
  </div>
  )
}
