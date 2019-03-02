var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $refresh: $('.refresh'),

  initialize: function() {
    RoomsView.$refresh.on('click', function () {
      $('#chats').html('');
      MessagesView.initialize();
    });
    // call parse to pull messages
    // access the object
    // for each object
    // check roomname
    // if roomname hasn't been found 
    // then add
    // send to rooms
  },

  // handleRefresh: function(event) {
  //   MessagesView.initialize();
  //   console.log('click!');
  // },

  renderRoom: function(value) {
    if (!Rooms.storage.includes(value)) {
      this.$select.append(`<OPTION>${value}</OPTION>`);
      Rooms.storage.push(value);
    }
  }

};
