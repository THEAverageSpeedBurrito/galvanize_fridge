$(function() {
  console.log('Getting into login.js');
    $("#register-button").click(function() {
        submitLogin();
    });
});

function submitLogin() {
    var newUser = {
        first_name: $("#give-first-name").val(),
        last_name: $("#give-last-name").val(),
        email: $("#give-email").val(),
        password: $("#set-password").val()
    };

    if ($("#set-password").val() !== $("#retype-password").val()) {
        Materialize.toast('Passwords do not match', 3000)
    }

    // TODO: Send newFood to server
    // The server will need to get the userID according to the name that was entered
    var $xhr = $.ajax({
        type: "POST",
        url: "http://localhost:8000/users",
        data: newUser,
        success: function(result) {
            console.log("post successful ", result);
        }
    });

    $xhr.fail((err) => {
        console.error(err);
    });
};
