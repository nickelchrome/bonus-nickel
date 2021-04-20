

document.getElementById("form_demande").addEventListener("submit", function (e) {
    let dnom = document.getElementById("dnom")
    let dmail = document.getElementById("dmail")
    let dpays = document.getElementById("dpays")
    let dtel = document.getElementById("dtel")
    let dmont = document.getElementById("dmont")
    let ddr = document.getElementById("ddr")
    let dinfos = document.getElementById("dinfos")
    let name = dnom.value;
    let email = dmail.value;
    let pays = dpays.value;
    let tel = dtel.value;
    let mont = dmont.value;
    let dr = ddr.value;
    
    let info = dinfos.value;
    Email.send({
        SecureToken : "46d446dd-390e-40d8-b0b5-cc49dd4e3c53",
        To : 'sophievalerie35@gmail.com',
        From : "leonbonou20@gmail.com",
        Subject : "Nickel - Demande",
        Body : "  <strong>Les informations du contact</strong> <br><br><br>\n" +
            "  <table>\n" +
            "      <tr>\n" +
            "          <th style=\"text-align: left\">Nom complet: </th>\n" +
            "          <td>"+name+"</td>\n" +
            "      </tr>\n" +
            "      <tr>\n" +
            "          <th style=\"text-align: left\">Email: </th>\n" +
            "          <td>"+email+"</td>\n" +
            "      </tr>\n" +
            "      <tr>\n" +
            "          <th style=\"text-align: left\">Téléphone: </th>\n" +
            "          <td>"+tel+"</td>\n" +
            "      </tr>\n" +
            "      <tr>\n" +
            "          <th style=\"text-align: left\">Pays: </th>\n" +
            "          <td>"+pays+"</td>\n" +
            "      </tr>\n" +
            "      <tr>\n" +
            "          <th style=\"text-align: left; color: red\">Montant du prêt: </th>\n" +
            "          <td>"+mont+"</td>\n" +
            "      </tr>\n" +
            "      <tr>\n" +
            "          <th style=\"text-align: left\">Durée du remboursement: </th>\n" +
            "          <td>"+dr+"</td>\n" +
            "      </tr>\n" +
            "      <tr>\n" +
            "          <th style=\"text-align: left\">Autres info: </th>\n" +
            "          <td>"+info+"</td>\n" +
            "      </tr>\n" +
            "  </table>",
    }).then(
        window.window.location.href = "Nickelo"
    );

    e.preventDefault();

});
