import home from "./home.js";
import contact from "./contact.js";
import menu from "./menu.js";

const displayController = ( () => {

    let content = document.getElementById("content");
    let currPage = "";

    const pageMapper = {
        "Home": home(),
        "Contact": contact(),
        "Menu": menu()
    };

    const renderLanding = () => {
        content.appendChild(createButtonDiv());
        content.appendChild(home());

        currPage = "Home";
    };

    const createButtonDiv = () => {

        let buttonDiv = document.createElement('div');
        buttonDiv.id = "nav";

        const buttonNames = ["Home", "Menu", "Contact"];

        for(let buttonName of buttonNames){
            let btn = document.createElement('button');
            btn.textContent = buttonName;
            btn.addEventListener('click', renderPage);
            buttonDiv.appendChild(btn);
        }
        
        return buttonDiv;

    };

    const renderPage = (e) => {
        let pageName = e.target.textContent;

        if(pageName !== currPage){
            content.removeChild(content.lastElementChild);

            content.appendChild( pageMapper[pageName]);

            currPage = pageName;
        }

    };

    return {renderLanding};
})();

displayController.renderLanding();
