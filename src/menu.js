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
        appetizers.push( menuItem("Samosas", 3.99, '#', "A South Asian favoriate. Fried flour encasing peas, carrots, onions, peppers, and " +
        "your choice of potato or chicken.") );

        appetizers.push( menuItem("Chick Peas", 2.99, '#', "Cup of Indian chickpeas (Garbanzo beans) served with a side of naan bread. ") );
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
        entreeList.id = "entrees";
        
        let header = document.createElement('h2');
        header.textContent = "Entrees";
        
        entreeList.appendChild(header);

        let items = document.createElement('div');
        items.classList.add('item-list');

        for(let entree of entrees){
            let item = document.createElement('div');
            item.classList.add('list-item');

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

            items.appendChild(item);
        }
        entreeList.appendChild(items);

        return entreeList;
    }

    const compileAppetizers = () => {
        addToAppetizers();

        let appList = document.createElement('div');
        appList.id = "appetizers";

        let header = document.createElement('h2');
        header.textContent = "Appetizers";

        appList.appendChild(header);

        let items = document.createElement('div');
        items.classList.add('item-list');

        for(let appetizer of appetizers){
            let item = document.createElement('div');
            item.classList.add('list-item');

            let h3 = document.createElement('h3');
            h3.textContent = appetizer.getName() + "  " + appetizer.getPrice();

            let img = document.createElement('img');
            img.setAttribute('src', kabob);
            img.classList.add('menu-img');
            
            let p = document.createElement('p');
            p.textContent = appetizer.getDesc();

            item.appendChild(h3);
            item.appendChild(img);
            item.appendChild(p);

            items.appendChild(item);

        }

        appList.appendChild(items);

        return appList;
    }

    const renderHeader = () => {
        let header = document.createElement('h1');
        header.textContent = "Our Menu";
        header.id = "menu-header";
    
        return header;
    }

    const compileMenu = () => {
        let menuPage = document.createElement('div');
        menuPage.id = "menu";

        menuPage.appendChild( renderHeader() );
        menuPage.appendChild( compileAppetizers() );
        menuPage.appendChild( compileEntrees() );

        return menuPage;
    }

    

    return {compileMenu}
})();

export default menu.compileMenu;