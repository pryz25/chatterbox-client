var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll((data) => { // call parse to pull messages
      for (var key in data) { // for the single key in data
        Messages.storage = data[key]; // storage is server message array
      }
    });
  },

  renderMessage: function(message) {
    var h = MessageView.render(message);
    $chats.append(h);
  }

};