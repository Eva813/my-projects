function getLastThreeCharacter() {

  var value = $('.h-value').val();
  // let str = $('.h-value').length;
  let lastThree = value.slice(-3);
  $('.show').html(`最後三個字元是：${lastThree}`)
}

$('.submit').click(function (e) {
  // e.preventDefault();
  $('.h-value').html('');
  getLastThreeCharacter();
});
