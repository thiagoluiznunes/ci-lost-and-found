export default (router, querys) => {
  router.get('/search-name/:name', querys.searchByName);
};
