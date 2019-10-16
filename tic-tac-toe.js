window.onload = function () {
    let boardDiv = document.getElementById("board");
    for (let ele of boardDiv.children) {
        ele.className = 'square';
    }
}