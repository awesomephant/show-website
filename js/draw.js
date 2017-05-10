var config = {
    width: [30, 130]
}

var width = 0;
var el = document.createElement('canvas');
document.body.appendChild(el);
var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var shufflePen = function () {
    c.strokeStyle = randomColor();
    width = getRandomInt(config.width[0], config.width[1]);
}
var getRelativeX = function (x) {
    return x - el.offsetLeft;
};
var getRelativeY = function (y) {
    return y - el.offsetTop;
};
el.width = window.innerWidth;
el.height = window.innerHeight;
var oldX, oldY;
var c = el.getContext('2d');
c.lineCap = 'round';
shufflePen();
document.addEventListener('mousemove', function (e) {
	var x = getRelativeX(e.pageX);
	var y = getRelativeY(e.pageY);
	var speed = Math.abs((x - oldX) + (y - oldY));
	c.beginPath();
	c.moveTo(oldX, oldY)
	c.lineTo(x, y)
	c.lineWidth = width;
   c.stroke();
	oldX = x;
	oldY = y;
})
document.addEventListener('click', shufflePen)
