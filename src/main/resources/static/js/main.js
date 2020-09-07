//JS는 버전관리 어떻게 할까요..??

$(document).ready(function () {});

function popupClose() {
  $(".popup_section .popup_wrap").css({ opacity: "0", display: "none" });
  $("html").children(".popup_bg").remove();
}

function popupOpen(popName) {
  $("#" + popName)
    .css({ display: "block" })
    .animate({ opacity: "1" });

  if (!$(".popup_bg").length > 0) {
    $("html").append("<div class='popup_bg'></div>");
  }
}
