import React, { createContext, useContext, useEffect, useState } from 'react'
import reviewService from './services/reviewService'
const ControllerContext = createContext({})

export function ProvideController({ children }) {
  const provider = useHook()
  return (
    <ControllerContext.Provider value={provider}>
      {children}
    </ControllerContext.Provider>
  )
}

export const useController = () => {
  return useContext(ControllerContext)
}

function useHook() {
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState(null)

  const API_KEY = '8ec77365'

  async function getMovie(searchTerm) {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${searchTerm}&apikey=${API_KEY}`
      )
      const data = await response.json()
      const newMovie = {
        title: data.Title,
        poster: data.Poster,
        id: data.imdbID,
        rating: data.Rated
      }
      setMovies((prevMovies) => [...prevMovies, newMovie])
    } catch (error) {
      console.error(error)
    }
  }
  async function getMoviePage(searchTerm) {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${searchTerm}&apikey=${API_KEY}`
      )
      const data = await response.json()
      setMovie(data)
      localStorage.setItem('moviePoster', data.Poster) // Store the URL in local storage
    } catch (error) {
      console.error(error)
    }
  }

  const [reviews, setReviews] = useState([])

  async function createReview(review, movie, user) {
    try {
      const moviePoster = localStorage.getItem('moviePoster') // Retrieve the URL from local storage
      const newReview = await reviewService.createReview(
        review,
        movie,
        moviePoster, // Add the URL to the movie object
        user._id
      )
      console.log(newReview)
      console.log(user._id)
      setReviews((oldReviews) => [...oldReviews, newReview])
      console.log(reviews)
    } catch (error) {
      console.error(error)
    }
  }

  async function getAllReviews() {
    try {
      const results = await reviewService.getAllReviews()
      setReviews([...results])
    } catch (error) {
      console.error(error)
    }
  }

  async function updateReview(id, review, user) {
    try {
      const results = await reviewService.updateReview(id, review, user)
      return results
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteReview(id) {
    try {
      await reviewService.deleteReview(id)
      const indexToRemove = reviews.findIndex((review) => review._id === id)
      if (indexToRemove) {
        const reviewCopy = [...reviews]
        reviewCopy.splice(indexToRemove, 1)
        setReviews([...reviewCopy])
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const searchTerms = [
      'Ant-man and the wasp: quantumania',
      'Die Hard',
      'Avatar: The Way of Water',
      'Cocaine Bear'
    ]
    searchTerms.forEach((searchTerm) => {
      getMovie(searchTerm)
    })
  }, [])

  return {
    movies,
    setMovies,
    getMovie,
    getMoviePage,
    setMovie,
    movie,
    createReview,
    reviews,
    getAllReviews,
    updateReview,
    setReviews,
    deleteReview
  }
}
