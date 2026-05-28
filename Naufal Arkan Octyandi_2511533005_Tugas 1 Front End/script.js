document.getElementById("btnBio").addEventListener("click", function() {
  const bioDiv = document.getElementById("bio");
  bioDiv.innerHTML = `
    <p><strong>Nama:</strong> Arkan Saka </p>
    <p><strong>Bootcamp:</strong> Front-End 2026</p>
    <p><strong>Kota:</strong> Sungai Penuh</p>
  `;
});

document.getElementById("btnColor").addEventListener("click", function() {
  const card = document.querySelector(".card");
  if (card.style.backgroundColor === "lightblue") {
    card.style.backgroundColor = "lightgreen";
  } else if (card.style.backgroundColor === "lightgreen") {
    card.style.backgroundColor = "lightpink";
  } else {
    card.style.backgroundColor = "lightblue";
  }
});

document.getElementById("btnAdd").addEventListener("click", function() {
  const inputField = document.getElementById("inputText");
  const inputValue = inputField.value.trim();

  if (inputValue !== "") {
    const li = document.createElement("li");
    li.textContent = inputValue;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", function() {
      li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById("list").appendChild(li);

    inputField.value = "";
  } else {
    alert("Isi dulu inputnya bro!");
  }
});

document.documentElement.addEventListener("dblclick", function() {
  alert("Kamu nge-double click di halaman utama!");
});
