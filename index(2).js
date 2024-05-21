var btn =document.getElementById("btn");
var navitemsid=document.getElementById("navitemsid");
var xmark=document.getElementById("xmark");
// let block=document.getElementById("block")

btn.addEventListener("click", function() {
    navitemsid.classList.toggle("active");
    if (navitemsid.classList.contains("active")) {
      btn.classList.remove("fa-solid", "fa-bars");
      btn.classList.add("fa-solid", "fa-xmark");
    } else {
      btn.classList.remove("fa-solid", "fa-xmark");
      btn.classList.add("fa-solid", "fa-bars");
    }
   
});
document.getElementById("demo").addEventListener("click", function() {
  // Toggle the "blur" class on body
  document.body.classList.toggle("blur");
});
document.getElementById("demo").addEventListener("click", function() {
  // Get the header element
  var header = document.querySelector(".header");
  // Remove class from header
  header.classList.remove("header");
  
  // Get the container element
  var container = document.querySelector(".containerr");
  // Add class to container
  container.classList.add("zindex");
});
// Get the header element
var header = document.getElementById("header");

// Get the element with class "cross"
var cross = document.querySelector(".cross");

// Add event listener to "cross" element
cross.addEventListener("click", function() {
    // Add class "header" to header element
    header.classList.add("header");
    var container = document.querySelector(".containerr");
    // Add class to container
    container.classList.remove("zindex");
});
// Add an event listener to the element with id "demo"
document.getElementById("demo").addEventListener("click", function() {
  // Toggle the class "none" on the element with class "containerr"
  document.querySelector(".containerr").classList.toggle("none");
});
document.getElementById("cross").addEventListener("click", function() {
    document.querySelector(".containerr").classList.remove("none");
});