const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    const unreadContacts = $(".fa-users span:visible").length;
    const unreadMail = $(".fa-envelope span:visible").length;
    const unread = unreadContacts+unreadMail;
  }

  Franz.loop(getMessages);

  Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));
};
