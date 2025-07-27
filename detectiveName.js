let selectedGender = null;
    let selectedImagePath = "";

    // Check localStorage on load
    window.onload = function () {
      const name = localStorage.getItem("username");
      const gender = localStorage.getItem("gender");
      const image = localStorage.getItem("image");

      if (name && gender && image) {
        showProfile(name, gender, image);
      }
    };

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

      // Save to localStorage
      localStorage.setItem("username", name);
      localStorage.setItem("gender", selectedGender);
      localStorage.setItem("image", selectedImagePath);

      showProfile(name, selectedGender, selectedImagePath);

    }

    function showProfile(name, gender, image) {
      const elements = document.querySelectorAll(".detectiveName");
  elements.forEach(el => {
    el.innerText = `Detective ${name}`;
  });
      document.getElementById("profile").src = image;
      document.getElementById("profile2").src = image;
      document.getElementById("formOverlay").style.display = "none"
    }
    


    document.getElementById("edit").addEventListener("click", function () {
  // Pre-fill existing values
  const name = localStorage.getItem("username");
  const gender = localStorage.getItem("gender");

  if (name) {
    document.getElementById("username").value = name;
  }

  if (gender === "Male") {
    document.getElementById("male").classList.add("selected");
    document.getElementById("female").classList.remove("selected");
    selectedGender = "Male";
    selectedImagePath = "images/male-pfp.png";
  } else if (gender === "Female") {
    document.getElementById("female").classList.add("selected");
    document.getElementById("male").classList.remove("selected");
    selectedGender = "Female";
    selectedImagePath = "images/female-pfp.png";
  }

  // Show form again
  document.getElementById("formOverlay").style.display = "flex";
});

