this.SignUp = function() {
    var form = $(".signup-form");
    var formMethod = "post";
    var fomrUrl = "/api/signup/";
    var customNameElm = $('input[name="customName"]', form);
    var customNumberElm = $('input[name="customNumber"]', form);
    var customEmailElm = $('input[name="customEmail"]', form);
    var isReadElm = $('input[name="isRead"]', form);
    var elmAry = [customNameElm, customNumberElm, customEmailElm, isReadElm];
    var errorElm = $(".invalid-feedback", form);
    var submitElm = $(".btn-primary", form);
    //
    var init = function() {
        addEventlistener();
    }

    var isEmpty = function(a_elm) {
        var str = $.trim(a_elm.val());
        if (str == "")
            return true;
        return false;
    }

    var isValidEmail = function(a_elm) {
        var str = $.trim(a_elm.val());
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(str);
    }

    var isAlphaNumeric = function(a_elm) {
        var str = $.trim(a_elm.val());
        var ary = str.slice("");
        for (var i in ary) {
            var code = ary[i].charCodeAt(0);
            if ((code >= 48 && code <= 57) || // 0-9
                (code >= 65 && code <= 90) || // A-Z
                (code >= 97 && code <= 122) || // a-z
                (code == 64) || // @
                (code == 46) || // .
                (code == 45) || // .
                (code == 95) || // .
                (code == 189)) {
                // console.log('ok');
            } else {
                return false;
            }
        }

        return true;
    }

    var isCheck = function(a_elm) {

        if (a_elm.prop("checked") == true)
            return true;
        return false;
    }

    var validateForm = function() {
        var customNameVal = $.trim(customNameElm.val());
        var customNumberVal = $.trim(customNumberElm.val());
        var customEmailVal = $.trim(customEmailElm.val());
        var isReadVal = isReadElm.val();
        var obj = {};
        var valid = true;
        form.addClass("was-validated");
        for (var i in elmAry) {
            elmAry[i].removeClass("is-invalid");
            elmAry[i].removeClass("is-valid");
        }
        //
        var target = customNameElm;
        if (isEmpty(target)) {
            valid = false;
            target.addClass("is-invalid");
        } else {
            target.addClass("is-valid");
        }

        target = customNumberElm;
        if (isEmpty(target)) {
            valid = false;
            target.addClass("is-invalid");
        } else {
            target.addClass("is-valid");
        }

        target = customEmailElm;
        if (isEmpty(target)) {
            valid = false;
            target.addClass("is-invalid");
        } else {
            target.addClass("is-valid");
        }

        if (isValidEmail(target)) {
            target.addClass("is-valid");
        } else {
            valid = false;
            target.addClass("is-invalid");
        }

        if (isAlphaNumeric(target)) {
            target.addClass("is-valid");
        } else {
            valid = false;
            target.addClass("is-invalid");
        }

        target = isReadElm;
        if (isCheck(target)) {
            target.addClass("is-valid");
        } else {
            valid = false;
            target.addClass("is-invalid");
        }
        return valid;
    }

    var addEventlistener = function() {
        submitElm.bind("click", function(event) {
            event.preventDefault();
            event.stopPropagation();

            if (validateForm()) {
                var result = form.serializeArray();
                $.ajax({
                        type: "POST",
                        url: "/welcome/Api/SingUpRst",
                        data: result
                    })
                    .done(function(msg) {
                        if (msg != "") {
                            $(".signUpModal .signup").hide();
                            $(".signUpModal .signup-success").show();
                        } else {
                            alert("很抱歉系統忙碌中，請稍後再試");
                        }
                    })
                    .fail(function(e) {
                        alert("很抱歉系統忙碌中，請稍後再試");
                    })
                    .always(function() {
                        //console.log( "complete" );
                    });;
            }
            return false;
        })
    }
    $(function() {
        init();
    })
}

var signUp = new SignUp();