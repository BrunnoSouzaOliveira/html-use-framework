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
            last_name:lastNameOfUser,
            age: ageOfUser
        }),
    }).done(function (response) {
        if (response.success) {
            $("#error-record-msg").css('display','none')
            
            $("#success-record-msg").css('display','block')

            $("#name").val('')
            $("#lastname").val('')
            $("#age").val('')
        }else{
            $("#success-record-msg").css('display','none')
            
            let errorMsg;
            let errorWidth = '350px'

            if(response.missingAttribute === 'name'){
                errorMsg = 'O campo de nome está ausente, favor preencher'
                errorWidth = '415px'
            }
            if(response.missingAttribute === 'last_name'){
                errorMsg = 'O campo de sobrenome está ausente, favor preencher'
                errorWidth = '435px'
            }
            if(response.missingAttribute === 'age'){
                errorMsg = 'O campo de idade está ausente, favor preencher'
                errorWidth = '415px'
            }

            $("#error-record-msg").css('display','block')
            $("#content-error-record-msg").html(errorMsg)
            $("#error-record-msg").css('width',errorWidth)
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
            $("#error-record-msg").css('display','block')
        }
    });
}

function submitDataOfUserTrabalho(){
    const nomeOfTheUser = $("#nome").val()
    const sobrenomeOfTheUser = $("#sobrenome").val()
    const idadeOfTheUser = $("#idade").val()
    const emailOfTheUser = $("#email").val()
    const telefoneOfTheUser = $("#telefone").val()
    $.ajax({
        "url": "http://localhost:8000/insert-on-interface",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json; charset=UTF-8"
        },
        "data": JSON.stringify({
            nomeUsuario:nomeOfTheUser,
            sobrenomeUsuario:sobrenomeOfTheUser,
            idade:idadeOfTheUser,
            email:emailOfTheUser,
            telefone:telefoneOfTheUser
        }),
    }).done(function (response) {
        console.log(response);
        if (response.success) {
            $("#success-record-msg").css('display','block')

            $("#nome").val('')
            $("#sobrenome").val('')
            $("#idade").val('')
            $("#email").val('')
            $("#telefone").val('')
        }else{
            let errorMsg;
            let errorWidth = '350px'

            if(response.missingAttribute === 'nomeUsuario'){
                errorMsg = 'O campo de nome está ausente, favor preencher'
                errorWidth = '415px'
            }
            if(response.missingAttribute === 'sobrenomeUsuario'){
                errorMsg = 'O campo de sobrenome está ausente, favor preencher'
                errorWidth = '435px'
            }
            if(response.missingAttribute === 'idade'){
                errorMsg = 'O campo de idade está ausente, favor preencher'
                errorWidth = '415px'
            }
            if(response.missingAttribute === 'email'){
                errorMsg = 'O campo de email está ausente, favor preencher'
                errorWidth = '415px'
            }
            if(response.missingAttribute === 'telefone'){
                errorMsg = 'O campo de telefone está ausente, favor preencher'
                errorWidth = '415px'
            }

            $("#error-record-msg").css('display','block')
            $("#content-error-record-msg").html(errorMsg)
            $("#error-record-msg").css('width')
        }
    });
}

function closeSuccessMsg(){
    $("#success-record-msg").css('display','none')
}
function closeFailureMsg(){
    $("#error-record-msg").css('display','none')
}