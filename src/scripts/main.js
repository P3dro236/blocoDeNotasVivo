import { createPage, constructPage } from "./pageCreator.js";
import { createMask } from "./masks.js";

$(document).ready(function() {
    // Constrói as abas e os campos predefinidos
    constructPage($("#tabContainer"), ["#tabOne", "#tabTwo", "#tabThree", "#tabFour", "#tabFive"]);

    // Função para adicionar novos campos
    $("#addFieldButton").on("click", function() {
        $("div.tab-pane.active").append(createPage("CAMPO"));
    });

    // Delegação de eventos para os botões dentro do formulário
    $("#form").on("click", ".btn-danger", function() {
        if ($("#form .active .delete").length > 1) {
            $(this).closest(".delete").remove();
        }
    }).on("click", ".btn-success", function() {
        const inputValue = $(this).closest(".line").find("input").val();
        const sanitizedValue = inputValue.replace(/[^a-zA-Z0-9]/g, '');
        navigator.clipboard.writeText(sanitizedValue);
    }).on("click", ".btn-warning", function() {
        $(this).closest(".delete").find("input").val("");
        validateIMEI();
    });

    $("input[name='IMEI']").on("keyup", validateIMEI);
    createMask();
});

function validateIMEI() {
    const isValid = $("input[name='IMEI']").val().length === 15;
    $("input[name='IMEI']").toggleClass("is-valid", isValid);
}