const Accordions = document.getElementsByClassName('accrd');

for(let i=0; i<Accordions.length ; i++) {
  Accordions[i].addEventListener('click', function(){
      this.classList.toggle("active");
      console.log("Yes");
  });
}