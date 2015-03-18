function($) {
    $.ajax({
        url: "home.html",
        context: document.body
    }).done(function () {
        $(this).addClass("done");
    });
}