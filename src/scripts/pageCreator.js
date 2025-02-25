// Define quais o campos
const fields = ["NOME", "CPF", "NÚMERO", "DATA NASC", "EXPEDITOR", "RG", "IMEI", "ICCD", "GED", "360"];
// Define os Tabs
const tabs = ["tabOne", "tabTwo", "tabThree", "tabFour", "tabFive"];

// Cria o elemento com o nome definido dentro do parâmetro item
export const createPage = (item) => {
    return `
        <div class="d-flex justify-content-center align-items-center w-100 mb-4 delete">
            <div class="line d-flex justify-content-center align-items-center w-100">
                <label class="fw-bold fs-5 text-white me-2">${item}</label>
                <input type="text" class="form-control me-2 text-center" name="${item}">
                <button class="btn btn-success me-2"><i class="bi bi-clipboard"></i></button>
                <button class="btn btn-warning me-2"><i class="bi bi-x-circle"></i></button>
                <button class="btn btn-danger"><i class="bi bi-trash"></i></button>
            </div>
        </div>`;
};

// Constrói as abas e o conteúdo da página inicial com os campos definidos na variável fields
export function constructPage(tabLocal, fieldLocal) {
    tabs.forEach((tab, index) => {
        tabLocal.append(`<div class="tab-pane" id="${tab}"></div>`);
        fields.forEach(field => {
            $(fieldLocal[index]).append(createPage(field));
        });
    });
    $("#tabOne").addClass("active");
}