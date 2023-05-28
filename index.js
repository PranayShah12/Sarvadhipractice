
function form_valid() {
    let name = document.form1.fname.value;
    if (name == "" || name == null) {
        document.getElementById("fmess").innerHTML = "Enter name";
        return false;
    } else if (!isNaN(name)) {
        document.getElementById("fmess").innerHTML = "Enter alphabets only";
        return false;
    }

    let email = document.form1.mail.value;
    if (email == "") {
        document.getElementById("emess").innerHTML = "Enter Email address";
        return false;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        document.getElementById("emess").innerHTML = "You have entered an invalid email address!";
        return false;
    }

    let date = document.form1.myDate.value;
    let actualdate = new Date();
    let realdate = `${actualdate.getFullYear()}-${actualdate.getMonth() + 1 < 10 ? `0${actualdate.getMonth() + 1}` : actualdate.getMonth() + 1}-${actualdate.getDate() < 10 ? `0${actualdate.getDate()}` : actualdate.getDate()}`;
    if (date == "") {
        document.getElementById("dmess").innerHTML = "Select a date";
        return false;
    } else if (date < realdate) {
        document.getElementById("errmess").innerHTML = "Invalid Date";
        return false;
    }

    let fromTime = document.form1.fromtime.value;
    if (fromTime == "") {
        document.getElementById("ftmess").innerHTML = "Select from time";
        return false;
    }

    let toTime = document.form1.totime.value;
    if (toTime == "") {
        document.getElementById("totmess").innerHTML = "Select to time";
        return false;
    } else if (toTime <= fromTime) {
        document.getElementById("totmess").innerHTML = "To time should be greater than From time";
        return false;
    }

    let description = document.form1.despval.value;
    if (description == "") {
        document.getElementById("despmess").innerHTML = "Enter Description";
        return false;
    }

    // Form is valid, allow submission
    return true;
}


function on_change() {
    let name = document.form1.fname.value;
    if (name != "" && name != null) {
        document.getElementById("fmess").innerHTML = "";
        return false;
    } else if (isNaN(name)) {
        document.getElementById("fmess").innerHTML = "";
        return false;
    }
}
function on_change() {
    let name = document.form1.fname.value;
    if (name != "" || name != null) {
        document.getElementById("fmess").innerHTML = "";
    } else if (isNaN(name)) {
        document.getElementById("fmess").innerHTML = "";
    }
    return true; // Return true when the input is valid
}

function mailchange() {
    let email = document.form1.mail.value;
    if (email != "") {
        document.getElementById("emess").innerHTML = "";
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        document.getElementById("emess").innerHTML = "";
    }
    return true; // Return true when the input is valid
}

function datechange() {
    let date = new Date(document.form1.myDate.value);
    let currentDate = new Date(); // Get current date

    if (date.getTime() >= currentDate.getTime()) {
        document.getElementById("dmess").innerHTML = "";
        document.getElementById("errmess").innerHTML = "";
    } else {
        document.getElementById("dmess").innerHTML = "Invalid date";
        document.getElementById("errmess").innerHTML = "";
        return false; // Return false when the date is invalid
    }
    return true; // Return true when the input is valid
}

function f_timechange() {
    let ftime = document.form1.fromtime.value;
    if (ftime != "") {
        document.getElementById("ftmess").innerHTML = "";
    }
    return true; // Return true when the input is valid
}


function to_timechange() {
    let fromTime = document.form1.fromtime.value;
    let toTime = document.form1.totime.value;

    if (toTime !== "" && fromTime !== "") {
        if (toTime <= fromTime) {
            document.getElementById("totmess").innerHTML = "To time should be greater than From time";
            return false;
        } else {
            document.getElementById("totmess").innerHTML = "";
        }
    }

    return true;
}


function desp_change() {
    let desp = document.form1.despval.value;
    if (desp != "") {
        document.getElementById("despmess").innerHTML = "";
    }
    return true;
}
// const newform = document.getElementById('app_book');
// console.log(newform)



