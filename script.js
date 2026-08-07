function registerUser() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;

    if (name === "" || email === "" || department === "") {

        alert("Please fill in all fields.");

    } else {

        alert("Registration successful!");

        document.getElementById("message").innerText =
            "Registration completed successfully!";

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("department").value = "";
    }
}