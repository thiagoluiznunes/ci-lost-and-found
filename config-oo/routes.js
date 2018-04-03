'use strict';

class RoutesClass {
  constructor(server) {
    const express = require('express');
    const router = new express.Router();
    let apiRoutes = [];
    let searchRoutes = [];

    server.use('/api', router);

    this.startAPIRoutes = () => {
      if (apiRoutes.length == 0) {
        return console.log('None route was found!');
      } else {
        for (let x = 0; x < apiRoutes.length; x++) {
          let {path, url} = apiRoutes[x];

          let service = require(`${path}`);
          service.register(router, `${url}`);
        }
      }
    };
    this.startAPISearch = () => {
      if (searchRoutes == 0) {
        return console.log('None search route was found!');
      } else {
        for (let x = 0; x < searchRoutes.lenght; x++) {
          let {query, path, url} = searchRoutes[x];
          let service = require(`${path}`);
          let method = service.find(query);

          router.get(`${url}`, method);
        }
      }
    };
    this.addAPIMethod = (path, url) => {
      apiRoutes.push({
        'path': `../${path}`,
        'url': url});
    };
    this.addAPISearchMethod = (query, path, url) => {
      searchRoutes.push({
        'query': query,
        'path': `../${path}`,
        'url': url});
    };
    this.getRoutes = () => apiRoutes;
    this.getRoutes = () => searchRoutes;
  }
}

module.exports = RoutesClass;
