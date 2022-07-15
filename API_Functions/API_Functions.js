export default function setCurrentName_Pice(setState, currencyCode){
    fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${currencyCode}/`)
        .then(response => response.json())
        .then(data => {
            setState({currencyName: data.currency, currencyPrice: data.rates[0].mid})
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
}