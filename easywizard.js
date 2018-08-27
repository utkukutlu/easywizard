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

    var top = parent.find(".easywizard-steps").height() / 2 - 5;
    parent.find(".easywizard-steps").append("<div style='position:absolute;width:100%;top:" + top + "px;height:10px;background:#5cb85c;z-index:-1;border-radius:10px;'></div>");

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

    function changeStep(id) {
        $(".easywizard-step.active").removeClass("active");
        $(".easywizard-step[data-href='" + id + "']").addClass("active");
        parent.find(".easywizard-content").hide();
        parent.find(id).fadeIn();
    }

};