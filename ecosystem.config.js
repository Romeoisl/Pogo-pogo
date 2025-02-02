module.exports = {
  apps: [
    {
      name: 'Pogo pogo',
      script: 'index.js',
      instances: 1,
      autorestart: false,
      watch: true,
      max_memory_restart: '750 MB',
      env: {
        NODE_ENV: 'production'
      },
      log: 'logs/app.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      error_file: 'logs/error.log',
      out_file: 'logs/output.log',
      min_uptime: '70s',
      max_restarts: 3,
      restart_delay: 1000,
      kill_timeout: 3000
    }
  ]
};
