$(document).on('turbolinks:load', function() {
  //テンプレートリテラル記法
   function buildHTML(message){
    var addImage = (message.image !== null) ? `<img class = "image_size", src="${message.image}">` : ''
    // var addImage = '';
    // if (message.image.url) {
    //   addImage = `<img src="${message.image.url}" class="lower-message__image">`;
    // }
    var html = `
        <div class="message" data-message-id="${message.id}">
          <div class="upper-message" data-message-id="${message.id}">
            <div class="upper-message__user-name">${message.name}</div>
            <div class="upper-message__date">${message.date}</div>
          </div>
          <div class="lower-meesage">
            <p class="lower-message__content">
              ${message.content}
            </p>
            ${addImage}
          </div>
        </div>`;
    return html;
  }

  $('.new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
      url: location.href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
  })
    .done(function(message) {
      var html = buildHTML(message);
      $('.messages').append(html)
      $('.form__message').val('')
      $('.formsubmit').removeAttr('data-disable-with');
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('form')[0].reset();
    })
    .fail(function(message){
      alert('メッセージを入力してください');
  })
    return false;
 })
})
