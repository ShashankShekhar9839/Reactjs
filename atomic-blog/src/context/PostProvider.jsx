import React, { createContext, useState } from "react";
import { faker } from "@faker-js/faker";
import { use } from "react";

function createRandomPosts() {
  return {
    title: `${faker.hacker.adjective} ${faker.hacker.noun}`,
    body: faker.hacker.phrase(),
  };
}

export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPosts())
  );

  const [searchQuery, setSearchQuery] = useState("");

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          post.title
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase())
        )
      : posts;

  const value = {
    posts: searchedPosts,
    onAddPost: handleAddPost,
    onClearPosts: handleClearPosts,
    searchQuery,
    setSearchQuery,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export default PostProvider;
