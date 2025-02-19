module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 3001),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "18719ab4c83cf2ecedee7e26e262cf59"),
    },
  },
});
