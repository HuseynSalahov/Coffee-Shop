$(function(){
    $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: '<button type="button" class="product-prev"><img src="home-images/product-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="product-next"><img src="home-images/product-next.svg" alt=""></button>',
      });
});

$("#exampleForm1").submit(function(e) {
  e.preventDefault();
});

$('#submitButton').on('click', function(event){
  const signUpForm = document.getElementById('exampleForm1');
  const nameField = document.getElementById('exampleInputName1');
  const surnameField = document.getElementById('exampleInputEmail1');
  const emailField = document.getElementById('exampleInputEmail1');
  const phoneField = document.getElementById('exampleInputPhone1');
  const messageField = document.getElementById('exampleInputMessage1');
  const okButton = document.getElementById('submitButton');

  if(nameField.checkValidity() && surnameField.checkValidity() && emailField.checkValidity()
  && phoneField.checkValidity() && messageField.checkValidity()){
    var name = $('#exampleInputName1').val();
    var surname = $('#exampleInputSurname1').val();
    var email = $('#exampleInputEmail1').val();
    var phoneNumber = $('#exampleInputPhone1').val();
    var message = $('#exampleInputMessage1').val();
    console.log("Name: " + name + '\n' + "Surname: " + surname + '\n' + "Email: " + email + 
    '\n' + "Phone number: +90" + phoneNumber + '\n' + "Message: " + message);
    $("#exampleModal").modal("show");
  }
});