$(document).ready(function() {
    $("#addFieldButton").on("click", function(){
        let line = `<div class="d-flex justify-content-center align-items-center w-100 mb-4">
                        <div class="line d-flex justify-content-center align-items-center w-100">
                            <label for="name" class="text-white me-2" style="width: 100px;">CAMPO</label>
                            <input type="text" class="form-control me-2">
                            <button class="btn btn-success me-2"><i class="bi bi-clipboard"></i></button>
                            <button class="btn btn-danger"><i class="bi bi-trash"></i></button>
                        </div>
                    </div>`;
        $("#form").append(line)
    });
    $("#deleteButton")
});