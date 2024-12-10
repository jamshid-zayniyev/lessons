import React, { useState } from 'react'

// movies mock data
import {movies} from '../../data/mockMovieData'

// components
import Card from '../../components/card';


const Movies = () => {

    const [filterData,setFilterData] = useState(movies)
    


    const searchData = (search) =>{
        if(search.trim().length !== 0) {
            const filteredData =  movies.filter(x=>x.title.toLowerCase().search(search.trim().toLowerCase()) >=0);
            setFilterData(filteredData)
        }else{
            setFilterData(movies)
        }
    }

    return (
    <div>
        <div class="bg-gray-900 py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-white mb-8">Introducing Our Latest Product</h2>

        {/*  search      */}
        <form class="max-w-md my-2">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <input type="search" onChange={(e)=>searchData(e.target.value)} id="default-search" class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>

            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filterData.length !== 0 && filterData.map((value,index)=>(
                    <Card movieData={value} key={index}/>
                ))}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Movies