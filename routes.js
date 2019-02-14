'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const album = require('./controllers/album.js');

router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);
router.get('/album/:id', album.index);
router.get('/album/:id/deletephoto/:photoid', album.deletePhoto);
router.get('/dashboard/deletealbum/:id', dashboard.deleteAlbum);

module.exports = router;
