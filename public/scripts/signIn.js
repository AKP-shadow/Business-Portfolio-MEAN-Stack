function singInCall(){
    overlay = document.getElementById('overlay')
    overlay.innerHTML =  `<div class="login-container">



    <div class="left">
        <div class="signIn">
            <h1>AK Industries</h1>
            <p> </p>
            <span>
                <p>login with social media</p>
                <a href="#"><i class="fa fa-google" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </span>
        </div>
    </div>


    <div class="right">
        <h5>Login </h5>
        <p class="small-text">Don't have an account? <a href="#!signup">Create Your Account</a> it takes less than
            a
            minute</p>
        <form name="formSign" method="post" id="formSignIn" action="/login">
            <div class="inputs">
                <div class="email-field" ng-controller="myCtrl">
                    <input name="username" id="uname" type="email" placeholder="Email" ng-model="username"
                        onchange="{i=1;}">
                    <br>
                    <span class="error email-error" ng-if="formSign.username.$invalid && formSign.username.$dirty">
                        <i class="bx bx-error-circle error-icon"></i>
                        <p class="error-text">Please enter a valid email</p>
                    </span>


                </div>
                <div class="pass-field">
                    <input name="password" id="passwrd" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" type="password"
                        minlength="8" maxlength="15" placeholder=" Password" required>
                    <span class="error password-error">
                        <i class="bx bx-error-circle error-icon"></i>
                        <p class="error-text">
                            Please enter atleast 8 charatcer with number, symbol, small and
                            capital letter.
                        </p>
                    </span>
                </div>
            </div>

            <br><br>

            <div class="remember-me--forget-password">

                <label>
                    <input type="checkbox" name="item" checked />
                    <span class="text-checkbox">Remember me</span>
                </label>
                <a href="#">
                    <p>forget password?</p>
                </a>
            </div>

            <br>

            <button onclick="SignInAction();console.log(window.location.href)">Login</button>


        </form>

    </div>
    <div class="fas fa-times"></div>
</div>`
}

function singUpCall(){
    overlay = document.getElementById('overlay')
    overlay.innerHTML =   `<link rel="stylesheet" href="styles/signUpstyle.css">
    <div class="container">
        <header>Registration</header>
    
        <form action="#">
            <div class="form first">
                <div class="details personal">
                    <span class="title">Personal Details</span>
    
                    <div class="fields">
                        <div class="input-field">
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your name" required>
                        </div>
    
                        <div class="input-field">
                            <label>Date of Birth</label>
                            <input type="date" placeholder="Enter birth date" required>
                        </div>
    
                        <div class="input-field">
                            <label>Email</label>
                            <input type="text" placeholder="Enter your email" required>
                        </div>
    
                        <div class="input-field">
                            <label>Mobile Number</label>
                            <input type="number" placeholder="Enter mobile number" required>
                        </div>
    
                        <div class="input-field">
                            <label>Gender</label>
                            <select required>
                                <option disabled selected>Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </div>
    
                        <div class="input-field">
                            <label>Occupation</label>
                            <input type="text" placeholder="Enter your ccupation" required>
                        </div>
                    </div>
                </div>
    
                <div class="details ID">
                    <span class="title">Company Details</span>
    
                    <div class="fields">
                        <div class="input-field">
                            <label>Company name</label>
                            <input type="text" placeholder="Enter Comapny name" required>
                        </div>
    
                        <div class="input-field">
                            <label>Company GST No.</label>
                            <input type="number" placeholder="Enter GST No." required>
                        </div>
    
                        <div class="input-field">
                            <label>Field</label>
                            <input type="text" placeholder="Enter field of expertise" required>
                        </div>
    
    
                    </div>
    
                    <button class="nextBtn">
                        <span class="btnText">Next</span>
                        <i class="uil uil-navigator"></i>
                    </button>
                </div>
            </div>
    
            <div class="form second">
                <div class="details address">
                    <span class="title">Office Address Details</span>
    
                    <div class="fields">
                        <div class="input-field">
                            <label>Address Type</label>
                            <input type="text" placeholder="Permanent or Temporary" required>
                        </div>
    
                        <div class="input-field">
                            <label>Nationality</label>
                            <input type="text" placeholder="Enter nationality" required>
                        </div>
    
                        <div class="input-field">
                            <label>State</label>
                            <input type="text" placeholder="Enter your state" required>
                        </div>
    
                        <div class="input-field">
                            <label>District</label>
                            <input type="text" placeholder="Enter your district" required>
                        </div>
    
                        <div class="input-field">
                            <label>Block Number</label>
                            <input type="number" placeholder="Enter block number" required>
                        </div>
    
                        <div class="input-field">
                            <label>Ward Number</label>
                            <input type="number" placeholder="Enter ward number" required>
                        </div>
                    </div>
                </div>
    
    
                <div class="buttons">
                    <div class="backBtn">
                        <i class="uil uil-navigator"></i>
                        <span class="btnText">Back</span>
                    </div>
    
                    <button class="sumbit">
                        <span class="btnText">Submit</span>
                        <i class="uil uil-navigator"></i>
                    </button>
                </div>
            </div>
        </form>
    </div>
    
    <script>
        const form = document.querySelector("form"),
            nextBtn = form.querySelector(".nextBtn"),
            backBtn = form.querySelector(".backBtn"),
            allInput = form.querySelectorAll(".first input");
    
    
    nextBtn.addEventListener("click", ()=> {
        allInput.forEach(input => {
            if(input.value != ""){
                form.classList.add('secActive');
            }else{
                form.classList.remove('secActive');
            }
        })
    })
    
    backBtn.addEventListener("click", () => form.classList.remove('secActive'));
    </script>`
}