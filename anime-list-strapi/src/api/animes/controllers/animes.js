'use strict';

/**
 * animes controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::animes.animes');
