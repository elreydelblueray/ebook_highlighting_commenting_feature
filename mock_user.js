/**
 * Created by christianschneider on 27.06.17.
 */


createMockUser();
console.log(getUserId());


function createMockUser () {


    if (document.cookie.indexOf("wordpress_logged_in") !== -1) {
        // ok
    }
    else {
        document.cookie = "wordpress_logged_in_63198098babbe7ddc65212affd04c48a=753130363736323602%40uzh.ch%7C14987";
    }



}





function getUserId () {


    var completeCookie = document.cookie;


    if ()


    var cookiesAsArray = completeCookie.split("%40uzh");
    cookiesAsArray = cookiesAsArray[0];
    cookiesAsArray = cookiesAsArray.split("=");

    var userId = cookiesAsArray[cookiesAsArray.length-1];
    return userId;
}
