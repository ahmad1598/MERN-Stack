
let travelForm = document.travelForm;

travelForm.addEventListener("submit",function(e){
    e.preventDefault();

    let firstName = travelForm.firstName.value;
    let lastName = travelForm.lastName.value;
    let age = travelForm.age.value;
    let gender = travelForm.gender.value;
    let location = travelForm.location.value;
    let dietary = travelForm.dietary;

    let checkBoxArray = [];
    for(let i = 0 ; i < dietary.length; i++){
        if(dietary[i].checked){
            checkBoxArray.push(dietary[i].value)
        }
    }

    alert(`First Name: ${firstName} \nLast Name: ${lastName}\nAge: ${age}\nGender: ${gender}Location:${location}\nDietary restriction: ${checkBoxArray}`);
});
