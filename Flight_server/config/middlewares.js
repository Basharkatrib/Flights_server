module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
    },
  },
  {
    name: 'strapi::session',
    config: {
      cookie: {
        secure: true, 
        httpOnly: true,
        sameSite: "lax",
      },
      trustProxy: true, 
    },
  },
  'strapi::favicon',
  'strapi::public',
];
