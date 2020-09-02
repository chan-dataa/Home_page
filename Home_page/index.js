const title = document.querySelector("#title");
const CLIKED_CLASS = "cliked";

function handleClick(){
  // const hasClass = title.classList.contains(CLIKED_CLASS);
  /*
  if(!hasClass){
    title.classList.add(CLIKED_CLASS);
  } else{
    title.classList.remove(CLIKED_CLASS);
  }
  */
  title.classList.toggle(CLIKED_CLASS);
}
function init(){
  title.addEventListener("click", handleClick);
}
init();
