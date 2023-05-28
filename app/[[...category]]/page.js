import React from "react";
import HomeContainer from "@/containers/home";
import {
  getTopRatedMovies,
  getPopularMovies,
  getCategories,
  getSingleCategories,
} from "@/services/movie";

async function HomePage({ params }) {
  let selectedCategory;

  const [
    { results: popularMovies },
    { results: topRatedMovies },
    { genres: categories },
  ] = await Promise.all([getPopularMovies(), getTopRatedMovies(), getCategories()]);

  if (params.category?.length > 0) {
    const { results } = await getSingleCategories(params.category[0]);
    selectedCategory = results;
  }

  return (
    <HomeContainer
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
      }}
    />
  );
}

export default HomePage;
