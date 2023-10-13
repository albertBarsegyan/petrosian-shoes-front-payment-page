function fn_selectfocuschange() {
    window.focus();
    //document.getElementById('iPAN').focus();
}

// end tooltip
function checkKeys2() {
    // we have to remove this function in future
    //var code = event.keyCode;
    return true;  //((code >= 65 && code <= 90) || (code >= 48 && code <= 57) || code == 189 || code == 8 || code == 46 || code == 45 || code == 37 || code == 39 || code == 9 || code == 32);
}
function checkKeys() {
    // we have to remove this function in future
    //var code = event.keyCode;
    return true; //(((code >= 48 && code <= 57) || code == 189 || code == 8 || code == 46 || code == 45 || code == 37 || code == 39 || (code >= 96 && code <= 105) || code == 9) && !event.shiftKey);
}
function isValidData(showerrors) {
   

    showerrors = typeof showerrors !== 'undefined' ? showerrors : false;
    isValid = true; // TODO: change to var isValid
    if (document.forms.PaymentForm.TEXT.value == "") {
        isValid = false;
        if (showerrors) {
            document.getElementById("error_clientname").style.display = "";
            document.forms.PaymentForm.TEXT.className = "clientname_input error";
        }
    }
    else {
        document.getElementById("error_clientname").style.display = "none";
        document.forms.PaymentForm.TEXT.className = "clientname_input";
    }
    pan = new String(document.forms.PaymentForm.$PAN.value);
    if (pan.length != 16 && pan.length != 13) {
        isValid = false;
        if (showerrors) {
            document.getElementById("error_pan").style.display = "";
            document.forms.PaymentForm.$PAN.className = "cardnumber_input error";
        }
    }
    else {
        document.getElementById("error_pan").style.display = "none";
        document.forms.PaymentForm.$PAN.className = "cardnumber_input";
    }

    var eMonth = document.forms.PaymentForm.MM.options;
    var month = eMonth[eMonth.selectedIndex].value;
    var eYear = document.forms.PaymentForm.YYYY.options;
    var year = eYear[eYear.selectedIndex].value;
    if (month === '-1' || year === '-1') {
        isValid = false;
        if (showerrors) {
            document.getElementById("error_expiredate").style.display = "";
            document.forms.PaymentForm.MM.className = "error";
            document.forms.PaymentForm.YYYY.className = "error";
        }
    }
    else {
        document.getElementById("error_expiredate").style.display = "none";
        document.forms.PaymentForm.MM.className = "";
        document.forms.PaymentForm.YYYY.className = "";
    }

    cvc = new String(document.forms.PaymentForm.$CVC.value);
    if (cvc.length < 3) {
        isValid = false;
        if (showerrors) {
            document.getElementById("error_cvv").style.display = "";
            document.forms.PaymentForm.$CVC.className = "cvv_input error";
        }
    }
    else {
        document.getElementById("error_cvv").style.display = "none";
        document.forms.PaymentForm.$CVC.className = "cvv_input";
    }
    //document.forms.PaymentForm.SendPayment2.disabled = isValid;
    return (isValid);
}
function setExpiry() {
    if (isValidData(true)) {
        showloader();
        $.fn.payment("sendPayment");// send payment
        //document.forms.PaymentForm.submit();
    } else {
        return false;
    }

}

function showloader() {
    document.getElementById("div_loader").style.display = "";
}
