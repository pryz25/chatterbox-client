var MessageView = {

  render: _.template(`
      <div class="chat <%-roomname%>">
        <button type='button' class="username"><%-username%></button>
        <div><%-text%></div>
      </div>
    `)

};