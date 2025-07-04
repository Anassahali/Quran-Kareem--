fetch('prayer-times.json')
  .then(response => response.json())
  .then(data => {
    const today = new Date().toISOString().split('T')[0];
    const todayPrayer = data.times.find(entry => entry.date === today);

    if (todayPrayer) {
      document.getElementById('fajr-time').textContent = todayPrayer.Fajr;
      document.getElementById('dhuhr-time').textContent = todayPrayer.Dhuhr;
      document.getElementById('asr-time').textContent = todayPrayer.Asr;
      document.getElementById('maghrib-time').textContent = todayPrayer.Maghrib;
      document.getElementById('isha-time').textContent = todayPrayer.Isha;
    }
  })
  .catch(error => console.error("فشل تحميل البيانات:", error));
