$(function () {

    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message


            if (name == "" || email == "" || subject == "" || message == "") { //firstName.indexOf(' ') >= 0 && name != '' && email != '' && phone != ''
                //firstName = name.split(' ').slice(0, -1).join(' ');
                // Fail message
                $('#success').html("<div class='alert alert-danger'>");
                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success > .alert-danger').append($("<strong>").text("Lo siento " + firstName + ", parece que mi servidor de correo no responde. Asegurese de completar todos los campos!"));
                $('#success > .alert-danger').append('</div>');
                //clear all fields
                $('#contactForm').trigger("reset");


            } else {
                // console.log(name, email, subject, message);
                $this = $("#sendMessageButton");
                $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
                $.ajax({
                    url: '/Contact',  //Services/Common/Mail/SendMail
                    type: 'Post',                    
                    data: {
                        "correo": {"Name": name,"Mail": email, "Subject":subject, "Message": message}},
                    cache: false,
                    success: function (r) {
                        if (r.r == "ok") {
                            Success();
                        }
                        // Success message
                        $('#success').html("<div class='alert alert-success'>");
                        $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success > .alert-success')
                            .append("<strong>Su mensaje se envio correctamente. </strong>");
                        $('#success > .alert-success')
                            .append('</div>');
                        //clear all fields
                        $('#contactForm').trigger("reset");
                    },

                    complete: function () {
                        setTimeout(function () {
                            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                        }, 1000);
                    }
                });
            }
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    function Success() {
        // Success message
        $('#success').html("<div class='alert alert-success'>");
        $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
        $('#success > .alert-success')
            .append("<strong>Su mensaje se envio correctamente. </strong>");
        $('#success > .alert-success')
            .append('</div>');
        //clear all fields
        $('#contactForm').trigger("reset");
    }


    function Fail() {
        // Fail message
        $('#success').html("<div class='alert alert-danger'>");
        $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
        $('#success > .alert-danger').append($("<strong>").text("Lo siento" + firstName + ", parece que mi servidor de correo no responde.¡Por favor, inténtelo de nuevo más tarde!"));
        $('#success > .alert-danger').append('</div>');
        //clear all fields
        $('#contactForm').trigger("reset");
    }



    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function () {
    $('#success').html('');
});
