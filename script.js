var container=document.getElementById("container");
var btn=document.getElementById("btn").addEventListener('click' , ()=>{
    
    var inp=document.getElementById("input").value;
    
    var url=`https://restcountries.com/v3.1/name/${inp}`;
     fetch(url).then(response=>{
      return response.json();
    }).then(data=>{
        console.log(data);
        for(let i=0;i<data.length;i++){
            console.log(data[i].flags.png);
  
var currencies = data[i].currencies;
var currencyCodes = Object.keys(currencies);
var firstCurrencyKey = currencyCodes[0];
var currencyName = currencies[firstCurrencyKey].name;
var currencySymbol = currencies[firstCurrencyKey].symbol;
const languages = data[i].languages; 
const languageList = Object.values(languages).join(", ");

    console.log(languageList);

var nativeNames = data[i].name.nativeName;
var thairname=Object.keys(nativeNames);
var theirfirst=thairname[0];
var thelast=nativeNames[theirfirst].common;
console.log(thelast);

   

 var code1=` 
        <div class="push">
        <div class="display" id="display">
            <div class="left">
                <h1>${data[i].name.common}</h1>
                <hr>
                <h3><span>Official Name</span>: ${data[i].name.official}</h3>
                <h3><span>area</span>: ${data[i].area} km<sup>2</sup></h3>
                <h3><span>Capital City</span>: ${data[i].capital}</h3>
                <h3><span>Poppulation</span>: ${data[i].population}</h3>
                <h3><span>Currency</span>: ${currencyName}</h3>
                <h3><span>Official Language</span>: ${languageList}</h3>
                <h3><span>continent</span>: ${data[i].continents}</h3>
                <h3><span>Subregion</span>: ${data[i].subregion}</h3>
                <h3><span>UN Member</span>: ${data[i].unMember}</h3>
                <h3><span>Native Name</span>: ${thelast}</h3>
                <h3><span>Time Zone</span>: ${data[i].timezones}</h3>

            </div>
            <div class="right">
                  <h1>Flag</h1>
                  <hr>
                <img src="${data[i].flags.png}" alt="flag">

            </div>

        </div>
    </div>
`;
  container.innerHTML=code1;
        }
        
 });

});







