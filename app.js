const nav = document.querySelector('.navbar')

fetch('/navbar.html')
   .then(response => response.text())
   .then(data =>{

    nav.innerHTML = data

    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
   })

   
   // The Slide Bar Displays when a menu bar is clicked  //

   function slideBars(){
      var slides = document.getElementById('slide');
      var use_maps = document.getElementById('maps');
      var icons = document.getElementById('fas')
     if(slides.innerHTML = use_maps.innerHTML){
      slides.innerHTML = use_maps.innerHTML
     }
     else{
      slides.innerHTML = ' '
     }

     use_maps.style.zIndex = '1'
     let affact_icons = icons.style.display = 'none'
   }