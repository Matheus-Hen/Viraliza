$('#youtube').click(function (e) { 
    e.preventDefault();
    $('#youtube').css('display', 'none');
    $('iframe').css('display', 'block');
});