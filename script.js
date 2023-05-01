let mobileNav = $(".nav__list .nav-dropdown-link");
mobileNav.each(function () {
  $(this).click(function () {
    $(this).find(".subnav-section").addClass("translate-0");
  });
});

let popupBackButton = $(".popup-back-button");
popupBackButton.each(function () {
  $(this).click(function () {
    if ($(".subnav-section").hasClass("translate-0")) {
      $(this).closest(".subnav-section").removeClass("translate-0");
    }
  });
});

// dashboard tabs

const dashBoardTabs = $(".sst-dashboard-body .tab__list .tab__item");
const dashBoardContents = $(
  ".sst-dashboard-footer .tab-content-wrapper .tab__content"
);
dashBoardTabs.each(function () {
  $(this).click(function () {
    const targetId = $(this).data("target");
    dashBoardTabs.removeClass("active");
    $(this).addClass("active");
    dashBoardContents.removeClass("show");
    $(`#${targetId}`).addClass("show");
  });
});
