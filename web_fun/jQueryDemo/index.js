$(document).ready(function(){
  $('#btn_special').click(function(){
    let result = $('h2').text();
    console.log(result,result);
    console.log(typeof(result));
    $('p.special').text(result);
  })
})

