

const clickButton = document.querySelector("button")
const currencySelect = document.querySelector(".currency-select")

function cliqueiNoBotao() {
    
    const inputValue = document.querySelector("input").value
    const currencyToConvert = document.querySelector(".currency-value-to-convert")
    const currencyConverted = document.querySelector(".currency-value")
    
    console.log(currencySelect)
   
    const dolarToday = 4.97
    const currencyFinal = inputValue / dolarToday    
   
    currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)

    currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(currencyFinal)

}





