
$(function() {




    var $context = $(".context");
    var $log = $(".log");

    var $highlightedElements = [];


    console.log("test");
    //console.log(getCookie("serialized"));
    console.log(getCookie(1));



    var content = document.getElementById('content');



    var hltr = new TextHighlighter(content),
        serialized;
    hltr.removeHighlights();


    loadJSON(function(response) {
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

