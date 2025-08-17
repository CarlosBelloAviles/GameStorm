// Este archivo contiene un hook personalizado para manejar el desplazamiento horizontal de géneros en una interfaz de usuario. Permite desplazar el contenido hacia la izquierda o hacia la derecha, y si se alcanza el final del contenido, se reinicia el desplazamiento al inicio o al final según corresponda.
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
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 220, behavior: "smooth" });
      }
    }
  };

  return { scrollLeft, scrollRight };
};

export default useScrollGenre;
