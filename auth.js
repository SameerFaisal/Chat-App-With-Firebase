function signUp() {
    let email = document.getElementById("inputEmail4").value;
    let password = document.getElementById("inputPassword4").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            console.log(result)
            firebase.database().ref(`/user/userData/${result.user.uid}`).set({
                firstName,
                lastName,
                email,
                password
            }).then(() => {
                alert("Congratulation you have successfully created your account");
                window.location.href = "chat.html"
            }).catch((err) => {
                alert(err.message)
            })
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
                // ...
        });
    email.value = "";
    password.value = "";
    firstName.value = "";
    lastName.value = "";
}





















////////////////// Sign in ////////////////////////


function signIn() {
    let email = document.getElementById("Email1");
    let password = document.getElementById("Password1");
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((result) => {
            alert("Congratulation you have succesfully log in")
            window.location.href = "chat.html"
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });
    email.value = "";
    password.value = "";

}