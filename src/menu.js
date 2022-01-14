function renderHeader(){
    let header = document.createElement('h1');
    header.textContent = "Menu";

    return header;
}
function displayMenu(){
    let menu = document.createElement('div');
    menu.id = "menu";

    menu.appendChild(renderHeader());

    return menu;
}

export default displayMenu;