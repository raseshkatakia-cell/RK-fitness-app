function openTab(tabId) {
  document.querySelectorAll('.tab, .tab-content').forEach(el => el.classList.remove('active'));
  document.querySelector(`[onclick="openTab('${tabId}')"]`).classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

// BMI
function calculateBMI() {
  const w = parseFloat(document.getElementById('bmiWeight').value);
  const h = parseFloat(document.getElementById('bmiHeight').value) / 100;
  if (w && h) {
    const bmi = (w / (h * h)).toFixed(1);
    let status = bmi < 18.5 ? "Underweight" :
                 bmi < 25 ? "Normal" :
                 bmi < 30 ? "Overweight" : "Obese";
    document.getElementById('bmiResult').innerText = `Your BMI is ${bmi} (${status})`;
  }
}

// BMR
function calculateBMR() {
  const w = parseFloat(document.getElementById('bmrWeight').value);
  const h = parseFloat(document.getElementById('bmrHeight').value);
  const a = parseFloat(document.getElementById('bmrAge').value);
  const g = document.getElementById('bmrGender').value;
  if (w && h && a) {
    const bmr = g === "male"
      ? 88.36 + (13.4 * w) + (4.8 * h) - (5.7 * a)
      : 447.6 + (9.2 * w) + (3.1 * h) - (4.3 * a);
    document.getElementById('bmrResult').innerText = `Your BMR is ${bmr.toFixed(1)} kcal/day`;
  }
}

// Body Fat %
function calculateBodyFat() {
  const waist = parseFloat(document.getElementById('bfWaist').value);
  const neck = parseFloat(document.getElementById('bfNeck').value);
  const height = parseFloat(document.getElementById('bfHeight').value);
  const gender = document.getElementById('bfGender').value;
  if (waist && neck && height) {
    const bf = gender === "male"
      ? 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450
      : 495 / (1.29579 - 0.35004 * Math.log10(waist + neck - height) + 0.22100 * Math.log10(height)) - 450;
    document.getElementById('bfResult').innerText = `Your Body Fat % is ${bf.toFixed(1)}%`;
  }
}

// Ideal Weight
function calculateIdealWeight() {
  const h = parseFloat(document.getElementById('iwHeight').value);
  const g = document.getElementById('iwGender').value;
  if (h) {
    const ideal = g === "male"
      ? 50 + 0.91 * (h - 152.4)
      : 45.5 + 0.91 * (h - 152.4);
    document.getElementById('iwResult').innerText = `Your Ideal Weight: ${ideal.toFixed(1)} kg`;
  }
}

// WHR
function calculateWHR() {
  const w = parseFloat(document.getElementById('whrWaist').value);
  const h = parseFloat(document.getElementById('whrHip').value);
  if (w && h) {
    const whr = (w / h).toFixed(2);
    document.getElementById('whrResult').innerText = `Your WHR is ${whr}`;
  }
}

// Share App
function shareApp() {
  if (navigator.share) {
    navigator.share({
      title: 'RK Fitness App',
      text: 'Try this all-in-one fitness calculator!',
      url: window.location.href
    });
  } else {
    alert("Sharing not supported on this device.");
  }
}

// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
