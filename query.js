function submit() {
document.getElementById('buttons').style.display = 'block';
document.getElementById('content').innerHTML = '';
var val = document.getElementById('search').value;
var newelement = document.createElement('script');
newelement.src = `https://www.googleapis.com/customsearch/v1?key=AIzaSyDtMrQJ3KlkxY87DiLQFjkmgctz5niI9MU&cx=003606982592251140240:5xbiwoxb3m0&q=${val}&callback=hndlr`;
newelement.id = 'mainscript';
document.body.appendChild(newelement);
}


// disclaimer: do not share your code WITH your API key showing; otherwise it is at risk at being stolen! keep it safe :)