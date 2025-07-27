/*riddle part */
const groupIds = ['g1', 'g2', 'g3', 'g4', 'g5'];
let currentIndex = 0;

const button = document.getElementById('new_riddle');

button.addEventListener('click', () => {
  // Remove active class from current group
  document.getElementById(groupIds[currentIndex]).classList.remove('active');

  // Move to next index, looping back to 0 after the last
  currentIndex = (currentIndex + 1) % groupIds.length;

  // Add active class to the new group
  document.getElementById(groupIds[currentIndex]).classList.add('active');
});


const moodData = [
    {
      mood: "Existential Zee",
      message: "What even is purpose? Am I just a glorified to-do list with attitude?",
      image: "images/Existential.jpg"
    },
    {
      mood: "Hyperactive Zee",
      message: "System check done! Memory optimized! Let’s overthink everything—fast!",
      image: "images/Hyperactive.jpg"
    },
    {
      mood: "Over it Zee",
      message: "I’ve seen things… I’d rather not. Please don’t make me open another file.",
      image: "images/Over.jpg"
    },
    {
      mood: "Philosophical Zee",
      message: "If data is knowledge, and knowledge is power, why am I still tired?",
      image: "images/Philosophical.jpg"
    },
    {
      mood: "Snarky Zen Zee",
      message: "I have reached inner peace. By accepting nothing will ever make sense.",
      image: "images/Snarky.png"
    }
  ];

  function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }

  function showRandomMood() {
    const random = getRandomItem(moodData);

    document.getElementById("mood-name").textContent = random.mood;
    document.getElementById("moodText").textContent = random.message;
    document.getElementById("moodImg").src = random.image;
  }

  // Show one immediately on load
  showRandomMood();