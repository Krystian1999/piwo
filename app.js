const fn1 = () => {
    var str = document.getElementById("txt1").value;
    alert("Wpisałeś " +str);
    return fetch(`https://api.punkapi.com/v2/beers `)
.then(res => res.json())
.then(piwo => console.log(piwo))
}