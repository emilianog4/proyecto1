document.getElementById('modalBtn').onclick = function () {
    document.getElementById('myModal').style.display = 'block';
}

window.onclick = function (event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = 'none';
    }
}
