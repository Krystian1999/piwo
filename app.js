
const fn2 = () => {
    const str = document.getElementById("txt1").value;
 
      data = fetch(`https://api.punkapi.com/v2/beers/?beer_name=${str}` )
     .then(res => res.json())
     .then((data) => {
     
     const {name,tagline,first_brewed,description} = data[0];
     let output ='<h2>Opis</h2>';
     output +=`
        <table>
   <tr>
      <td>name: ${name}</td> 
   </tr>
   <tr>
      <td>tagline: ${tagline}</td> 
   </tr>
   <tr>
      <td>first brewed: ${first_brewed}</td> 
   </tr>
   <tr>
      <td>first brewed: ${description}</td> 
   </tr>
</table>
      `
      document.getElementById('output').innerHTML = output
     console.log(`name = ${name}`);
     console.log(`tagline = ${tagline}`);
     console.log(`first brewed = ${first_brewed}`);
     console.log(`description = ${description}`);  
   }
     )} ;



     /*const fn2 = () => {
      const str = document.getElementById("txt1").value;
   
        data = fetch(`https://api.punkapi.com/v2/beers/?beer_name=${str}` )
       .then(res => res.json())
       .then((data) => {
       
       const {name,tagline,first_brewed,description} = data[0];
       let output ='<h2>Opis</h2>';
       output +=`
          <table>
     <tr>
        <td>name: ${name}</td> 
     </tr>
     <tr>
        <td>tagline: ${tagline}</td> 
     </tr>
     <tr>
        <td>first brewed: ${first_brewed}</td> 
     </tr>
     <tr>
        <td>first brewed: ${description}</td> 
     </tr>
  </table>
        `
        document.getElementById('output').innerHTML = output
       console.log(`name = ${name}`);
       console.log(`tagline = ${tagline}`);
       console.log(`first brewed = ${first_brewed}`);
       console.log(`description = ${description}`);  
     }
       )} ;
       */