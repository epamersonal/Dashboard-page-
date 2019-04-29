$(document).ready(function () {
    $("#clicker").click(function(){
        $('.dropout').show();
    });
    $('.unfollow').click(function(){
        $('.dropout').hide();
    });

});

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        console.log(response);
        var object = response.object;
        console.log(object);

        var output = '';
        for(var i =0; i<object.length; i++) {
            output += '<li>'+object[i].name+': '+object[i].type+', '+object[i].charact+', '+object[i].desc+', '+object[i].completion+', '+object[i].balance+', '+object[i].fee+', '+object[i].sum+'</li>';
        }
        document.getElementById('object').innerHTML = output;
    }
};
xhttp.open("GET", "object.json", true);
xhttp.send();
