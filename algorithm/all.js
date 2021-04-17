


function getLastCharacter() {

  var value = $('.h-value').val();
  // let str = $('.h-value').length;
  let last = value[value.length - 1];
  $('.show').html(`最後一個字元是：${last}`)
}

$('.last-one').click(function (e) {
  // e.preventDefault();
  $('.h-value').html('');
  getLastCharacter();
});



function getLastThreeCharacter() {

  var value = $('.h-value').val();
  // let str = $('.h-value').length;
  let lastThree = value.slice(-3);
  $('.show').html(`最後三個字元是：${lastThree}`)
}

$('.last-three').click(function (e) {
  // e.preventDefault();
  $('.h-value').html('');
  getLastThreeCharacter();
});

///將單字轉小寫///////
//用除錯來看看
function wordLowerCase() {
  var value = $('.h-value').val();
  let ans = '';
  for (let i = 0; i < value.length; i++) {
    let code = value.charCodeAt(i);
    console.log(code);
    if (code >= 65 && code <= 90) {
      ans += String.fromCharCode(code + 32);

    } else {
      ans += value[i];
    }
  }
  $('.show').html(`小寫字母為：<br>${ans}`)
}

$('.trans-sm').click(function (e) {
  // e.preventDefault();
  $('.h-value').html('');
  wordLowerCase();
});



//////印出星星  三角形////////////


function starsRepeat() {

  let n = 5;
  let s = '';

  for (let i = 0; i <= n; i++) {
    let stars = '';
    for (let j = 0; j < i; j++) {
      stars += '*';
      // console.log(stars);
    }
    s += stars + '<br>';
  }

  $('.show').html(`三角形為：<h4>${s}</h4>`)
};


$('.stars').click(function () {
  // e.preventDefault();
  $('.h-value').html('');
  starsRepeat();
});

//////印出星星  倒三角形////////////
function starsRepeat2() {

  let n = 5;
  let s = '';

  for (let i = 5; i <= n; i--) {
    let stars = '';
    for (let j = 0; j < i; j++) {
      stars += '*';
      // console.log(stars);
    }
    s += stars + '<br>';
  }

  $('.show').html(`倒三角為：<h4>${s}</h4>`)
};

$('.stars2').click(function () {
  // e.preventDefault();
  $('.h-value').html('');
  starsRepeat2();
});
