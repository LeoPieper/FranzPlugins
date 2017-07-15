const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    const tasks = $(".NotificationsDrawer_badge-task span:visible").length; 
    Franz.setBadge(tasks);
  }

  Franz.loop(getMessages);

  Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));
};
