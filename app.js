////////////////////////////////////////// -JQUERY- //////////////////////////////////////////////////// 

$(document).ready(function () {
    //------------------- Menu ----------------------//
    $(".menu-vector").click(function () {
        $(".menu-open").css("display", "block");
        $(".menu-vector").css("display", "none");
    });
    $(".fas.fa-plus").click(function () {
        $(".menu-open").css("display", "none");
        $(".menu-vector").css("display", "block");
    });
    $(".list-item").click(function () {
        $(".menu-vector").css("display", "block");
        $(".menu-open").css("display", "none");
    });

    // ------------------ Form Next Btn---------------------//
    $(".next-btn-form").click(function () {
        $(".form-right").css("display", "none");
        $(".form-right1,.tick1").css("display", "block");
        $(".list-text-1,.list-text-2").css("color", "white");
    });
    $(".next-btn-1").click(function () {
        $(".form-right, .form-right1").css("display", "none");
        $(".form-right2,.tick1,.tick2").css("display", "block");
        $(".list-text-1,.list-text-2,.list-text-3").css("color", "white");
    });
    $(".next-btn-form-calendar").click(function () {
        $(".form-right, .form-right1, .form-right2").css("display", "none");
        $(".form-right3,.tick1,.tick2,.tick3,.list-text-4").css("display", "block");
        $(".list-text-1,.list-text-2, .list-text-3").css("color", "white");
    });
    $(".next-btn-form-contact").click(function () {
        $(".form-right, .form-right1, .form-right2, .form-right3").css("display", "none");
        $(".form-right4,.tick1,.tick2,.tick3,.tick4,.list-text-5").css("display", "block");
        $(".list-text-1,.list-text-2,.list-text-3,.list-text-4,.list-text-5").css("color", "white");
    });

    // ------------------ Form back Btn---------------------//
    $(".done-btn").click(function () {
        $(".form-right4,.tick5,.tick1,.tick2,.tick3,.tick4").css("display", "none");
        $(".form-right").css("display", "block");
        $(".list-text-2,.list-text-3,.list-text-4,.list-text-5").css("color", "grey");
    });
    $(".go-back").click(function () {
        $(".form-right1,.tick1").css("display", "none");
        $(".form-right").css("display", "block");
        $(".list-text-2,.list-text-3,.list-text-4,.list-text-5").css("color", "grey");
    });
    $(".go-back-1").click(function () {
        $(".form-right2,.tick2").css("display", "none");
        $(".form-right1").css("display", "block");
        $(".list-text-3,.list-text-4,.list-text-5").css("color", "grey");
    });
    $(".go-back-2").click(function () {
        $(".form-right3,.tick3").css("display", "none");
        $(".form-right2").css("display", "block");
        $(".list-text-4,.list-text-5").css("color", "grey");
    });
    // ------------------------Metric Section--------------------------//
    var currentImage = 0;

    // Show the first image
    $(".image:eq(" + currentImage + ")").show();
    $(".dot:eq(" + currentImage + ")").addClass("active");

    // Dot Click
    $(".dot").click(function () {
        $(".image").hide();
        $(".dot").removeClass("active");

        currentImage = $(this).index();
        $(".image:eq(" + currentImage + ")").show();
        $(this).addClass("active");

        $(".goback").show();
    });

    // Arrow Click
    $(".arrow").click(function () {
        $(".image").hide();
        $(".dot").removeClass("active");

        if ($(this).hasClass("next")) {
            currentImage = (currentImage < $(".image").length - 1) ? currentImage + 1 : 0;
        } else {
            currentImage = (currentImage > 0) ? currentImage - 1 : $(".image").length - 1;
        }

        $(".image:eq(" + currentImage + ")").show();
        $(".dot:eq(" + currentImage + ")").addClass("active");

        $(".goback").show();
    });

    // Go Back Button
    $(".goback").click(function () {
        $(".image").hide();
        $(".dot").removeClass("active");

        currentImage = 0;
        $(".image:eq(" + currentImage + ")").show();
        $(".dot:eq(" + currentImage + ")").addClass("active");

        $(".goback").hide();
    });
});






