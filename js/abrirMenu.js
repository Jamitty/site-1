function abrirMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.height == 0 || menu.style.height == 0 + 'px') {
        menu.style.height = 12 + "em";
    } else {
        menu.style.height = 0;
    }
}





document.getElementById('abrir-menu').addEventListener('click', abrirMenu);
