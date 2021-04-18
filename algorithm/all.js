


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
    //console.log(code);
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

  for (let i = 1; i <= n; i++) {

    let stars = '';
    for (let j = 1; j <= i; j++) {
      stars += '*';

      // console.log(stars);
    }
    s += stars + '<br>';
  }

  $('.show').html(`直角三角形為：<h4>${s}</h4>`)
};


$('.stars').click(function () {
  // e.preventDefault();
  $('.h-value').html('');
  $('.show').removeClass('diamond');
  starsRepeat();
});

//////印出星星  倒三角形////////////
function starsRepeat2() {

  let n = 6;
  let s = '';

  for (let i = 6; i > 0; i--) {
    let stars = '';

    for (let k = 0; k < i - 1; k++) {
      stars += '*';
    }
    s += stars + '<br>';



  }


  $('.show').html(`倒直角三角形為：<h4>${s}</h4>`)
};

$('.stars2').click(function () {
  // e.preventDefault();
  $('.h-value').html('')
  $('.show').removeClass('diamond');
  starsRepeat2();
});


///印出菱形

function printDiamond() {
  let n = 6;
  let s = '';
  for (let i = 1; i <= n; i++) {
    let space = n - i;
    for (let j = 0; j < space; j++) {
      s += '';//空白
    }

    let starNum = 2 * i - 1;
    for (let k = 0; k < starNum; k++) {
      s += '*';
    }
    s += '<br>';
  }


  ///

  for (let i = n - 1; i >= 0; i--) {
    let space = n - i;
    for (let j = 0; j < space; j++) {
      s += '';
    }
    let starNum = 2 * i - 1;
    for (let k = 0; k < starNum; k++) {
      s += '*';
    }
    s += '<br>'
  }

  $('.show').html(`菱形為：<h4>${s}</h4>`).addClass('diamond')
}

$('.stars3').click(function () {
  // e.preventDefault();
  $('.h-value').html('');
  printDiamond();
});
