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
        let entrees = document.createElement('div');
        
        let header = document.createElement('h2');
        h2.textContent = "Entrees";
        
        entrees.appendChild(header);
    }
    

})();



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