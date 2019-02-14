'use strict';

const logger = require('../utils/logger');
const albumStore= require('../models/album-store');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Album Dashboard',
      albums: albumStore.getAllAlbums(),
    };
    logger.info('about to render', albumStore.getAllAlbums());
    response.render('dashboard', viewData);
  },
  deleteAlbum(request, response) {
    const albumId = request.params.id;
    logger.debug(`Deleting Album ${albumId}`);
    albumStore.removeAlbum(albumId);
    response.redirect('/dashboard');
  },
};

module.exports = dashboard;