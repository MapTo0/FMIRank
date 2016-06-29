(function() {
    var authDB = firebase.auth(),
        email = document.getElementById("email"),
        username = document.getElementById("username"),
        password = document.getElementById("password"),
        authBtn = document.getElementById("register-btn"),
        loginBtn = document.getElementById("login-btn"),
        loginEmail = document.getElementById("login-email"),
        loginPassword = document.getElementById("login-password");

    authDB.onAuthStateChanged(function(user) {
        if (user) {
            user.updateProfile({
                displayName: username.value,
            }).then(function() {
                console.log("updated");
            }, function(error) {
                console.log("not updated");
            });
        } else {
            console.log("we dont  have an user");
        }
    });

    authDB.signOut();


    authBtn.addEventListener("click", function(event) {
        signInUser(getAuthInfo());
    });

    loginBtn.addEventListener("click", function(event) {
        signInUser(getAuthInfo());
    });

    function getAuthInfo() {
        return {
            email: email.value,
            password: password.value,
        };
    }

    function signUpUser(userData) {
        firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password).catch(function(error) {
            // handle error
        });
    };

    function signInUser(userData) {
        authDB.signInWithEmailAndPassword(userData.email, userData.password).catch(function(error) {
            // handler error
        })
    };

})()
