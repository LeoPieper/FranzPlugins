const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    const unreadContacts = $(".foundation-icon-navigation-contacts span:visible").length;
    const unreadMail = $(".foundation-icon-navigation-messages span:visible").length;
    const unread = unreadContacts+unreadMail;

    Franz.setBadge(unread);
  }

  Franz.loop(getMessages);

  Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));
};
