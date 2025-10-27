let nums1 = [2,30,59,90,120,148,178,208,246,274,304,332];
let nums3 = [43,103,161,290,347];
let nums5 = [14,132,234,261];
let nums10 = [317, 191];
let nums20 = [72];
let nums = [...nums1, ...nums3, ...nums5, ...nums10, ...nums20];

let balance = 1000;
let bet = 0;
let win = 0;
let whatNum = 0;
let totalBet = 0;
let whatBet = 0;
let lastAngle = 0;
let isSpinning = false;
let totalWin = 0;

let countdown = 15;
let timerId = null;
let intervalId;

function RandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function updateBalance() {
  $(".balance").text(`${balance}₪`);
  $(".totalWin").text(`${totalWin}₪`);
}

function getSelectedSector(targetDeg) {
  const selected = nums.reduce((prev, curr) =>
    Math.abs(curr - targetDeg) < Math.abs(prev - targetDeg) ? curr : prev
  );
  if (nums1.includes(selected)) return 1;
  if (nums3.includes(selected)) return 3;
  if (nums5.includes(selected)) return 5;
  if (nums10.includes(selected)) return 10;
  if (nums20.includes(selected)) return 20;
  return 0;
}

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function rotateSmooth(targetDeg, bt) {
  if (isSpinning) return;
  isSpinning = true;

  let startTs = null;
  const duration = 200;
  const startAngle = ((lastAngle % 360) + 360) % 360;
  const extraSpins = 3 * 360;
  const delta = (targetDeg - startAngle + 360) % 360;
  const finalAngle = lastAngle + extraSpins + delta;

  function step(ts) {
    if (startTs == null) startTs = ts;
    let progress = (ts - startTs) / duration;
    if (progress > 1) progress = 1;

    const eased = easeInOut(progress);
    const currentAngle = lastAngle + eased * (finalAngle - lastAngle);

    $(".circle").css("transform", `rotate(${currentAngle}deg)`);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      lastAngle = finalAngle;
      const resultMultiplier = getSelectedSector(targetDeg);
      checkResult(resultMultiplier, bt);
      isSpinning = false;
    }
  }

  requestAnimationFrame(step);
}

function checkResult(resultMultiplier, bt) {
  whatNum = resultMultiplier;
  if (whatNum === whatBet && totalBet != 0) {
    win = bt + bt * whatBet;
    totalWin += win - bt;

    $(".win-amount").text("+" + (win - bt) + "₪");

    setTimeout(function() {
      new Audio('sounds/win.mp3').play();
      $(".win-overlay").fadeIn(400);
      balance += win;
      updateBalance();
    }, 5000);
    setTimeout(function() {
      $(".win-overlay").fadeOut(400);
    }, 7000);
  } else {
    setTimeout(function() {
      updateBalance();
    }, 5000);
    win = 0;
  }
}

function updateBet(delta) {
  if (delta > 0 && totalBet < balance) {
    totalBet++;
    $('.bet-choice-info-text').text(totalBet);
    new Audio('sounds/click.wav').play();
  } else if (delta < 0 && totalBet > 0) {
    totalBet--;
    $('.bet-choice-info-text').text(totalBet);
    new Audio('sounds/click.wav').play();
  }
}

function setBetValue(val) {
  whatBet = val;
  $(".canvasbloc").hide();

  $(".multi-choice-item-button-1, .multi-choice-item-button-2, .multi-choice-item-button-3, .multi-choice-item-button-4, .multi-choice-item-button-5").removeClass("active");

  const id =
    val === 1 ? ".multi-choice-item-button-1" :
    val === 3 ? ".multi-choice-item-button-2" :
    val === 5 ? ".multi-choice-item-button-3" :
    val === 10 ? ".multi-choice-item-button-4" : ".multi-choice-item-button-5";

  $(id).addClass("active");
}

function startCountdown() {
  countdown = 15
  $(".countdown").text(countdown + "s");

  timerId = setInterval(() => {
    countdown--;
    $(".countdown").text(countdown + "s");

    if (countdown <= 0) {
      clearInterval(timerId);
      autoSpin();
      startCountdown();
    }
  }, 1000);
}

function autoSpin() {
  if (isSpinning) return;
  if (totalBet <= balance && totalBet >= 0) {
    balance -= totalBet;

    const randIndex = RandomInt(0, nums.length);
    const targetDeg = nums[randIndex];

    new Audio('sounds/spin.mp3').play();
    rotateSmooth(targetDeg, totalBet);
  }
}

$('.bet-choice-info-text').text(totalBet);
updateBalance();

$(document).on("click", ".btn-close-overlay", function() {
  $(".win-overlay").fadeOut(300);
});

$('.bet-choice-button-up').on('click', function() {
  updateBet(1);
});

$('.bet-choice-button-up').on('mousedown touchstart', function() {
  intervalId = setInterval(() => updateBet(1), 150);
});

$('.bet-choice-button-up').on('mouseup mouseleave touchend', function() {
  clearInterval(intervalId);
});

$('.bet-choice-button-down').on('click', function() {
  updateBet(-1);
});

$('.bet-choice-button-down').on('mousedown touchstart', function() {
  intervalId = setInterval(() => updateBet(-1), 150);
});

$('.bet-choice-button-down').on('mouseup mouseleave touchend', function() {
  clearInterval(intervalId);
});

$('.multi-choice-item-button-1').on('click', () => setBetValue(1));
$('.multi-choice-item-button-2').on('click', () => setBetValue(3));
$('.multi-choice-item-button-3').on('click', () => setBetValue(5));
$('.multi-choice-item-button-4').on('click', () => setBetValue(10));
$('.multi-choice-item-button-5').on('click', () => setBetValue(20));

$("#rotate").remove();

$(document).ready(function() {
  startCountdown();
});