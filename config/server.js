module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'http://help.rickricks.com/cmsapi',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a2d03dcd1426359912457ad87d061052'),
    },
  },
});
