var Messages = {
  // need a function
  // storage : [],
  eachMessages : function (arrOfObj) {
    // for (var i = 0; i < Messages.storage.length; i++) {
    for (let i of arrOfObj) {
      if (i.username) {
        MessagesView.renderMessage(i);
        RoomsView.renderRoom(i.roomname);
      }
    }
  }

  // accepts array of objects
  // if objects have
  // text, username, roomname
  // send to render
};