fetch("nav.html")
.then(response => response.text())
.then(html => {
    document.getElementById("navbar").innerHTML = html
});
     
fetch("catForm.html")
.then(response => response.text())
.then(html => {
    document.getElementById("catForm").innerHTML = html
});

fetch('showForm.html')
.then(res => res.text())
.then (html => {
    document.getElementById('showForm').innerHTML = html
});

fetch('awardform.html')
.then(res => res.text())
.then (html => {
    document.getElementById('awardForm').innerHTML = html
});

fetch('userForm.html')
.then(res => res.text())
.then (html => {
    document.getElementById('userForm').innerHTML = html
});

fetch('loginForm.html')
.then(res => res.text())
.then (html => {
    document.getElementById('loginForm').innerHTML = html
});