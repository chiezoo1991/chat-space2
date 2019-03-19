$(function(){

  //テンプレートリテラル記法
   function buildHTML(message){
    var addImage = '';
    if (message.image.url) {
      addImage = `<img src="${message.image.url}" class="lower-message__image">`;
    }
    // var html = `
    //   <div class="upper-message">
    //       <div class="upper-message__user-name">${message.user.name}</div>
    //     <div class="upper-message__date">${message.created_at.strftime}</div>
    //     </div>

    //     <div class="lower-message">
    //       <p class="lower-message__content">${message.content}</p>
    //       <p class="">
    //       ${message.content}
    //       </p>
    //         ${addImage}
    //     </div>
    //   </div>`;
    // return html;
    var html = `
        <div class="chat__contents__content" data-message-id="${message.id}">
          <div class="chat__contents__content-top" data-message-id="${message.id}">
            <div class="chat__contents__content-top__user">${message.name}</div>
            <div class="chat__contents__content-top__timestamp">${message.date}</div>
          </div>
          <div class="chat__contents__content__text">
            <p class="chat__contents__content__text">
              ${message.content}
            </p>
            ${addImage}
          </div>
        </div>`;
    return html;
  }

  $('.form__message').on('submit', function(e){
    var formData = new FormData(this);
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
    .done(function(message){
      var html = buildHTML(message);
      $('.messages').append(html)
      $('.form_message').val('')
      $('.messeages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('メッセージを入力してください');
  })
 })
})
