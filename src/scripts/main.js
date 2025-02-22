$(document).ready(function() {
    $("#inputCPF").mask("000.000.000-00");
    $("#inputNumber").mask("(00) 00000-0000");
    $("#inputDate").mask("00/00/0000");
    $("#inputIMEI").mask("000000000000000");

    const createLine = () => `
        <div class="d-flex justify-content-center align-items-center w-100 mb-4 delete">
            <div class="line d-flex justify-content-center align-items-center w-100">
                <label for="name" class="text-white me-2" style="width: 100px;">CAMPO</label>
                <input type="text" class="form-control me-2 text-center">
                <button class="btn btn-success me-2"><i class="bi bi-clipboard"></i></button>
                <button class="btn btn-warning me-2"><i class="bi bi-x-circle"></i></button>
                <button class="btn btn-danger"><i class="bi bi-trash"></i></button>
            </div>
        </div>`;
    $("#addFieldButton").on("click", function() {
        $("#form").append(createLine());
    });
    $("#form").on("click", ".btn-danger", function() {
        if ($("#form .delete").length > 1) {
            $(this).closest(".delete").remove();
        }
    });
    $("#form").on("click", ".btn-success", function() {
        const inputValue = $(this).closest(".line").find("input").val();
        const sanitizedValue = inputValue.replace(/[^a-zA-Z0-9]/g, '');
        navigator.clipboard.writeText(sanitizedValue);
    });
    $("#form").on("click", ".btn-warning", function() {
        $(this).closest(".delete").find("input").val("");
        $("#inputIMEI").removeClass("is-valid");
        IMEIisValid()
    });
    $("#inputIMEI").on("keyup", ()=>{
        IMEIisValid()
    })
    function IMEIisValid(){
        if($("#inputIMEI").val().length === 15){
            $("#inputIMEI").addClass("is-valid");
        } else {
            $("#inputIMEI").removeClass("is-valid");
        }
    }
});