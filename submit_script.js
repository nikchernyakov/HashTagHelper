window.onload = function () {
   var submitButton;

   submitButton = document.getElementById("submit_button");
   submitButton.onclick = onSubmitButtonClicked;
};

function onSubmitButtonClicked() {
    // Get all checked fields
    var checkedFieldsString = getCheckedFields();
    // Set checked fields string in textarea
    var textArea = document.getElementById("textarea");
    textArea.innerHTML = checkedFieldsString;
}

function getCheckedFields() {
    var checkedFieldsString = "";

    var checkboxGroup = document.getElementsByName("checkbox");
    checkboxGroup.forEach(function (checkbox) {
        if(checkbox.checked) checkedFieldsString += checkbox.value.toString() + " ";
    });

    return checkedFieldsString;
}