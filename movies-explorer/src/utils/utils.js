export const searchMovies = (name, array, isSmall) => {
  const query = name.toLowerCase();
  const res = array.filter((item) => {
    if (item.nameRU) {
      if (item["nameRU"].toLowerCase().indexOf(query) >= 0) {
        if (!isSmall)
          return item;
        else if (item.duration <= 40)
          return item;
      }
    }
  });
  return res;
}
