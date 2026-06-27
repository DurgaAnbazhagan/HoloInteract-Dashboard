document.getElementById("saveBtn").addEventListener("click", function () {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields.");
        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Settings saved successfully!");
});

window.onload = function () {
    document.getElementById("name").value = localStorage.getItem("name") || "";
    document.getElementById("email").value = localStorage.getItem("email") || "";
    document.getElementById("password").value = localStorage.getItem("password") || "";
};