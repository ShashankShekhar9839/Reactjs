import React from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import PostProvider from "./context/PostProvider";
import usePost from "./context/usePost";

const App = () => {
  const post = usePost();
  console.log(post);
  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
};

export default App;
