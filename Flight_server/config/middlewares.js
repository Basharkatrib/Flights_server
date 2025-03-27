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
      headers: {
        "X-Forwarded-Proto": "https" // ✅ يجبر Strapi على التعامل مع الطلبات كـ HTTPS
      }
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: [
        "https://flights-server.onrender.com",
        "http://localhost:5173",
        "http://localhost:1337"
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      credentials: true,
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  {
    name: 'strapi::session',
    config: {
      cookie: {
        secure: process.env.NODE_ENV === "production", // ✅ تشغيل secure فقط في الإنتاج
        httpOnly: true,
        sameSite: "lax",
      },
      trustProxy: true, // ✅ السماح لـ Strapi بفهم أنه خلف Proxy
    },
  },
  'strapi::favicon',
  'strapi::public',
];
