import anime from 'animejs/lib/anime.es.js';

export default class AnimateMouse {
  constructor(pointer, circle) {
    const hoverTriggers = document.querySelectorAll('.js-fill-pointer-circle, .slick-dots button')

    document.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
      pointer.style.left = `${x}px`;
      pointer.style.top = `${y}px`;
    })

    document.addEventListener('mousedown', function(){
      pointer.classList.add('clicking');
    });

    document.addEventListener('mouseup', function(){
      setTimeout(() => {
        pointer.classList.remove('clicking')
      }, 400)
    });

    hoverTriggers.forEach((trigger) => {
      trigger.addEventListener('mouseover', () => {
        this.fillCircle(circle)
      });
      trigger.addEventListener('mouseleave', () => {
        this.resetCircle(circle)
      });
    })

    this.initCircle(circle)
  }

  initCircle(circle) {
    anime({
      targets: circle,
      strokeDashoffset: [anime.setDashoffset],
      easing: 'easeInOutSine',
      delay: function(el, i) { return i * 250 },
      duration: 1,
    });
  }

  fillCircle(circle) {
    anime({
      targets: circle,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      delay: function(el, i) { return i * 250 },
      duration: 300,
    });
  }

  resetCircle(circle) {
    anime({
      targets: circle,
      strokeDashoffset: [anime.setDashoffset],
      easing: 'easeInOutSine',
      delay: function(el, i) { return i * 250 },
      duration: 300,
    });
  }
}