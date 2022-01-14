import renderHome from "./home.js";

const displayController = ( () => {

    let content = document.getElementById("content");

    const renderLanding = () => {
        content.appendChild(createButtonDiv());
        content.appendChild(renderHome());
    };

    const createButtonDiv = () => {

        let buttonDiv = document.createElement('div');

        const buttonNames = ["Home", "Menu", "Contact"];

        for(let buttonName of buttonNames){
            let btn = document.createElement('button');
            btn.textContent = buttonName;
            btn.addEventListener('click', renderPage);
            buttonDiv.appendChild(btn);
        }
        
        return buttonDiv;

    }

    const renderPage = (e) => {
        let pageName = e.target.textContent;
        console.log(pageName);
    };
})();

displayController.renderLanding();
