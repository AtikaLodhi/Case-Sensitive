let case1List = document.querySelectorAll(".babyCase");
let case2List = document.querySelectorAll(".cakeCase");
let case3List = document.querySelectorAll(".nightCase");

let show_case1 = document.querySelector(".one");
let show_case2 = document.querySelector(".two");
let show_case3 = document.querySelector(".three");


function showCase(selectedCase) {
  [show_case1, show_case2, show_case3].forEach(div => {
    div.classList.remove("active");
  });

  selectedCase.classList.add("active");
}

// Add click listeners
case1List.forEach(el => el.addEventListener("click", () => showCase(show_case1)));
case2List.forEach(el => el.addEventListener("click", () => showCase(show_case2)));
case3List.forEach(el => el.addEventListener("click", () => showCase(show_case3)));

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

let riddle_btn = document.querySelector(".riddles");
let case_btn = document.querySelector(".cases");
let progress_btn = document.querySelector(".progress");
let row_c = document.querySelector(".case-row")
let row_r = document.querySelector(".riddle-row")

riddle_btn.addEventListener("click", function () {
  case_btn.classList.remove("green");
  case_btn.classList.add("beige");

  riddle_btn.classList.add("green");
  riddle_btn.classList.remove("beige");

  progress_btn.classList.remove("green");
  progress_btn.classList.add("beige");

  row_c.style.display = "none"
  row_r.style.display = "block"
});

case_btn.addEventListener("click", function () {
  case_btn.classList.add("green");
  case_btn.classList.remove("beige");

  riddle_btn.classList.remove("green");
  riddle_btn.classList.add("beige");

  progress_btn.classList.remove("green");
  progress_btn.classList.add("beige");
  row_c.style.display = "flex"
  row_r.style.display = "none"
});

progress_btn.addEventListener("click", function () {
  case_btn.classList.remove("green");
  case_btn.classList.add("beige");

  riddle_btn.classList.remove("green");
  riddle_btn.classList.add("beige");

  progress_btn.classList.add("green");
  progress_btn.classList.remove("beige");
});





    let selectedGender = null;
    let selectedImagePath = "";

    document.getElementById("male").addEventListener("click", function() {
      selectGender("Male", "images/male-pfp.png");
      document.getElementById("male").style.width = '85px'
      document.getElementById("male").style.height= '85px'
      document.getElementById("female").style.width = '80px'
      document.getElementById("female").style.height= '80px'
    });

    document.getElementById("female").addEventListener("click", function() {
      selectGender("Female", "images/female-pfp.png");
      document.getElementById("female").style.width = '85px'
      document.getElementById("female").style.height= '85px'
      document.getElementById("male").style.width = '80px'
      document.getElementById("male").style.height= '80px'
    });

    function selectGender(gender, imagePath) {
      selectedGender = gender;
      selectedImagePath = imagePath;
      document.getElementById("male").classList.remove("selected");
      document.getElementById("female").classList.remove("selected");
      document.getElementById(gender.toLowerCase()).classList.add("selected");
    }

    function submitUser() {
      const name = document.getElementById("username").value.trim();

      if (!name || !selectedGender) {
        alert("Zee says: A name and a face, please. We're not solving crimes in the shadows.");
        return;
      }

      // Show in HTML
      document.getElementById("detectiveName").innerText = `Detective ${name}`;
      document.getElementById("profile").src = selectedImagePath;
      document.getElementById("profile2").src = selectedImagePath;
      document.getElementById("formOverlay").style.display = "none"
    }

