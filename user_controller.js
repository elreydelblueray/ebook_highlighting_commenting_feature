
var base_url='http://dev.schneiderchristian.ch/eskript_backend/api.php?db=user&';



// GET

function getABC() {
    console.log("acb");

}

function getSpecificUser(email_address, password_hash, callback) {
    console.log("entered");
    var url = base_url + 'function=getSpecificUser&email_address=' + email_address + '&password_hash=' + password_hash;
    console.log(url)

    $.ajax({url: url,
        success: function(result){
            var user = JSON.parse(result);

            console.log(user);
            console.log("got user");

            callback(user);
            return user;
        },
        error: function () {
            console.log("failed getting specific user");
        }
    });

}




function getSubUsers(email_address, password_hash) {
    // ToDo
}

function userExists(email_address) {
    var url = base_url + 'function=userExists&email_address=' + email_address;
    $.ajax({url: url,
        success: function(result){
            var userExists = JSON.parse(result);
            //console.log(userExists);
            return userExists;
        }
    });
}

function userCredentialsAreValid(email_address, password_hash, callback) {
    //console.log(email_address);
    //console.log(password_hash);
    var url = base_url + 'function=userCredentialsAreValid&email_address=' + email_address + '&password_hash=' + password_hash;
    $.ajax({url: url,
        success: function(result){
            var userIsValid = JSON.parse(result);
            //console.log(userIsValid);
            callback(userIsValid);
        }
    });
}


// POST


function addUser(email_address, password_hash) {
    var url = base_url + 'function=addUser&email_address=' + email_address + '&password_hash=' + password_hash;
    $.ajax({type: "POST",
        url: url,
        success: function(result){
            var user = JSON.parse(result);
            console.log(user);
            return user;
        }
    });
}

function addSubUser(admin_email_address, admin_password_hash, sub_email_address, sub_password_hash) {
    // ToDo
}

function recoverAccount(email_address) {
    var url = base_url + 'function=recoverAccount&email_address=' + email_address;
    $.ajax({type: "POST",
        url: url,
        success: function(result){
            //console.log(1);
            return 1;
        }
    });
}

function changePassword(email_address, old_password_hash, new_password_hash) {
    // db=user&function=changePassword&email_address=bce@cde.ch&old_password_hash=d5197d93c063a2b1e22d1630a39b7aef&new_password_hash=abc
    var url = base_url + 'function=changePassword&email_address=' + email_address + '&old_password_hash=' + old_password_hash + '&new_password_hash=' + new_password_hash;
    $.ajax({type: "POST",
        url: url,
        success: function(result){
            var user = JSON.parse(result);
            console.log(user);
            return user;
        }
    });
}

function changeProfile(email_address, password_hash, company_name, location, number_of_employees, area) {
    // db=user&function=changeProfile&email_address=abc@cde.ch&password_hash=d5197d93c063a2b1e22d1630a39b7aef&company_name=Big Boss AG&location=ABC Strasse 15, Schmerikon&number_of_employees=778&area=85614
    var url = base_url + 'function=changeProfile&email_address=' + email_address + '&password_hash=' + password_hash + '&company_name=' + company_name + '&location=' + location + '&number_of_employees=' + number_of_employees + '&area=' + area;
    $.ajax({type: "POST",
        url: url,
        success: function(result){
            var user = JSON.parse(result);
            //console.log(user);
            return user;
        }
    });
}