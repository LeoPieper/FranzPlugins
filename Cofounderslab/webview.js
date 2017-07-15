const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    const notification = $(".notification-badge:visible").length;
    Franz.setBadge(notification);
  }

  Franz.loop(getMessages);

  Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));
};
