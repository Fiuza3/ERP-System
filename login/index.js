const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const darkMode = document.querySelector('.dark-mode');

// Função para alternar entre os modos claro e escuro
darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');

    // Salvando o estado do modo escuro no localStorage
    const isDarkModeEnabled = document.body.classList.contains('dark-mode-variables');
    localStorage.setItem('darkModeEnabled', isDarkModeEnabled);
});


// Verifica se o modo escuro estava ativado antes da atualização
const savedDarkModeState = localStorage.getItem('darkModeEnabled');
if (savedDarkModeState) {
    document.body.classList.toggle('dark-mode-variables', savedDarkModeState === 'true');
    const darkModeIcons = darkMode.querySelectorAll('span');
    darkModeIcons[0].classList.toggle('active', savedDarkModeState === 'true');
    darkModeIcons[1].classList.toggle('active', savedDarkModeState === 'true');
}

