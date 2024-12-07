import React from 'react'

// movies mock data
import {movies} from '../../data/mockMovieData'

// components
import Card from '../../components/card';


const Movies = () => {
    return (
    <div>
        <div class="bg-gray-900 py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-white mb-8">Introducing Our Latest Product</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {movies.length !== 0 && movies.map((value,index)=>(
                    <Card movieData={value} key={index}/>
                ))}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Movies