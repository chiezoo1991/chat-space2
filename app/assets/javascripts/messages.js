$(document).on('turbolinks:load', function() {
  //テンプレートリテラル記法
   function buildHTML(message){
    // 三項演算子で記載しました
    var addImage = (message.image.url !== null)? `<img src="${message.image.url}">`:'';
    }
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
      // resetメソッド使用
      $('.form').reset(message);
      $('.formsubmit').removeAttr('data-disable-with');
      $('.messeage').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      console.log(html);
    })
    .fail(function(message){
      alert('メッセージを入力してください');
  })
 })
