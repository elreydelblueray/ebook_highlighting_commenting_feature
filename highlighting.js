/**
 * Created by christianschneider on 27.06.17.
 */





$(function() {




    var $context = $(".context");
    var $log = $(".log");

    var $highlightedElements = [];


    console.log("test");
    //console.log(getCookie("serialized"));
    console.log(getCookie(1));



    var sandbox = document.getElementById('sandbox');


    var hltr = new TextHighlighter(sandbox),
        serialized;
    hltr.removeHighlights();


    //var stringedSerialized = "[[\"<span class=\\\"highlighted\\\" data-timestamp=\\\"1498570403422\\\" style=\\\"background-color: rgb(255, 255, 123);\\\" data-highlighted=\\\"true\\\"></span>\",\"r sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et acc\",\"1:3:45:1\",300,186]]";
    //console.log(stringedSerialized);
    //var unstringedSerialized = JSON.parse(stringedSerialized);
    //console.log(unstringedSerialized);

    loadJSON(function(response) {
        // Parse JSON string into object



        console.log("actual");
        console.log(response);
        hltr.deserializeHighlights(response);



    });



    $context.textHighlighter({
        "onAfterHighlight": function(arr, element) {
            $highlightedElements.push(element);
            //console.log($highlightedElements);



            serialized = hltr.serializeHighlights();


            document.cookie = "serialized=" + JSON.stringify(serialized);




        }
    });





/*
    document.getElementById("btnSerialize").onclick = function () {
        serialized = hltr.serializeHighlights();
        console.log(serialized);
        hltr.removeHighlights();
    };

    document.getElementById("btnDeserialize").onclick = function () {
        hltr.removeHighlights();

        var stringed = JSON.stringify(serialized);

        var unstringed = JSON.parse(stringed);
        //console.log(stringed);
        //console.log(unstringed);
        hltr.deserializeHighlights(unstringed);
    };
*/







});

