$(document).on('turbolinks:load', function() {
   function buildHTML(message){
    var addImage = (message.image.url !== null) ? `<img class = "image_size", src="${message.image.url}">` : ''
     var html = `
        <div class="message" data-messageId="${message.id}" data-groupId="${message.group_id}">
         <div class="upper-message" data-messageId="${message.id}">
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
    var last_message_id = $('.message').last().attr("data-messageId");
    var groupId = $('.message').last().attr("data-groupId");
    $.ajax( {
      url: `/groups/`+ groupId +`/api/messages`,
      type: 'GET',
      data: {id: last_message_id},
      dataType: 'json',
    })
    .done(function(data) {
      $.each(data, function(i, message) {
        var insertHTML = buildHTML(message);
        $('.messages').append(insertHTML);
        $(".messages").animate({scrollTop: $(".messages")[0].scrollHeight+100}, "fast");
      })
      })
  }
    setInterval(reloadMessages, 5000);
});
