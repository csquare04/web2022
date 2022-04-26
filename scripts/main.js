
// Start dark mode if it's after 6:59:59pm
// Start dark mode if it's after 6:59:59pm
if (new Date().getHours() > 10) {
  //alert(new Date().getHours());
  const html = document.querySelector('html');
  html.style.backgroundColor = 'black';
  html.style.color = 'white';
}

if (new Date().getHours() > 10) {
  const header = document.querySelector('header');
  header.style.backgroundColor = 'black';
  header.style.color = 'white';
}
if (new Date().getHours() > 10) {
  const footer = document.querySelector('footer');
  footer.style.backgroundColor = 'black';
  footer.style.color = 'white';
}
