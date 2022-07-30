export const searchMovies = (name, array) => {
  const query = name.toLowerCase();
  const res = array.filter((item) => {
    if (item.nameRU)
      if (item["nameRU"].toLowerCase().indexOf(query) >= 0)
        return item;
  });
  return res;
}
