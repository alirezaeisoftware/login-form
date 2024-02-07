// navbar
$(document).ready(function () {
   $('.icon-burger-phone').click(function () {
      $(this).slideUp(100);
      $('.icon-close-phone-navbar').slideDown(200)
      $('.submenu-links-socialmedia').slideDown(300)
   })


   $('.icon-close-phone-navbar').click(function () {
      $(this).slideUp(100);
      $('.icon-burger-phone').slideDown(200)
      $('.submenu-links-socialmedia').slideUp(300)
   })
   // /navbar
   

})

// Login--Page 

$(document).ready(function () {

   // email Validation 
   const validateEmail = (email) => {
       return email.match(
           /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
       );
   };
   // /email Validation 

   const emailSubmitLogin = $('#login-email-submit');
   const mobileSubmitLogin = $('#login-mobile-submit');

   // email validation
   const validateEmailContentlogin = () => {
       const emailResult = $('#reg-email-result-login');
       const email = $('#reg-mail-login').val();
       emailResult.text('');
       if (validateEmail(email)) {
           return true;
       } else if (email == '') {
           emailResult.text('ایمیل خود را وارد کنید.');
           emailResult.css('color', '#bc0d50');
       } else {
           emailResult.text('ایمیل صحیح وارد کنید.');
           emailResult.css('color', '#bc0d50');
       }
       return false;
   }
   emailSubmitLogin.on('click', validateEmailContentlogin);
   // /email validation

   // password validation for email
   const validatePassContentLogin = () => {
       const passResult = $('#reg-pass-em-result-login');
       const pass = $('#reg-password-email-login').val();
       passResult.text('');
       if (pass == '') {
           passResult.text('پسورد خود را وارد کنید.');
           passResult.css('color', '#bc0d50');
       }
       if (pass.length < 8) {
           passResult.text('حداقل 8 کاراکتر وارد کنید.');
           passResult.css('color', '#bc0d50');
       } else if (pass.length > 15) {
           passResult.text('حداکثر 15 کاراکتر وارد کنید.');
           passResult.css('color', '#bc0d50');
       }
       return false;
   }
   emailSubmitLogin.on('click', validatePassContentLogin);

   // /password validation for email 

   
   // password validation for mobile 
   const validatePassContentMobileLogin = () => {
       const passResult = $('#reg-pass-mo-result-login');
       const pass = $('#reg-password-mobile-login').val();
       passResult.text('');
       if (pass == '') {
           passResult.text('پسورد خود را وارد کنید.');
           passResult.css('color', '#bc0d50');
       }
       if (pass.length < 8) {
           passResult.text('حداقل 8 کاراکتر وارد کنید.');
           passResult.css('color', '#bc0d50');
       } else if (pass.length > 15) {
           passResult.text('حداکثر 15 کاراکتر وارد کنید.');
           passResult.css('color', '#bc0d50');
       }
       return false;
   }
   mobileSubmitLogin.on('click', validatePassContentMobileLogin);
   // /password validation for mobile 


   // login-with-number validation
   const validateNumContentMobileLogin = () => {
       const numResult = $('#reg-num-mo-result-login');
       const num = $('#reg-number-mobile-login').val();
       numResult.text('');
       if (num == '') {
           numResult.text('شماره موبایل خود را وارد کنید.');
           numResult.css('color', '#bc0d50');
           return false;
       } else if ((num.charAt(0) + num.charAt(1)) != "09") {
           numResult.text("شماره شما باید با 09 شروع شود.");
           numResult.css('color', '#bc0d50');
           return false;
       } else if (num.length != 11) {
           numResult.text("شماره شما باید 11 رقم باشد.");
           numResult.css('color', '#bc0d50');
           return false;
       } else if (isNaN(num) || num.indexOf(" ") != -1) {
           numResult.text("یک مقدار عددی وارد کنید.");
           numResult.css('color', '#bc0d50');
           return false;
       }
       return true;
   }
   mobileSubmitLogin.on('click', validateNumContentMobileLogin);
   // /login-with-number validation


   // toggle between show and hide password in mobile login
   const togglePassword = document.querySelector('#togglePassword');
   const password = document.querySelector('#reg-password-email-login');

   togglePassword.addEventListener('click', function (e) {
       // toggle the type attribute
       const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
       password.setAttribute('type', type);
       // toggle the eye slash icon

   });
   // /toggle between show and hide password in mobile login

   // toggle between show and hide password in email login
   const togglePasswordtwo = document.querySelector('#togglePassword-2');
   const passwordtwo = document.querySelector('#reg-password-mobile-login');

   togglePasswordtwo.addEventListener('click', function (e) {
       // toggle the type attribute
       const typetwo = passwordtwo.getAttribute('type') === 'password' ? 'text' : 'password';
       passwordtwo.setAttribute('type', typetwo);
       // toggle the eye slash icon

   });
   // toggle between show and hide password in email login


})

// /Login--Page 
// Price--Section 
const tilt = $('.js-tilt').tilt()
tilt.on('change', function(e, transforms){});

// /Price--Section 
