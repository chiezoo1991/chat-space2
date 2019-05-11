$(document).on('turbolinks:load', function() {
   function buildHTML(message){
    var content = message.content? `${message.content}` : "";
    var addImage = (message.image.url !== null) ? `<img class = "image_size", src="${message.image.url}">` : ''
     var html = `
        <div class="message" data-id="${message.id}">
         <div class="upper-message">
            <div class="upper-message__user-name">${message.name}</div>
            <div class="upper-message__date">${message.date}</div>
          </div>
          <div class="lower-meesage">
            <p class="lower-message__content">
              ${content}
            </p>
            ${addImage}
          </div>
        </div>`;
    return html;
  }

  $('.new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
  })
    .done(function(message) {
      var html = buildHTML(message);
      $('.formsubmit').removeAttr('data-disable-with');
      $('form')[0].reset();
      var speed = 500;
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(message){
      alert('メッセージを入力してください');
  })
    return false;
})
var reloadMessages = function() {
   last_message_id = $('.message:last').data('id');
   if (last_message_id === undefined) {
   last_message_id =0 ;
   }
   group_id = $('.messages').data('group');
   url = '/groups/' + group_id + '/api/messages';
   if (group_id === undefined) {
   last_message_id =0
   }
    $.ajax( {
      url: url,
      type: 'GET',
      data: {id: last_message_id},
      dataType: 'json',
    })
    .done(function(data) {
      $.each(data, function(i, message) {
        var insertHTML = buildHTML(message);
        $('.messages').append(insertHTML);
        $(".messages").animate({scrollTop: $(".messages")[0].scrollHeight}, "fast");
      })
      })
  }
    setInterval(reloadMessages, 5000);
});
