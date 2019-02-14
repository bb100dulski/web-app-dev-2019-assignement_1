'use strict';

const _ = require('lodash');

const albumStore = {

  albumCollection: require('./album-store.json').albumCollection,

  getAllAlbums() {
    return this.albumCollection;
  },

  getAlbum(id) {
    return _.find(this.albumCollection, { id: id });
  },
  
  removePhoto(id, photoId) {
    const album = this.getAlbum(id);
    _.remove(album.photos, { id: photoId });
  },
  
  removeAlbum(id) {
  _.remove(this.albumCollection, { id: id });
  },
  
};

module.exports = albumStore;