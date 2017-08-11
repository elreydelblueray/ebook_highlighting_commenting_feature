/**
 * Created by christianschneider on 27.06.17.
 */

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}



function setCookieKeyValuePair(myKey, myVal) {
    var entry = myKey + "=" + myVal;
    document.cookie = entry;
}

function getCookiesAsArray() {
    var cookiesAsString = document.cookie;
    var elements = cookiesAsString.split('; ');
    var keyValuePairs = {};
    for (var i = 0; i < elements.length; i++) {
        var currentElement = elements[i];
        var currentKeyValuePair = currentElement.split('=');
        keyValuePairs[currentKeyValuePair[0]] = currentKeyValuePair[1];
    }
    return keyValuePairs;
}