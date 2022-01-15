import kabobImg from "../images/samplekabob.jpeg";
import "../styles/style.css";

function renderImg(){
    let img = document.createElement('img');
    img.setAttribute('src', kabobImg);
    img.setAttribute('alt', "A picture of our chicken kabob");
    img.classList.add('home-img');

    return img;
}

function renderHeader(){
    let header = document.createElement('h1');
    header.textContent = "Omar's Kabob House";
    header.id = "home-header";

    return header;
}

function renderHours(){
    let hours = document.createElement('div');
    hours.id = "hours";
    
    let h2 = document.createElement('h2');
    h2.textContent = "Hours";
    hours.appendChild(h2);

    let list = document.createElement('ul');
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    for(let day of days){

        let li = document.createElement('li');
        li.textContent = day;

        if(day === "Sunday"){
            li.textContent += ": Closed";
        }
        else if(day === "Saturday"){
            li.textContent += ": 10:00am - 3:00pm";
        }
        else{
            li.textContent += ": 9:00am - 5:00pm";
        }

        list.appendChild(li);
    }

    hours.appendChild(list);

    return hours;
}

function renderHome(){
    let home = document.createElement('div');
    home.id = "home";   

    home.appendChild(renderHeader());
    home.appendChild(renderImg());
    home.appendChild(renderHours());

    return home;

}


export default renderHome;
