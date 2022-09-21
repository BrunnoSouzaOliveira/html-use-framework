function requestOfServerGet(){
    $.ajax({
        type: 'get',
        url: "http://localhost:8000/hello-world?info=Getting"
    }).done(function(data){
        document.getElementById('developer').innerHTML = data.name
        document.getElementById('version').innerHTML = data.version
        document.getElementById('value_of_variable').innerHTML = data.value_of_variable_info
        document.getElementById('company_site').innerHTML = data.web_site_company

        $("#show-values").css('display','block')
    });
}

function requestOfServerPost(){
    $.ajax({
        type: 'post',
        url: "http://localhost:8000/hello-rota?info=Posting"
    }).done(function(data){
        document.getElementById('developer').innerHTML = data.name
        document.getElementById('version').innerHTML = data.version
        document.getElementById('value_of_variable').innerHTML = data.value_of_variable_info
        document.getElementById('company_site').innerHTML = data.web_site_company

        $("#show-values").css('display','block')
    });
}

function submitDataOfUser(){
    const nameOfUser = $("#name").val()
    const lastNameOfUser = $("#lastname").val()
    const ageOfUser = $("#age").val()
    const settings = {
        "url": "http://localhost:8000/insert-data",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json; charset=UTF-8"
        },
        "data": JSON.stringify({
          name:nameOfUser,
          lastName:lastNameOfUser,
          age: ageOfUser
        }),
      };
      
      $.ajax(settings).done(function (response) {
      });

    console.log(nameOfUser)
    console.log(lastNameOfUser)
    console.log(ageOfUser)
}