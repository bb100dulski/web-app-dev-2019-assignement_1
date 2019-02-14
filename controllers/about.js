'use strict';

const logger = require('../utils/logger');

const about = {
  index(request, response) {
    logger.info('about rendering');
    const viewData = {
      title: 'About PhotoAlbum',
    };
    response.render('about', viewData);
  },
};

module.exports = about;
