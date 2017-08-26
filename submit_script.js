window.onload = function () {
    var submitButton,
        cancelButton,
        copyButton;

    submitButton = document.getElementById("submit_button");
    submitButton.onclick = onSubmitButtonClicked;

    cancelButton = document.getElementById("cancel_button");
    cancelButton.onclick = onCancelButtonClicked;

    copyButton = document.getElementById("copy_button");
    copyButton.onclick = onCopyButtonClicked;
};

function onSubmitButtonClicked() {
    // Get all checked fields
    var checkedFieldsString = getCheckedFields();
    // Set checked fields string in textarea
    var textArea = getTextArea();
    textArea.innerHTML = checkedFieldsString;
}

function onCancelButtonClicked() {
    var checkboxGroup = getCheckboxGroup();
    checkboxGroup.forEach(function (checkbox) {
        if(checkbox.checked) checkbox.checked = false;
    });

    var textArea = getTextArea();
    textArea.innerHTML = "";
}

function onCopyButtonClicked() {
    var textArea = getTextArea();
    textArea.select();

    document.execCommand('copy');
}

function getTextArea() {
    return document.getElementById("textarea");
}

function getCheckboxGroup() {
    return document.getElementsByName("checkbox");
}

function getCheckedFields() {
    var checkedFieldsString = "";

    var checkboxGroup = getCheckboxGroup();
    checkboxGroup.forEach(function (checkbox) {
        if(checkbox.checked) checkedFieldsString += checkbox.value.toString() + " ";
    });

    return checkedFieldsString;
}
