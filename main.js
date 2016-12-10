
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('webkitTransitionEnd', function(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}, false));
window.addEventListener('keydown', function(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0; //rewind
  audio.play();
  key.classList.add('playing');

});
