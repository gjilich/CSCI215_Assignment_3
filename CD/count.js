var x = document.getElementById('text');
var y = document.getElementById('outputtext');
var z = document.createTextNode('Youre typing too much!');
var l = document.createElement('p');

x.addEventListener('keyup', function(){
    var remaining = 50 - x.value.length;
    y.innerHTML = remaining;

if (remaining<0) {
  y.style.color = 'red';
  y.appendChild(l);
  l.appendChild(z);
}
});
