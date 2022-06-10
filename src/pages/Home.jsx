import React from 'react'
import { Link } from 'react-router-dom'
import { OutlineButton } from '../components/button/Buton'

import HeroSlide from '../components/hero-slide/HeroSlide'
import MovieList from '../components/movie-list/MovieList'

import { category, movieType, tvType } from '../api/tmdbApi';

function Home() {
  return (
    <>
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section-header mb-2">
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View All</OutlineButton>
            </Link>
          </div>
        </div>
        <MovieList category={category.movie} type={movieType.popular}/>
      </div>
      <div className="container top-rate">
        <div className="section mb-3">
          <div className="section-header mb-2">
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View All</OutlineButton>
            </Link>
          </div>
        </div>
        <MovieList category={category.movie} type={movieType.top_rated}/>
      </div>
      <div className="container top-rate">
        <div className="section mb-3">
          <div className="section-header mb-2">
            <h2>Trending TV Shows</h2>
            <Link to="/movie">
              <OutlineButton className="small">View All</OutlineButton>
            </Link>
          </div>
        </div>
        <MovieList category={category.tv} type={movieType.popular}/>
      </div>
      <div className="container top-rate">
        <div className="section mb-3">
          <div className="section-header mb-2">
            <h2>Top Rated TV Show</h2>
            <Link to="/movie">
              <OutlineButton className="small">View All</OutlineButton>
            </Link>
          </div>
        </div>
        <MovieList category={category.tv} type={movieType.top_rated}/>
      </div>
      <br />
    </>
  )
}

export default Home