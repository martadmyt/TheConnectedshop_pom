module.exports = {
    default: {
      requireModule: ['@babel/register'],
      require: ['features/**/*.js'],
      format: ['progress-bar', 'html:cucumber-report.html'],
    }
  };