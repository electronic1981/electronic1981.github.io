// 



//------- CAPTCHA --------
function valida_captcha(titulo, modal_cont) {
    var data = $("#form-captcha").serialize();
    $.ajax({
        data: data,
        url: '/users/captcha_ajax',
        type: 'post',
        timeout: 10000,
        success: function (resp) {
            //console.log(resp);
            if (resp != '1') {
                $("#alert-error").html(resp);
                $("#alert-error").show();
            } else {
                open_modal(titulo, modal_cont)
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.responseText);
        }
    });
    grecaptcha.reset();
}

//-------- REGISTROS -------- 

//-----------------------------
$(document).ready(function () {
    var scroll = true;
    /////--------------------- BOTONES RESPONSIVE
    $("#chk-menu").change(function () {
        $("#divmenu").toggle(500);
    });

    $("#chk-footer").change(function () {
        if ($("#chk-footer").is(':checked')) {
            $("#footer-info").css({
                'margin-bottom': '0px',
                'transition': 'all 1.5s'
            });
        } else {
            $("#footer-info").css({
                'margin-bottom': '-150px',
                'transition': 'all 1.5s'
            });
            
        }
    });

    $(window).resize(function () {
        $("#divmenu").removeClass('animated zoomInUp');
        $("#divmenu").hide(500);
        $("#divmenu").addClass('animated zoomInUp');
        
    });

    ////-------------------------------------- SCROLL *********
    //alert($(window).width());
    $(window).scroll(function () {
        var pos = $(window).scrollTop();
        if (pos > 100) {
            $("#caja-menu").css({
                'position': 'fixed',
                'top': '60px',
                'z-index': '15'
            });
            $("#menu2").css({
                'position': 'fixed',
                'top': '0px',
                'z-index': '15'
            });
            $("#btn-menu").css({
                'position': 'fixed',
                'top': '0px',
                'z-index': '300'
            });


        } else {
            $("#menu2").css({
                'position': 'relative',
                'z-index': '4'
            });
            $("#caja-menu").css({
                'top': '160px',
                'z-index': '4'
            });
            $("#btn-menu").css({
                'position': 'relative',
                'z-index': '300'
            });
        }
    });


    /////----------------------- 
    $("#btn-ocultar1").click(function () {
        alert('Sección de cotizaciones en desarrollo');
        $('html, body').animate({
            scrollTop: 300,
            scrollLeft: 0
        }, 2000);
        $("#bloque1").hide(3000, function () {
            $("#bloque2").show(3000, function () {
            });
        });
    });

    $("#btn-ocultar2").click(function () {
        $('html, body').animate({
            scrollTop: 300,
            scrollLeft: 0
        }, 2000);
        $("#bloque2").hide(1000, function () {
            $("#bloque1").show(3000);
        });
    });
    //---------------------- OPENER POPUP
    $(".opener").click(function () {
        ancho = screen.width;
        alto = screen.height;
        serv = '/web/ajax_get_url_template';
        html = '';
        data = {
            'url': $(this).attr("url")
        };
        $.ajax({
            data: data,
            url: serv,
            type: 'post',
            timeout: 10000,
            success: function (resp) {

                if (resp) {
                    html = resp;
                    $("#capa-iframe #iframe").html('<iframe src="' + html + '"></iframe>');
                    $("#capa-iframe #iframe iframe").css({
                        'width': '100%',
                        'height': alto - 100,
                        'border': '0px'
                    });
                    $("#capa-iframe").show(1000);
                }
            },
            error: function (jqXHR, estado, error) {
                console.log('Error:' + error);
            }
        });


        //window.open(url, "nuevo", "directories=no, location=no, menubar=no, scrollbars=yes, statusbar=no, tittlebar=no, width=ancho, height=alto");
    });
    $("#capa-iframe #opt-iframe #cerrar").click(function () {
        $("#capa-iframe #iframe").html("");
        $("#capa-iframe #iframe iframe").css({
            'width': '100%'
        });
        $("#capa-iframe #iframe").css({
            'width': '100%'
        });
        $("#capa-iframe").hide(1000);
    });
    $("#capa-iframe #opt-iframe #responsive").click(function () {
        if (screen.width > 1024) {
            $("#capa-iframe #iframe").css({
                'width': '320px',
                'margin': '0 auto'
            });

        }
    });
    $("#capa-iframe #opt-iframe #fullsize").click(function () {
        if (screen.width > 1024) {
            $("#capa-iframe #iframe iframe").css({
                'width': '100%'
            });
            $("#capa-iframe #iframe").css({
                'width': '100%'
            });
        }
    });

    // -------------- OWL CARROUSEL ----------------------

    $(".carousel-porta").owlCarousel({
        loop: true,
        margin: 5,
        mouseDrag: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true,
        dotsEach: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true,
                dots: true,
                loop: true
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            }
        }
    });
});

//        INABILITA CLICK DERECHO 
/*function inhabilitar(){ 
 alert ("...\n") 
 return false 
 } 
 
 document.oncontextmenu=inhabilitar 
 */


