import kabob from "../images/samplekabob.jpeg";
import "../styles/style.css";

function menuItem(name, price, imgSrc, desc){

    const getName = () =>{ 
        return name;
    };

    const getPrice = () => {
        return "$" + price;
    };

    const getSrc = () => {
        return imgSrc;
    }

    const getDesc = () => {
        return desc;
    }

    return{getName, getPrice, getSrc, getDesc};

}

const menu = ( () => {

    let appetizers = [];
    let entrees = [];
    let desserts = [];


    const addToAppetizers = () => {
        appetizers.push("Samosas", 3.99, "A South Asian favoriate. Fried flour encasing peas, carrots, onions, peppers, and " +
        "your choice of potato or chicken.");

        appetizers.push();
    }

    const addToEntrees = () => {
        entrees.push( menuItem("Chicken Kabob", 10.99, "#", "A South Asian and mediteranian classic. 4 pieces " +
        "of perfectly grilled marinated chicken served with salad and a choice of white/brown rice.") );

        entrees.push( menuItem("Kofta Kabob", 10.99, "#", "Our most popular item. 2 pieces of skewered beef kabob " +
        "served with salad and a choice of white/brown rice." ) );

        entrees.push( menuItem("Chicken Seekh Kabob", 10.99, "#", "A different take on the chicken kabob. 2 pieces " +
        "skewered chicken infused with peppers, onions, and spices. Served with naan bread and lentils") );

        entrees.push( menuItem( "Lamb Kabob", 13.99, "#", "A true delicacy. 4 pieces of Halal, grass-fed, marinated lamb served " +
        "with a choice of naan bread/rice and salad/lentils") );

    }

    const compileEntrees = () => {

        addToEntrees();

        let entreeList = document.createElement('div');
        
        let header = document.createElement('h2');
        header.textContent = "Entrees";
        
        entreeList.appendChild(header);

        for(let entree of entrees){
            let item = document.createElement('div');

            let h3 = document.createElement('h3');
            h3.textContent = entree.getName() + "  " + entree.getPrice();

            let img = document.createElement('img');
            img.setAttribute('src', kabob);
            img.classList.add('menu-img');
            
            let p = document.createElement('p');
            p.textContent = entree.getDesc();

            item.appendChild(h3);
            item.appendChild(img);
            item.appendChild(p);

            entreeList.appendChild(item);
        }

        return entreeList;
    }
    
    return {compileEntrees}
})();



function renderHeader(){
    let header = document.createElement('h1');
    header.textContent = "Menu";

    return header;
}


function displayMenu(){
    let menuPage = document.createElement('div');
    menuPage.id = "menu";

    menuPage.appendChild(renderHeader());

    menuPage.appendChild( menu.compileEntrees() );

    return menuPage;
}

export default displayMenu;