function submit(val) {
document.getElementById('buttons').style.display = 'block';
document.getElementById('content').innerHTML = '';
var newelement = document.createElement('script');
newelement.src = `https://www.googleapis.com/customsearch/v1?key=AIzaSyDtMrQJ3KlkxY87DiLQFjkmgctz5niI9MU&cx=003606982592251140240:5xbiwoxb3m0&q=${val}&cx=c02f25697ef11f644&callback=hndlr`;
newelement.id = 'mainscript';
document.body.appendChild(newelement);
}