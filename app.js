function requestOfServer(){
    $.ajax({
        type: 'get',
        url: "http://localhost:8000/hello-world?info=Good-Morning-Vietnam"
    }).done(function(data){
        document.getElementById('developer').innerHTML = data.name
        document.getElementById('version').innerHTML = data.version
        document.getElementById('value_of_variable').innerHTML = data.value_of_variable_info
        document.getElementById('company_site').innerHTML = data.web_site_company

        $("#show-values").css('display','block')
    });
}