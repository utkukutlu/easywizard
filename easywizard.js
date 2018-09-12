/**
 * User: utku
 * Date: 16.08.2018
 * Time: 12:10
 * Web : http://www.utkukutlu.com
 */


$.fn.easyWizard = function () {
    var parent = this;


    if (parent.find(".easywizard-step.active").length <= 0) {
        parent.find(".easywizard-step").eq(0).addClass("active");
    }
    if (parent.find(".easywizard-content.active").length <= 0) {
        parent.find(".easywizard-content").eq(0).addClass("active");
    }

    parent.find(".easywizard-content").hide();
    parent.find(".easywizard-content.active").show();
    parent.find(".easywizard-step").last().after("<div style='clear:both;'></div>");

    var top = parent.find(".easywizard-steps").height() / 2 - 10;
    parent.find(".easywizard-steps").append("<div class='easywizard-bar' style='position:absolute;width:100%;top:" + top + "px;height:10px;background:#5cb85c;z-index:-1;border-radius:10px;border: inset 1px #efefef;'></div>");
    parent.find(".easywizard-steps").append("<div class='easywizard-bar-passed' style='position:absolute;width:0%;top:" + top + "px;height:10px;background:#337ab7;z-index:-1;border-radius:10px;transition:width .2s;border: inset 1px #efefef;'></div>");


    parent.find(".easywizard-step").click(function () {
        changeStep($(this).data("href"));
    });

    parent.find(".easywizard-btn").click(function () {
        if ($(this).hasClass("next")) {
            var el = parent.find(".easywizard-step.active").next(".easywizard-step").data("href");
        } else {
            var el = parent.find(".easywizard-step.active").prev(".easywizard-step").data("href");
        }
        if (el.length > 0) {
            changeStep(el);
        }
    });

    var maxHeight = Math.max.apply(null, $(".easywizard-content").map(function () {
        return $(this).height();
    }).get());

    parent.find(".easywizard-contents").css({
        "min-height": (maxHeight + 50) + "px"
    });


    function changeStep(id) {
        var isFirstStep = typeof id == "undefined" ? true : false;
        if ($(".easywizard-step.active").data("href") == id) {
            return false;
        }
        $(".easywizard-step.active").removeClass("active");
        if (isFirstStep == true) {
            $(".easywizard-step").eq(0).addClass("active");
        } else {
            $(".easywizard-step[data-href='" + id + "']").addClass("active");
            parent.find(".easywizard-content").hide();
            parent.find(id).fadeIn();
        }

        var currentStep = $(".easywizard-steps .easywizard-step.active").index();
        var stepCount = $(".easywizard-steps .easywizard-step").length;
        var width = $(".easywizard-steps .easywizard-step").eq(currentStep).offset().left;

        for (var i = 0; i < stepCount; i++) {
            var el = $(".easywizard-steps .easywizard-step").eq(i);

            if (i < currentStep) {
                el.addClass("passed-step");
            } else {
                el.removeClass("passed-step");
            }

        }

        if (currentStep == (stepCount - 1)) {
            $(".easywizard-steps .easywizard-step").addClass("passed-step");
        }

        if (currentStep == stepCount - 1) {
            $(".easywizard-bar-passed").css({"width": "100%"});
        } else {
            $(".easywizard-bar-passed").css({"width": width});
        }


    }

    changeStep();

    parent.find(".easywizard button[type='submit'] , .easywizard-submit-btn").click(function (e) {


        var validate = true;


        parent.find(":input").each(function () {
            if (($(this).val() === null || $(this).val().trim() === "") && $(this).attr("required") !== undefined) {

                $(this).parents(".form-group").addClass("has-error");

                validate = false;
                var id = $(this).parents(".easywizard-content").attr("id");


                var el = parent.find(".easywizard-step[data-href='#" + id + "']");

                el.addClass("easywizard-step-error");


                setTimeout(function () {
                    el.removeClass("easywizard-step-error");
                }, 2000);


                changeStep("#" + id);

                if (!validate) {
                    return false;
                }
            } else {
                $(this).parents(".form-group").removeClass("has-error");
                $(this).parents(".form-group").addClass("has-success");
            }

        });


        if (!validate) {
            return false;
        }

    });

};