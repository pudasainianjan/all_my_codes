var g = G$('John','Doe');
// g.greet().greet(true);
// g.setLang('en').greet().log().setLang('es').greet(true);

$('#login').click(function(){
    var loginGreetr = G$('John','Doe');
    // $('#logindiv').hide();
    loginGreetr.setLang($('#lang').val()).htmlGreeting('#greeting',false).log();
});