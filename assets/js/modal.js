
//var spin_gif = '<div class="spin_gif"><img src="http://www.mi-computadora.net/assets/img/loading2.gif"><div>';

//------- MODALS --------
function open_modal(titulo, view_cont) {
    //alert(titulo+view_cont);
    var data = {
        'view_cont': view_cont
    };
    var url = "/web/get_modal";
    $.ajax({
        data: data,
        url: url,
        type: 'post',
        timeout: 30000,
        success: function (resp) {
            //console.log(resp);

            $("#myModalBody").html("");
            $("#myModalBody").append(resp);
            $("#myModalLabel").html(titulo);
            $('#myModal').removeClass('rotateOut');
            $('#myModal').addClass('animated flipInX');
            $('#myModal').modal('show');
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.responseText);
        }
    });
}

function modal_msg(tipo, msg) {
    $(".modal-dialog .modal-body").html("");
    var html = '';
    html += '<div class="alert alert-msg alert-';
    html += (tipo == 'success') ? 'success">' : 'danger ">';
    html += '<p>' + msg + '</p>';
    html += '<p>&nbsp;</p>';
    html += '<p><input type="button" value="Cerrar" class="btn btn-' + ((tipo == 'success') ? 'success' : 'danger') + '" data-dismiss="modal"></p>';
    html += '</div>';

    $(".modal-dialog .modal-body").append(html);
    $(".modal-dialog .modal-title").html("Mensaje del sistema...");
    $('#myModal').addClass('animated flipInX');
    $('#myModal').modal('show');
}

function cierra_modal() {
    $("#myModalBody").html("");
    $('#myModal').removeClass('flipInX');
    $('#myModal').addClass('rotateOut');
    $("#myModal").modal('hide');
    //location.reload()
}
