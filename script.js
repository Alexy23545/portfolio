document.getElementById("changeColorBtn").addEventListener("click", function() {
    const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#e6ccff"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
