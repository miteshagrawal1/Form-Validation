let btn = document.getElementById('btn');

        let nameerror = document.getElementById('nameerror');
        let emailerror = document.getElementById('emailerror');
        let passworderror = document.getElementById('passworderror');
        let numbererror = document.getElementById('numbererror');
        let submiterror = document.getElementById('submiterror');


        function validatename() {
            var username = document.getElementById('username').value;

            if (username.length == 0) {
                nameerror.innerHTML = 'name is required';
                return false;
            }
            if (username.length > 4) {
                nameerror.innerHTML = 'valid';
                return true;
            }
        }

        function validateemail() {
            var email = document.getElementById('email').value;

            if (email.length == 0) {
                emailerror.innerHTML = 'email is required';
                return false;
            }
            if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
                emailerror.innerHTML = 'write email in correct format';
                return false;
            }
            else {
                emailerror.innerHTML = 'valid';
                return true;
            }
        }

        function validatenumber() {
            var number = document.getElementById('number').value;

            if (number.length == 0) {
                numbererror.innerHTML = 'Phone no. is required';
                return false;
            }
            if (number.length !== 10) {
                numbererror.innerHTML = 'Phone no. must be of 10 digit';
                return false;
            }
            numbererror.innerHTML = 'valid';
            return true;
        }
        
        function validatepassword() {
            var password = document.getElementById('password').value;

            if (password.length <= 8) {
                passworderror.innerHTML = 'password is weak';
                return false;
            }
            if (password.length >= 15) {
                passworderror.innerHTML = 'password is too long';
                return false;
            }
            if (password.length > 8 && password.length < 15) {
                passworderror.innerHTML = 'valid';
                return true;
            }

        }


            function validateform() {
                if (!validatename() || !validateemail() || !validatepassword() || !validatenumber()) {
                    submiterror.style.display = 'block'
                    submiterror.innerHTML = 'Fix all errors';
                    setTimeout(function () { submiterror.style.display = 'none'; }, 10000);
                    return false;
                }
            }
