import React from 'react'

import Movies from '@/mocks/movies'
import Genres from '@/mocks/genres'
import FeaturedMovie from '@/components/featured-movie';
import Categories from '@/components/categories';

function HomeContatiner() {
    return (
        <div>
            <FeaturedMovie movie={Movies.results[0]} />
            <Categories categories={Genres.genres.slice(0, 5)} />
        </div>
    )
}

export default HomeContatiner
