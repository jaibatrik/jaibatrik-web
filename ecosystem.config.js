module.exports = {
    /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
        {
          name        : 'JAIBATRIK_WEB',
          cwd         : '/home/jaibatrik/jaibatrik-web',
          script      : 'server.js'
        }
    ]
};
