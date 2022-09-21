function changeColor(e) {
    if (e.target.value === "On") {
        e.target.style.background = "black"
        e.target.value= "Off"
      
      }
      else {
        e.target.style.background = "red"
        e.target.value = "On"
  
      }
    }