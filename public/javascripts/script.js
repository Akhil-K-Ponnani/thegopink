/* Scroll Window */
window.onscroll = () => {
    if (window.innerWidth >= 1200) {
        if (window.pageYOffset > 0) {
            $(".navbar").css("background", "#11101d");
        }
        else {
            $(".navbar").css("background", "transparent");
        }
    }
    if(window.pageYOffset > 600) {
        $(".scrolltop-btn").css("visibility", "visible");
    }
    else {
        $(".scrolltop-btn").css("visibility", "hidden");
    }
}

$(document).ready(() => {
    $("#contact-form").validate(
        {
            rules: {
                name: {
                    required:true,
                },
                email: {
                    required:true,
                    email:true
                },
                mobile: {
                    required:true,
                    number:true,
                    minlength:10,
                    maxlength:10
                },
                message: {
                    required:true
                }
            },
            messages: {
                name:"<small class='text-danger'>Please Enter your Name.</small>",
                email: {
                    required:"<small class='text-danger'>Please Enter your Email.</small>",
                    email:"<small class='text-danger'>Please Enter a valid Email.</small>"
                },
                mobile: {
                    required:"<small class='text-danger'>Please Enter your Mobile.</small>",
                    number:"<small class='text-danger'>Please Enter a valid Mobile.</small>",
                    minlength:"<small class='text-danger'>Please Enter a valid Mobile.</small>",
                    maxlength:"<small class='text-danger'>Please Enter a valid Mobile.</small>"
                },
                message:"<small class='text-danger'>Please Enter your Message.</small>"
            }
        }
    )
})