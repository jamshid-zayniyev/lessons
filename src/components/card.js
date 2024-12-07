import React from 'react'

const Card = ({movieData}) => {
  return (
            <div class="bg-white rounded-lg shadow-lg p-8">
                <div class="relative overflow-hidden">
                    <img class="object-cover w-full h-full" src={movieData.poster} alt="Product"/>
                </div>
                <h3 class="text-sm font-bold text-gray-900 mt-4">{movieData.title}</h3>
                <p class="text-gray-500 text-sm mt-2 line-clamp-4">{movieData.overview}</p>
                <h3 class="text-sm font-bold text-gray-900 mt-4">Genres: <i>{movieData.genres.toString()}</i></h3>
                <div class="flex items-center justify-between mt-4">
                    <span class="text-gray-900 font-bold text-lg">$29.99</span>
                    <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Buy</button>
                </div>
            </div>
  )
}

export default Card