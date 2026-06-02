$(window).on("load resize", function() {
    if ($(window).innerWidth() < 600) {
        $("#searchBar").outerWidth(Math.max($("#navbar").innerWidth() - ($("#navbar a.me-1").outerWidth(true) * 4.5), ($(window).innerWidth() / 4.5)), true);
    } else {
        $("#searchBar").outerWidth(Math.min($("#navbar").innerWidth() - ($("#navbar a.me-1").outerWidth(true) * 4.5), ($(window).innerWidth() / 4.5)), true);
    }
});
