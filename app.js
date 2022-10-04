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
    $.ajax({
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
    }).done(function (response) {
        if (response.success) {
            $("#success-record-msg").css('display','block')

            $("#name").val('')
            $("#lastname").val('')
            $("#age").val('')
        }else{
            console.log(response)
            alert('deu ruim')
        }
    });
}

function submitDataOfCar(){
    const nameOfCar = $("#nomeCarro").val()
    const modelOfCar = $("#modelo").val()
    $.ajax({
        "url": "http://localhost:8000/carinsert",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json; charset=UTF-8"
        },
        "data": JSON.stringify({
            carName:nameOfCar,
            model:modelOfCar
        }),
    }).done(function (response) {
        if (response.success) {
            $("#success-record-msg").css('display','block')

            $("#nomeCarro").val('')
            $("#modelo").val('')
        }else{
            console.log(response)
            alert('deu ruim')
        }
    });
}

function closeSuccessMsg(){
    $("#success-record-msg").css('display','none')
}
function closeFailureMsg(){
    $("#error-record-msg").css('display','none')
}