//Code tweaked from stackoverflow's @Aravinth http://jsfiddle.net/W4P25/3/

$(document).ready(function () {
    $.datepicker.setDefaults({
        dateFormat: 'dd-mm-yy'
    });

    $(document).on("click", "#date1", function () {
        var viewportwidth = $(window).width();
        var datepickerwidth = $("#ui-datepicker-div").width();
        var leftpos = (viewportwidth - datepickerwidth) / 2;
        $("#ui-datepicker-div").css({
            left: leftpos,
            position: 'absolute'
        });
    });

    $("#date1").datepicker({
        onSelect: function () {
            alert("HAHA");
        }
    });
}

);