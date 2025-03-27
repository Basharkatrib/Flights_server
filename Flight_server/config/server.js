module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  proxy: true, // ✅ تأكدنا من تمكين البروكسي
  settings: {
    url: env('PUBLIC_URL', 'https://flights-server.onrender.com'), // ✅ اجعل Strapi يعرف عنوان السيرفر الصحيح
    secureProxy: env.bool('SECURE_PROXY', true), // ✅ يجبر استخدام HTTPS عند الضرورة
  },
});
