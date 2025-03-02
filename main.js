fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const listContainer = document.createElement('div');
    listContainer.className = 'user-list';

    data.forEach(user => {
      const userCard = document.createElement('div');
      userCard.className = 'user-card';

      // Фейковый аватар (по ID)
      const avatarUrl = `https://i.pravatar.cc/100?img=${user.id}`;

      userCard.innerHTML = `
        <img src="${avatarUrl}" alt="${user.name}" class="avatar">
        <div class="user-info">
          <h3>${user.name}</h3>
          <p><a href="mailto:${user.email}">${user.email}</a></p>
          <p>📍 ${user.address.city}</p>
        </div>
      `;

      listContainer.appendChild(userCard);
    });

    document.querySelector('.wrapper').appendChild(listContainer);
  });

// Переключатель тем
const toggleButton = document.createElement("button");
toggleButton.id = "toggleTheme";
toggleButton.innerText = "🌙 Switch Theme";
document.body.prepend(toggleButton);

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleButton.innerText = document.body.classList.contains("dark-mode") ? "☀️ Switch Theme" : "🌙 Switch Theme";
});
