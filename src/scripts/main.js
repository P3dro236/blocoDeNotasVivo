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
    // Validação do campo IMEI
    $("input[name='IMEI']").on("keyup", validateIMEI);
    function validateIMEI() {
        const isValid = $(".tab-pane.active input[name='IMEI']").val().length === 15;
        $(".tab-pane.active input[name='IMEI']").toggleClass("is-valid", isValid);
    }
    createMask();

    // Função para alterar o nome do label
    $("#form").on("click", "label", function() {
        const inputField = $(this).next("input");
        const modal = $("#changeLabelValueModal");
        const inputLabelNewName = $("#inputLabelNewName");
        const changeCurrentLabel = $("#changeCurrentLabel");
        modal.modal('show').on('shown.bs.modal', function () {
            inputLabelNewName.focus();
        });
        changeCurrentLabel.off("click").on("click", function() {
            const newLabelName = inputLabelNewName.val().toUpperCase();
            inputField.prev("label").text(newLabelName);
            modal.modal('hide');
        });
        inputLabelNewName.off("keypress").on("keypress", function(e) {
            if (e.which === 13) { // Enter key code
                changeCurrentLabel.click();
            }
        }).val("");
    });
});