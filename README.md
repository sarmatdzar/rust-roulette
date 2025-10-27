# 🎰 Rust-Themed Casino Wheel

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A single-page web application featuring the iconic casino wheel from the popular game Rust. Experience the thrill of the wheel spin with authentic mechanics recreated for web browsers.

## 🎮 Live Demo

![Rust Wheel Preview](https://via.placeholder.com/800x400/2c2c2c/ffffff?text=Rust+Casino+Wheel)

## ✨ Features

- **🎯 Authentic Rust Wheel** - Faithful recreation of the casino wheel from Rust
- **💰 Realistic Betting System** - Place bets with various multipliers just like in-game
- **⏰ Automatic Spins** - Wheel spins automatically every 15 seconds
- **🎵 Original Sound Effects** - Immersive audio from the Rust casino experience
- **📱 Fully Responsive** - Play on any device
- **🎪 Visual Win Celebrations** - Exciting effects for winning spins

## 🚀 Quick Start

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/rust-casino-wheel.git
   ```

2. **Open in browser**
   ```bash
   cd rust-casino-wheel
   # Simply open index.html in your browser
   ```

### 📋 How to Play

#### 🎯 Getting Started
1. **Set your bet** - Use ▲ and ▼ buttons to adjust your bet amount
2. **Choose multiplier** - Select your desired payout multiplier (x1, x3, x5, x10, x20)
3. **Watch the wheel** - The Rust casino wheel spins automatically every 15 seconds

#### 💰 Payout System
- **Win Amount = Bet × Multiplier**
- Win when the wheel lands on your selected multiplier sector
- Starting balance: **1000₪** (Rust's in-game currency)

#### ⚡ Controls
- **Bet Adjusters**: Increase/decrease your wager
- **Multiplier Selection**: Choose from Rust's authentic payout options
- **Spin Timer**: Countdown to next automatic spin

## 📱 Responsive Design

Experience the Rust casino wheel on any device:

### 🖥️ Desktop (1200px+)
- Full-scale wheel display
- Console-like interface layout
- Smooth, realistic spinning physics

### 📱 Tablet (768px - 1199px)
- Optimized wheel size
- Comfortable touch controls
- Maintained game atmosphere

### 📱 Mobile (320px - 767px)
- Vertical interface optimized for touch
- Large, easy-to-press buttons
- Fully functional gaming experience

## 🛠️ Technologies & Implementation

### Frontend Stack
- **HTML5** - Semantic structure
- **CSS3** - Responsive design, CSS animations, Flexbox
- **JavaScript (ES6+)** - Core game mechanics
- **jQuery** - Smooth DOM interactions

### 🎨 Rust-Accurate Implementation

#### Authentic Wheel Mechanics
```javascript
// Realistic sector mapping from Rust
let nums1 = [2,30,59,90,120,148,178,208,246,274,304,332]; // x1 sectors
let nums3 = [43,103,161,290,347]; // x3 sectors
// ... authentic Rust wheel configuration
```

#### Smooth Wheel Physics
```javascript
function rotateSmooth(targetDeg, bt) {
  // Realistic spinning with easing
  const eased = easeInOut(progress);
  // Multiple rotations for authentic feel
  const extraSpins = 3 * 360;
}
```

#### Game State Management
- **balance** - Your current scrap amount
- **totalBet** - Active wager
- **whatBet** - Chosen multiplier
- **isSpinning** - Wheel movement state

### 🎵 Authentic Audio
- `sounds/click.wav` - Rust interface sounds
- `sounds/spin.mp3` - Wheel spinning audio
- `sounds/win.mp3` - Victory celebration

## 📁 Project Structure

```
rust-casino-wheel/
├── index.html          # Main game interface
├── style.css           # Rust-themed styling
├── script.js           # Wheel mechanics & game logic
├── sounds/             # Authentic Rust audio
│   ├── click.wav
│   ├── spin.mp3
│   └── win.mp3
├── images/             # Rust-themed graphics
└── README.md          # Project documentation
```

## 🎯 Rust Wheel Mechanics

### Authentic Probability Distribution
- **x1**: 12 sectors - 33.3% chance (Most common)
- **x3**: 5 sectors - 13.9% chance
- **x5**: 4 sectors - 11.1% chance
- **x10**: 2 sectors - 5.6% chance
- **x20**: 1 sector - 2.8% chance (Jackpot)

### True-to-Game Mathematics
```javascript
// Authentic Rust payout calculation
if (whatNum === whatBet && totalBet != 0) {
  win = bt + bt * whatBet; // Original bet + winnings
  totalWin += win - bt;    // Net profit calculation
}
```

## 🔧 Compatibility

- **Browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Devices**: Desktop, Tablet, Mobile
- **Resolutions**: Optimized for 320px - 1920px+

## 🚀 Performance Optimizations

- **Butter-smooth animations** using `requestAnimationFrame`
- **Efficient jQuery selectors** for optimal performance
- **Minimal DOM reflows** during gameplay
- **Fast asset loading** for immediate play

## 📄 License & Attribution

This project is a fan-made recreation for educational and entertainment purposes. Rust is a trademark of Facepunch Studios. All game assets and concepts are property of their respective owners.

---

<div align="center">

**🎰 Spin the wheel and test your luck! 🎰**

*An authentic Rust casino experience in your browser*

</div>
