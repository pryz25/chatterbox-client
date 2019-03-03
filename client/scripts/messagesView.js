var MessagesView = {

  $chats: $('#chats'),
  $username: $('.username'),

  initialize: function() {
    Parse.readAll((data) => { // call parse to pull messages
      for (var key in data) { // for the single key in data
        Messages.storage = data[key];
        Messages.eachMessages(data[key]); // storage is server message array
      }
    })
    MessagesView.$username.click(MessagesView.addFriends);
  },

  renderMessage: function(message) {
    var h = MessageView.render(message);
    MessagesView.$chats.append(h);
  },
  
  addFriends: function(event) {
    debugger;
    $('.username').addClass('friends');
    Friends.storage.push($('.friends').value);
  }
  
};