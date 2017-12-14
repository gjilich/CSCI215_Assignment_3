// var img = document.getElementById('div').getElementsByTagName('img');
// console.log('I Identified the elements!');
// img.onlick = change1();
// console.log('I am about to run the function!');
// function change1() {
//     img.style.size = '75%';
//     y.display = 'block';
// }
//
// console.log('I got this far!');

// var y = //small closeout image
// y.onclick = change2();
//
// function change2() {
//     x.style.width = '10%';
//     y.display = 'none';
//
// }
//
// x.onmouseover;

var g = document.getElementsByTagName('img');
var originHeight = g[0].height;
var originWidth = g[0].width;

for (var i=0; i<g.length; i++) {
g[i].addEventListener('mouseover', function(){
    alert('I an feeling clicks');
    this.height = 100;
    this.width = 120;
});

