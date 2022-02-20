function hndlr(response) {
for (var i = 0; i < response.items.length; i++) { 
  document.getElementById('content').innerHTML += `
  <div style="align-items: center;">
    <a style="color: slategray; font-size: 12px; text-decoration: none;" href=${response.items[i].link} target="_blank">${response.items[i].link}</a>
    <a target="_blank" href=${response.items[i].link} style="text-decoration: none;">
      <h2 style="margin-top: 2px;">${response.items[i].title}</h2>
    </a>
    <div style="margin-top: -8px;">
      ${response.items[i].htmlSnippet}
    </div>
  </div>`;
}
}