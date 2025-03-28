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
      // يمكنك وضع إعدادات إضافية هنا إذا لزم الأمر
    },
  },
  {
    name: 'strapi::session',
    config: {
      cookie: {
        secure: true, // يضمن إرسال ملفات تعريف الارتباط فقط عبر HTTPS
        httpOnly: true,
        sameSite: "lax",
      },
      trustProxy: true, // مطلوب عند العمل خلف وكيل مثل Render
    },
  },
  'strapi::favicon',
  'strapi::public',
];
