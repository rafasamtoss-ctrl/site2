(() => {
  const box = document.querySelector('.countdown');
  if (!box) return;
  const target = new Date(box.dataset.target).getTime();
  const fields = {days:box.querySelector('[data-days]'),hours:box.querySelector('[data-hours]'),minutes:box.querySelector('[data-minutes]'),seconds:box.querySelector('[data-seconds]')};
  const update = () => {
    let remaining = Math.max(0, target - Date.now());
    const days = Math.floor(remaining / 86400000); remaining %= 86400000;
    const hours = Math.floor(remaining / 3600000); remaining %= 3600000;
    const minutes = Math.floor(remaining / 60000); remaining %= 60000;
    const seconds = Math.floor(remaining / 1000);
    fields.days.textContent = String(days).padStart(2,'0'); fields.hours.textContent = String(hours).padStart(2,'0'); fields.minutes.textContent = String(minutes).padStart(2,'0'); fields.seconds.textContent = String(seconds).padStart(2,'0');
  };
  update(); setInterval(update, 1000);
})();
