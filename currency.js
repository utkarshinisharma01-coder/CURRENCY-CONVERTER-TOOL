const apiKey = "fdb26589919f6b376c66c650";

const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener("click", convertCurrency);

async function convertCurrency() {

    if(amount.value === ""){
        alert("Please enter an amount");
        return;
    }

    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency.value}`;

    try{

        const response = await fetch(url);
        const data = await response.json();

        const rate = data.conversion_rates[toCurrency.value];

        const convertedAmount = (amount.value * rate).toFixed(2);

        result.innerHTML =
        `${amount.value} ${fromCurrency.value} = ${convertedAmount} ${toCurrency.value}`;

    }

    catch(error){
        result.innerHTML = "Something went wrong!";
        console.log(error);
    }

}