function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');
  const party = document.getElementById('confetti');
  const diclaimer = document.getElementById('r');
  const birth = document.getElementById('birth');
  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clock.setAttribute('style', 'display:none;');
      diclaimer.setAttribute('style', 'display:block;');
      birth.setAttribute('style', 'display:none;');
      confetti.start(20000, 600, 700);
      try {
        clearInterval(timeinterval);
      } catch (error) {
        console.log('countdown over');
      }
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = '2020-06-27T18:33';
initializeClock('clockdiv', deadline);
