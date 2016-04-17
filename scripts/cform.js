$(function() {
    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();
        console.log(formData);

       $.ajax({
        url: "https://formspree.io/kris.m.hanlon@gmail.com", 
        method: "POST",
        data: formData
        }).done(function(response) {
           $('#subjectInput').val('');
           $('#emailInput').val('');
           $('#Message').val('');
           $(formMessages).addClass('load');

           setTimeout(function() {
               $(formMessages).removeClass('load');
           }, 3000);
        }).fail(function(data) {


            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {

                $('#subjectInput').val('');
                $('#emailInput').val('');
                $('#Message').val('');
                $(formMessages).addClass('load');

                setTimeout(function() {
                    $(formMessages).removeClass('load');
                }, 3000);
            }
        });
    });
});