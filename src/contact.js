function renderHeader(){
    let header = document.createElement('h1');
    header.textContent = "Contact Us";
    return header;
}

function renderContact(){
    let contact = document.createElement('div');
    contact.id = "contact";

    contact.appendChild(renderHeader());

    return contact;
}


export default renderContact;