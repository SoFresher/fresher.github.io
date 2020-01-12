$(function () {
    $(".contact-us-form").on('submit', function (e) {
        e.preventDefault();

        let name = $("#name").val();
        let email = $("#email").val();
        let phone = $("#phone").val();
        let company = $("#company").val();
        let message = $("#message").val();

        if (navigator.onLine == false){
            if ($('.alert').hasClass('alert-success')) {
                $('.alert').removeClass("alert-success");
            }
            $('.alert').addClass("show alert-danger");
            $('.alert').children('.msg').html('It seems you are currently offline.');
        } else if (name == '' || email == '' || phone == '' || company == '' || message == '') {
            if ($('.alert').hasClass('alert-success')) {
                $('.alert').removeClass("alert-success");
            }
            $('.alert').addClass("show alert-danger");
            $('.alert').children('.msg').html('All fields are required.');
        }else {
            const formData = $(".contact-us-form").serialize();

            $.ajax({
                type: "POST",
                // url: "server.php",
                data: formData,
                success: function (data) {
                    // console.log(data);
                    if (data.sent == 1) {
                        if ($('.alert').hasClass('alert-danger')) {
                            $('.alert').removeClass("alert-danger");
                        }
                        $('.alert').addClass("show alert-success");
                        $('.alert').children('.msg').html('Thank you for contcting me.');
                    } else if (data == '') {
                        if ($('.alert').hasClass('alert-success')) {
                            $('.alert').removeClass("alert-success");
                        }
                        $('.alert').addClass("show alert-danger");
                        $('.alert').children('.msg').html('An error occured, try again later.');
                    } else {
                        if ($('.alert').hasClass('alert-success')) {
                            $('.alert').removeClass("alert-success");
                        }
                        $('.alert').addClass("show alert-danger");
                        $('.alert').children('.msg').html(data.error);
                    }
                },
                error: function (data) {
                    if ($('.alert').hasClass('alert-success')) {
                        $('.alert').removeClass("alert-success");
                    }
                    $('.alert').addClass("show alert-danger");
                    $('.alert').children('.msg').html('Try again later, an error occurred.');
                }
            });
        }
        return false;
    });
});