import { useState, useEffect, useRef, useCallback } from "react";
import useFetch from "../hooks/useFetch";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const {
    data: response,
    error,
    loading,
  } = useFetch(`https://dummyjson.com/products?limit=${page * 10}`);

  const observer = useRef(null);

  // Update the `data` state when `response` changes
  useEffect(() => {
    if (response?.products) {
      setData((prevData) => [...prevData, ...response.products]);
      setHasMore(response.products.length > 0); // Check if there's more data
      console.log(data);
    }
  }, [response]);

  // Observer callback for infinite scroll
  const lastElementRef = useCallback(
    (node) => {
      if (loading || !hasMore) return; // Prevent observer callback when loading or no more data

      if (observer.current) observer.current.disconnect();

      const options = {
        root: null, // Use the viewport as the root
        rootMargin: "0px 0px 100px 0px", // Trigger when the element is 100px from the bottom of the viewport
        threshold: 0.3, // Trigger when the element is 100% visible
      };

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          console.log("#### call made again");
          setPage((prevPage) => prevPage + 1);
        }
      }, options);

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          ref={index === data.length - 1 ? lastElementRef : null}
        >
          {item.title}
        </div>
      ))}
      {loading && <p>Loading...</p>}
      {!hasMore && <p>No more items to load</p>}
      {error && <p>Error loading data</p>}
    </div>
  );
};

export default InfiniteScroll;
