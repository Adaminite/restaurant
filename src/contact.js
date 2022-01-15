function renderHeader(){
    let header = document.createElement('h1');
    header.textContent = "Contact Us";
    header.id = "contact-header";
    
    return header;
}

function renderContacts(){
    let contactDiv = document.createElement('div');
    contactDiv.id = "contacts";

    let list = document.createElement('ul');

    let phone = document.createElement('li')
    phone.textContent = "Phone: 1-234-567-8901";

    let restaurantEmail = document.createElement('li');
    restaurantEmail.textContent = "Restaurant Email: omarskabobhouse@real.com";

    let ownerEmail = document.createElement('li');
    ownerEmail.textContent = "Owner Email: omar@real.com";


    list.appendChild(phone);
    list.appendChild(restaurantEmail);
    list.appendChild(ownerEmail);

    contactDiv.appendChild(list);

    return contactDiv;
    

}

function renderNewsletter(){
    let newsletter = document.createElement('div');
    newsletter.id = "newsletter";

    let h3 = document.createElement('h3');
    h3.textContent = "Sign up for our newsletter!";

    let signupBtn = document.createElement('button');
    signupBtn.textContent = "Sign Up";

    newsletter.appendChild(h3);
    newsletter.appendChild(signupBtn);

    return newsletter;
}

function renderContact(){
    let contact = document.createElement('div');
    contact.id = "contact";

    contact.appendChild(renderHeader());

    contact.appendChild( renderContacts() );

    contact.appendChild( renderNewsletter() );

    return contact;
}


export default renderContact;