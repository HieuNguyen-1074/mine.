let els = document.querySelectorAll('.content-img')



const elMouse = document.querySelector('.mouse');
  
document.onmousemove = (e)=>{
    elMouse.style.display = `block`;
let s = e.target.localName;
  console.log(s)
  if(s === "p" || s==="a" || s=== "i" || s === "h1"){
    elMouse.style.transform = `translate(-50%,-50%) scale(2)`;
    elMouse.style.transition = `0.2s`;
    elMouse.style.background = 'transparent'
  }
//   switch(e.target.localName){
//         case "p" : 
//         elMouse.style.transform = `translate(-50%,-50%) scale(2)`;
   
//       case "div" : 
//         elMouse.style.transform = `translate(-50%,-50%) scale(1)`;
      

//       default :  elMouse.style.transform = `translate(-50%,-50%) scale(1)`;
//       elMouse.style.transition = "0s";
    
else if(s==="img" || s === "button"){
    elMouse.style.transform = `translate(-50%,-50%) scale(.4)`;
    elMouse.style.background = 'black'
}
  else{
    elMouse.style.transform = `translate(-50%,-50%) scale(1)`;
    elMouse.style.transition = `0s`;
    elMouse.style.background = 'transparent'
  }
  elMouse.style.top = `${e.clientY}px`;
  elMouse.style.left = `${e.clientX}px`;
  
}

els.forEach((el)=>{
    const height = el.clientHeight
    const width = el.clientWidth
    el.addEventListener('mousemove', handleMove)
    
    function handleMove(e) {
    
      const xVal = e.layerX
      const yVal = e.layerY
    
      const yRotation = 20 * ((xVal - width / 2) / width)
      
    
      const xRotation = -20 * ((yVal - height / 2) / height)
    
      const transform = 'perspective(500px)  rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
      
      el.style.transform = transform
    }
    
    el.addEventListener('mouseout', function() {
      el.style.transform = 'perspective(500px)  rotateX(0) rotateY(0)'
    })
    
    el.addEventListener('mousedown', function() {
      el.style.transform = 'perspective(500px)  rotateX(0) rotateY(0)'
    })
    el.addEventListener('mouseup', function() {
      el.style.transform = 'perspective(500px)  rotateX(0) rotateY(0)'
    })
})