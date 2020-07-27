document.addEventListener("DOMContentLoaded", function() {
  // Código que será executado quando o navegador carregar
    //var uri = "https://vision.squidit.com.br/v1/feed/test";
    //document.getElementById("demo").innerHTML = uri.upvotes;
    //var res = encodeURIComponent(uri);

    $.ajax({
        url: "https://vision.squidit.com.br/v1/feed/test",
        type: "get", //send it through get method
        data: {
            //ajaxid: 4,
            //UserID: UserID,
            //EmailAddress: EmailAddress
        },
        success: function (response) {
            //Do Something
            for (var i in response.medias) {

                var criadoData = new Date(response.medias[i].criadoEm).toLocaleDateString
                    ('pt-BR', { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' });

                var html = "<div class='doc'>\
                                <img width = '200' height = '200' src = '" + response.medias[i].imagens.resolucaoPadrao.url + "' >\
                                <div class='links'>\
                                    <a href='#'>\
                                        <i> @" + response.medias[i].usuario.username + "</i><span></span>\
                                    </a>\
                                    <a href='#'>\
                                        <i class='fa fa-heart'> " + response.medias[i].upvotes + "</i><span></span>\
                                    </a>\
                                    <a href='#'>\
                                        <i class='fa fa-comment'> " + response.medias[i].comentarios + "</i><span></span>\
                                    </a>\
                                    <a href='#'>\
                                        <i class='fa fa-calendar'> " + criadoData + "</i><span></span>\
                                    </a>\
                                </div>\
                            </div>";

                $("#div").append(html);
            }
        },
        error: function (xhr) {
            //Do Something to handle error
        }
    });
});