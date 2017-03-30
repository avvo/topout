module.exports = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 4096,
  github: {
    clientId: process.env.GITHUB_CLIENT_ID,
    secret: process.env.GITHUB_SECRET,
    callback: process.env.GITHUB_CALLBACK || 'http://localhost:4096/auth/github/callback',
  },
  redis: {
    host: process.env.REDIS_HOST || '0.0.0.0'
  },
  session: {
    secret: process.env.SESSION_SECRET || 'keyboard cat'
  }
};
