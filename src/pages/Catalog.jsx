import React from 'react'

import { useParams } from 'react-router'
import PageHeader from '../components/page-header/PageHeader';

import MovieGrid from '../components/movie-grid/MovieGrid';
import { category as cate } from '../api/tmdbApi'

function Catalog() {

  const { category } = useParams()

  console.log(category);

  return (
    <>
      <PageHeader>
        {category === cate.movie ? 'Movies' : 'TV Show'}
      </PageHeader>
      <div className="container">
          <div className="section mb-3">
              <MovieGrid category={category}/>
          </div>
      </div>
    </>
  )
}

export default Catalog