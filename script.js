var canvas = document.getElementById("canvas");
var c = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

drawGameBoard();
function drawGameBoard () {
    let tileSize = 75;
    let row, col;
    for (row = 0; row < 8; row++) {
        for (col = 0; col < 8; col++) {
            if (col % 2 == row % 2) {
                c.beginPath();
                c.fillStyle = '#EBEBD0';
                c.fillRect(col * 75, row * 75, tileSize, tileSize);
                c.closePath();
            }
            else {
                c.beginPath();
                c.fillStyle = '#779455';
                c.fillRect(col * 75, row * 75, tileSize, tileSize);
                c.closePath();
            }
        }
    }
}