let cuadro = document.querySelector(`.cuadro`);

let inputTipoBorde = document.getElementById("tipoBorde");
let inputColorBorde = document.getElementById("colorBorde");
let inputTamañoBorde = document.getElementById("tamañoBorde");
let tipoBorde,tamañoBorde,colorBorde,tamañoLetra,colorLetra;
inputTipoBorde.addEventListener("change",()=>{

    tipoBorde = `border-style: ${inputTipoBorde.value}`;

    cuadro.setAttribute("style",
    `
    ${tamañoBorde};
    ${tipoBorde};
    ${colorBorde};
    ${tamañoLetra};
    ${colorLetra};
    `)
})

inputColorBorde.addEventListener("change",() => {

    colorBorde = `border-color: ${inputColorBorde.value}`;

    cuadro.setAttribute("style",
    `
    ${tamañoBorde};
    ${tipoBorde};
    ${colorBorde};
    ${tamañoLetra};
    ${colorLetra};
    `)
})

inputTamañoBorde.addEventListener("change",()=>{

    tamañoBorde = `border: ${inputTamañoBorde.value}px`;
    console.log(inputTamañoBorde.value);

    cuadro.setAttribute("style",
    `
    ${tamañoBorde};
    ${tipoBorde};
    ${colorBorde};
    ${tamañoLetra};
    ${colorLetra};
    `)
})
