export function createMask(){
    // Define as maks para os campos e adiciona em cada input
    const masks = {
        CPF: "000.000.000-00",
        NÚMERO: "(00) 00000-0000",
        "DATA NASC": "00/00/0000",
        IMEI: "000000000000000"
    };
    Object.keys(masks).forEach(name => {
        $(`input[name='${name}']`).mask(masks[name]);
    });
}