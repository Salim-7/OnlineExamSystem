

$(document).ready(function (){

    $('#btnLogin').click(function () {
    
    
        $.ajax({

            url: '/token',
            method: 'POST',
            contentType:'appliaction/json',
            data: {

                UserName: $('#TextUserName').val(),
                PassWord: $('#TextPassWord').val(),
                grant_type:'password',
            },
            success: function (response) {

                sessionStorage.setItem('accessToken', response.access_token);
                window.location.href = "data.html"

            },
            error: function (jqXHR) {
                $('#divErrorText').text(jqXHR.responseText);
                $('#divError').show('fade');
            }



        });
    
    
    
    
    });




};