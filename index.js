function sim() {
    alert("você aceitou um rolê dahora :o");
}

function cai(btn) {
    btn.style.position = "absolute";
    btn.style.bottom = pose(10, 90);
    btn.style.left = pose(0, 90);
    console.log("errouuuuu");
}

function pose(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}