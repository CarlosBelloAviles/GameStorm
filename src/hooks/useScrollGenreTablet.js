const useScrollGenre = (scrollRef) => {
  const scrollLeft = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      if (container.scrollLeft <= 0) {
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -220, behavior: "smooth" });
      }
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 220, behavior: "smooth" });
      }
    }
  };

  return { scrollLeft, scrollRight };
};

export default useScrollGenre;




/* const useScrollGenre = (scrollRef) => {
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -220, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 220, behavior: "smooth" });
    }
  };

  return { scrollLeft, scrollRight };
};

export default useScrollGenre; */
