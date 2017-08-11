
var base_url='http://dev.schneiderchristian.ch/eskript_backend/api.php?db=highlighting&';



// GET

function getHighlighting(email_address, password_hash, callback) {
    console.log("entered");
    var url = base_url + 'function=getHighlighting&email_address=' + email_address + '&password_hash=' + password_hash;
    console.log(url)

    $.ajax({url: url,
        success: function(result){
            var highlighting = JSON.parse(result);

            console.log("got highlighting");

            callback(highlighting);
            return highlighting;
        },
        error: function () {
            console.log("failed getting highlighting");
        }
    });

}




// POST


function postHighlighting(email_address, password_hash, highlighting) {
    var url = base_url + 'function=postHighlighting&email_address=' + email_address + '&password_hash=' + password_hash;
    $.ajax({type: "POST",
        url: url,
        data:highlighting,
        success: function(result){
            var highlighting = JSON.parse(result);
            return highlighting;
        }
    });
}
