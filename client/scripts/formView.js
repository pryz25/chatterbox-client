var FormView = {

  $form: $('form'),
  $addRoom: $('.addRoom'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit),
    FormView.$addRoom.on('click', FormView.roomSubmit)
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    // event.preventDefault();
    var message = {
      username: App.username,
      text: $('#message').val(),
      roomname: document.getElementById('roomSelect').value
    }
    Parse.create(message, function (data) {
      console.log('chatterbox: Message sent');
    });
  },

  roomSubmit : function (event) {
    var room = $('.addRoomText').val();
    RoomsView.renderRoom(room);
    Rooms.storage.push(room);
    $('.addRoomText').val('');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};