const change_icon = document.getElementsByClassName('hero-button2')[0];

change_icon.addEventListener('mouseover', changeColor);
change_icon.addEventListener('mouseout', resetColor);

function changeColor() {
  const getIcon = document.getElementById('enter-icon');
  const getLabel = document.getElementById('enter-label');
  getIcon.style.color = '#f7b500';
  getLabel.style.color = '#f7b500';
}

function resetColor() {
  const getIcon = document.getElementById('enter-icon');
  const getLabel = document.getElementById('enter-label');
  getIcon.style.color = '#ffffff';
  getLabel.style.color = '#ffffff';
}

const change_color = document.getElementsByClassName('play-button')[0];

change_color.addEventListener('mouseover', changeColor1);
change_color.addEventListener('mouseout', resetColor1);

function changeColor1() {
  const getIcon = document.getElementById('play-icon');
  getIcon.style.color = '#000000';
}

function resetColor1() {
  const getIcon = document.getElementById('play-icon');
  getIcon.style.color = '#ffffff';
}