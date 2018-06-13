var canvas = document.getElementById("canvas");
var c = canvas.getContext('2d');
var tileSize = 75;

canvas.width = 600;
canvas.height = 600;

drawGameBoard();
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: Math.floor((evt.clientX - rect.left) / 75),
      y: Math.floor((evt.clientY - rect.top) / 75)
    };
}
function drawGameBoard () {
    let row, col, i = 0, j = 0;
    let rect1 = [], rect2 = [];
    for (row = 0; row < 8; row++) {
        for (col = 0; col < 8; col++) {
            if (col % 2 == row % 2) {
                rect1[i] = new DrawReact(col, row, tileSize, '#EBEBD0');
                rect1[i].draw();
                i++;
            }
            else {
                rect2[j] = new DrawReact(col, row, tileSize, '#779455');
                rect2[j].draw();
                j++;
            }
        }
    }
}
function DrawReact (col, row, tileSize, color) {
    this.col = col;
    this.row = row;
    this.tileSize = tileSize;
    this.color = color;

    this.draw = function () {
        c.beginPath();
        c.fillStyle = this.color;
        c.fillRect(this.col * 75, this.row * 75, this.tileSize, this.tileSize);
        c.closePath();
    }
    this.changeColor = function (newColor) {
        c.fillStyle = newColor;
        c.fillRect(this.col * 75, this.row * 75, this.tileSize, this.tileSize);
    }
}

canvas.addEventListener('mousemove', function(evt) {
    console.log(getMousePos(canvas, evt));
    
});