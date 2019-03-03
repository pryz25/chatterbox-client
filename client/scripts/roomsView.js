var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#roomSelect'),
  $refresh: $('.refresh'),
  $room: $('.roomclick'),
  $addRoom : $('.addRoom'),

  initialize: function() {
    RoomsView.$refresh.on('click', function () {
      $('#chats').html('');
      MessagesView.initialize();
    })
    // RoomsView.$addRoom.click(function () {
    //   $()
    // }),

    // RoomsView.$room.select(function () {
    //   $('#chats').html('');
    //   console.log('werk')
    //   // MessagesView.initialize()
    // })
    // call parse to pull messages
    // access the object
    // for each object
    // check roomname
    // if roomname hasn't been found 
    // then add
    // send to rooms
  },

  selectFunction : function() {
    var selectRoom = document.getElementById('roomSelect').value;
    $('#chats').html('')
    Messages.roomMessages(Messages.storage, selectRoom)
    // iterage over room storage
    // if index doesnt equal select room
    // toggle class
      
    

    // if class is not selected
      // toggle class
    // $('#chats').html('');
    
  },

  // handleRefresh: function(event) {
  //   MessagesView.initialize();
  //   console.log('click!');
  // },

  renderRoom : function(value) {
    if (!Rooms.storage.includes(value)) {
      this.$select.append(`<OPTION value="${value}">${value}</OPTION>`);
      Rooms.storage.push(value);
    }
  }

};
