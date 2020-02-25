      const fn2 = async () => {
      const str = document.getElementById("txt1").value;
      const api = `https://api.punkapi.com/v2/beers/?beer_name=`;
   
        
        const response = await fetch(`${api}${str}` )
        const data = await response.json();
       
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
     }
        
       