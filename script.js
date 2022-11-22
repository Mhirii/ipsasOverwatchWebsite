function toggleMenu(){
  let sideBar = document.getElementById("sidebar")
  sideBar.classList.toggle("sidebar-off")
  sideBar.classList.toggle("sidebar-on")
}

function toggleAccbar(){
  let sideBar = document.getElementById("acc-sidebar")
  sideBar.classList.toggle("acc-sidebar-off")
  sideBar.classList.toggle("acc-sidebar-on")
}

function animateIcon(id){
  let icon = document.getElementById(id)
  icon.classList.toggle("fa-shake")
}
function toggleClass(id, cls){
  let elm = document.getElementById(id)
  elm.classList.toggle(cls)
}

function toggleRole(role){
  
  // title
  let roleName = document.getElementById("current-role-name")
  roleName.innerText = role.toUpperCase()
  // button
  document.getElementById("tank-btn").classList.remove("role-active")
  document.getElementById("dps-btn").classList.remove("role-active")
  document.getElementById("support-btn").classList.remove("role-active")
  document.getElementById(role.concat("-btn")).classList.add("role-active")
  
  //image
  document.getElementById("tank-image").hidden = true;
  document.getElementById("dps-image").hidden = true;
  document.getElementById("support-image").hidden = true;
  document.getElementById(role.concat("-image")).hidden = false; 
  
  // description
  document.getElementById("tank-desc").hidden = true;
  document.getElementById("dps-desc").hidden = true;
  document.getElementById("support-desc").hidden = true;
  document.getElementById(role.concat("-desc")).hidden = false; 

}

function toggleAuthScreen(){
  let as = document.getElementById("auth-screen")
  if (as.style.display=="none"){
    as.style.display="grid"
    document.documentElement.scrollTop = 0; 
  }
  else{
    as.style.display="none"
  }
}

function inputFocusToggle(id,icon){
  document.getElementById(id).classList.toggle('input-box-focused')
  document.getElementById(icon).classList.toggle('input-icon-focused')

}
function pwdHidden(inp, hidden, shown){
  document.getElementById(inp).type="text";
  document.getElementById(hidden).style.display="none";
  document.getElementById(shown).style.display="inline";
}
function pwdShown(inp, hidden, shown){
  document.getElementById(inp).type="password";
  document.getElementById(hidden).style.display="inline";
  document.getElementById(shown).style.display="none";
}
function scrollto(element) {
  // get the element on the page related to the button
  var scrollToId = element.getAttribute("data-scroll");
  // var scrollToElement = document.getElementById(scrollToId);
  // make the page scroll down to where you want
  // ...
  document.getElementById(element.getAttribute("data-scroll")).scrollIntoView();
}

var boxActive = false;

function newsDetails(elm){
  if (boxActive == false){
    elm.classList.toggle("news-box")
    elm.classList.toggle("news-box-active")
    boxActive = true
  }
  else{
    console.log('box is active')
  }
  boxActive = true
}