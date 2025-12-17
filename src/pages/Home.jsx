import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import FormContact from '../components/FormContact.jsx';
import Heading from '../components/Heading.jsx';
import HomeMain from '../components/HomeMain.jsx';
import ImagesLayout from '../components/ImagesLayout.jsx';
import NewsAndBlogs from '../components/NewAndBlogs.jsx';
import HomeIconCards from '../components/HomeIconCards.jsx';
const HeroCarousel = lazy(() => import('../components/HeroCarousel'));
function Home() {
  return (
    <>
      <Link to="#main-content" className="sr-only focus:not-sr-only">Skip to main content</Link>
      <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
        <HeroCarousel />
        <HomeMain />

        <HomeIconCards />
        <Heading
          title="PHOTO GALLERY"
          description="Explore our moments, events, and inspirations captured in frames"
        />

        <ImagesLayout />
        <Heading
          title="NEWS AND BLOG"
          description="Discover the latest updates, news, and insights from our team."
        />

        <NewsAndBlogs />
        <FormContact />
      </Suspense>
    </>
  );
}








export default Home;
