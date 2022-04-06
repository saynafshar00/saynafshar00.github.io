// alert ("hello!");

// MENU BUTTON
let menuButton = document.getElementById ("menu-button");

menuButton.addEventListener('click', () => {
    // console.log("Hello!");
    let menu = document.getElementById("menu");
    menu.classList.toggle("show-menu");
})



// CLOSE BUTTON
let closeButton = document.getElementById ("close");

closeButton.addEventListener('click', () => {
    // alert("OK");
    let menu = document.getElementById("menu");
    menu.classList.toggle("show-menu");
})


$('.hamburger').on('click', function () {

  $('.menu').toggleClass('open');
  
  });
  
  $( '.menu a' ).on("click", function(){
  $('.menu').hide();
  });

  
// Tabs
function openButton(evt, buttonName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(buttonName).style.display = "block";
    evt.currentTarget.className += " active";
  }

 
// function close() {
//     var pass = document.getElementById("pass");
//     if (pass.type === "password") {
//       pass.type = "text";
//     } else {
//       pass.type = "password";
//     }
//   }

// READMORE
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "<i class='fas fa-chevron-down'></i>";
    moreText.style.display = "none";
    colorTweak.style.color = "#001f33";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "<i class='fas fa-chevron-up'></i>";
    moreText.style.display = "inline";
    colorTweak.style.color = "#F4F3F0";
  }
}


//Get the button:
mybutton = document.getElementById("myBtnTwo");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}