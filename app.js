

const fn1 = () => {
    //var str = document.getElementById("txt1").value;
    //alert("Wpisałeś " +str);


     fetch(`https://api.punkapi.com/v2/beers `)
.then(res => res.json())
.then((data) => {
    let output ='<h2>tagline</h2>';
    data.forEach(piwo => {
        output +=`
        <ul>
        <li>name: ${piwo.name} </li>
        <li>tagline: ${piwo.tagline} </li>
        </ul>
        `
        document.getElementById('output').innerHTML = output
 }); 
 
})
}
//.then(piwo => console.log(piwo))