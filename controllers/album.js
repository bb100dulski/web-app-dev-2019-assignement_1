'use strict';

const logger = require('../utils/logger');
const albumStore = require('../models/album-store');

const album = {
  index(request, response) {
    const albumId = request.params.id;
    logger.debug('Album id = ', albumId);
    const viewData = {
      title: 'Album',
      album: albumStore.getAlbum(albumId),
    };
    response.render('album', viewData);
  },
  deletePhoto(request, response) {
    const albumId = request.params.id;
    const photoId = request.params.photoid;
    logger.debug(`Deleting Photo ${photoId} from Album ${albumId}`);
    albumStore.removePhoto(albumId, photoId);
    response.redirect('/album/' + albumId);
  },
};

module.exports = album;