$(document).ready(function () {
    $("#horoscope").change(function () {
        $.get("../ajax/get_horoscope.aspx", { astroId: $(this).val() }, function (data) {
            $("dl.horoscopes").html(data);
            $(".horoscopes dt span").click(function () {
                var id = $(this).attr("id").replace("dt", "dd");
                $(this).css("background-color", "#FFFFFF").siblings("span").css("background-color", "#C0C0C0");
                $("#" + id).show().siblings("dd").hide();
            });
        });
    });

    $(".horoscopes dt span").click(function () {
        var id = $(this).attr("id").replace("dt", "dd");
        $(this).css("background-color", "#FFFFFF").siblings("span").css("background-color", "#C0C0C0");
        $("#" + id).show().siblings("dd").hide();
    });
    bind_month();
    bind_menu();
    bind_nav();

    $("#ddlArea").change(function () {
        $("#ddlCity").load("../ajax/getweathercity.aspx@area=" + escape($("#ddlArea").val()))
    });
    $("#btn_show_weather").click(function () {
        $.get("../ajax/get_weather_by_city.aspx@Id=" + $("#ddlCity").val(), function (data) { $("#weather_dl").html(data); });
    });
})

function bind_nav() {

    $("#nav a").click(function () {
        var id = $(this).attr("id");
        var date = $("#ddl_year").val() + "-" + $("#ddl_month").val() + "-1";
        if (id != null) {
            $.get("../ajax/get_calendar_head.aspx", { date: date, keyword: id }, function (data) {
                $("#head_dl").html(data);
                bind_menu();
            });
            $.get("../ajax/get_month.aspx", { date: date, keyword: id }, function (data) {
                $("#month_detail").html(data);
                bind_month();
            });
            $.get("../ajax/get_huangli.aspx", { date: date, keyword: id }, function (data) {
                $("#huangli_dl").html(data);
            });            
        }        
    });
}

function bind_month() {
    $(".div_form table td").click(function () {
        if ($(this).attr("id") != null) {
            $(".div_form table td").css("background-color", "#FFFFFF");
            $(this).css("background-color", "#EEEEEE");
            $.get("../ajax/get_calendar_head.aspx@date=" + $(this).attr("id"), function (data) {
                $("#head_dl").html(data);
                bind_menu();
            });
            $.get("../ajax/get_huangli.aspx@date=" + $(this).attr("id"), function (data) {
                $("#huangli_dl").html(data);
            });
        }
    });
}

function bind_menu() {
    var date = $("#ddl_year").val() + "-" + $("#ddl_month").val() + "-1";
    $("#ddl_year,#ddl_month").change(function () {
        date = $("#ddl_year").val() + "-" + $("#ddl_month").val() + "-1";
        $.get("../ajax/get_calendar_head.aspx@date=" + date, function (data) {
            $("#head_dl").html(data);
            bind_menu();
        });
        $.get("../ajax/get_month.aspx@date=" + date, function (data) {
            $("#month_detail").html(data);
            bind_month();
        });
        $.get("../ajax/get_huangli.aspx@date=" + date, function (data) {
            $("#huangli_dl").html(data);
        });
    });
}