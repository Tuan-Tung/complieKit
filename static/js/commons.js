(function (t) {
    "use strict";
    t("#sidebarToggle, #sidebarToggleTop").on("click", function (o) {
        t("body").toggleClass("sidebar-toggled"),
            t(".sidebar").toggleClass("toggled"),
            t(".sidebar").hasClass("toggled") &&
                t(".sidebar .collapse").collapse("hide");
    });
})(jQuery);
