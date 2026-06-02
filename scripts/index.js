$(window).on("load resize", function() {
    if ($(window).innerWidth() < 600) {
        $("#searchBar").outerWidth(Math.max($("#navbar").innerWidth() - ($("#navbar a.me-1").outerWidth(true) * 4.5), ($(window).innerWidth() / 4.5)), true);
    } else {
        $("#searchBar").outerWidth(Math.min($("#navbar").innerWidth() - ($("#navbar a.me-1").outerWidth(true) * 4.5), ($(window).innerWidth() / 4.5)), true);
    }
});

$("#searchBar").keypress(function(e) { if (e.which == 13) { searchBlurbs(); } });
$("#searchIcon").click(function() { searchBlurbs(); } );

function searchBlurbs() {
    var searchText = new RegExp($("#searchBar").val(), 'gim');
    $(".blurb").each(function () {
        var currBlurb = $(this); var matched = false;
        $(this).find(".poemDetails").each(function () {
            if (searchText.test($(this).html())) {
                matched = true; return true;
            }
        });
        if (matched) {
            currBlurb.removeClass("d-none");
        } else {
            currBlurb.addClass("d-none");
        }
    });
}


$("#scrollToTop").click(function() {
    $("html").animate({ scrollTop: 0 }, 600);
});
$("#scrollToBottom").click(function() {
    $("html").animate({ scrollTop: document.body.scrollHeight }, 600);
});
