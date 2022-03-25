/*


const content = document.querySelector('.content');
const comida = document.querySelector('.comida');
const aside = document.querySelector('.aside');
foot?.map((item, index)=>{
    content.innerHTML +=`
    <div data-name="${index}" draggable="true" class="foots">${item.comida}</div>    
    `
});

let arr = [];



const foots = document.querySelectorAll('.foots');

foots.forEach((item)=>{
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd)
});

function newArr(){

    aside.innerHTML = '';
    arr.map((item)=>{

        aside.innerHTML +=`
            <div class="aside_foots">${item.comida}</div>
        `;
        

    });

}



function dragStart(e){
    e.currentTarget.style.display = 'none';
    e.currentTarget.classList.add('selecte');

}

function dragEnd(e){
    
    e.currentTarget.classList.remove('selecte');

}

let events ={
    dragover(e){
        e.preventDefault();
    },
    dragleave(){
        console.log('saiu');
    },
    drop(e){
        let item = document.querySelector('.foots.selecte');
        comida.appendChild(item);
        let key = +e.currentTarget.lastChild.getAttribute('data-name')
        arr.push(foot[key]);
        console.log(arr);
        newArr();
    }
}

Object.keys(events).forEach((item)=>{
    comida.addEventListener(item, events[item]);
});

*/

let foot = [{
        comida: 'arroz',
        id: 1
    },
    {
        comida: 'feijõa',
        id: 2
    },
    {
        comida: 'macarrão',
        id: 3
    },
    {
        comida: 'tomate',
        id: 4
    },
    {
        comida: 'suco',
        id: 5
    },
    {
        comida: 'carne',
        id: 6
    },
    {
        comida: 'frango',
        id: 7
    },
    {
        comida: 'aldace',
        id: 8
    },
    {
        comida: 'carne magra',
        id: 9
    },
    {
        comida: 'cheddar',
        id: 10
    },
    {
        comida: 'queijão parmesão',
        id: 11
    },
    {
        comida: 'molho barbucue',
        id: 12
    },
    {
        comida: 'molho barbucue',
        id: 13
    },
    {
        comida: 'bacon',
        id: 14
    },
    {
        comida: 'carne de peixe',
        id: 15
    },
];

const categories = document.querySelector('.categoteries_foots');
const arrowListLeft = document.querySelector('.arrow_list-left');
const arrowListRight = document.querySelector('.arrow_list-right');
const arrow = document.querySelector('#arrow');
const genreFoots = document.querySelector('.genero_foots');

let mouseUp = false;
let x = categories.style.width = `${foot.length * 120}px`;

let margin = 0;
let moment = 0

foot?.map((item) => {
    categories.innerHTML += `<span draggable="true">${item.comida}</span>`;
})


arrowListRight.addEventListener('mouseup', function () {
    console.log('passou')
});
arrowListRight.addEventListener('mousedown', function () {
    console.log('soltu');
});



arrowListLeft.addEventListener('click', function () {
    let arrow = +x.replace('px', '');
    console.log(arrow);
    margin += 150;
    if (margin > (arrow - 1000)) {
        margin = (arrow - 1000);
        return;
    }
    categories.style.marginLeft = `-${margin}px`;
    genreFoots.style.marginLeft = `-100vw`;
});

arrowListRight.addEventListener('click', function () {
    margin = margin - 150;
    if (margin < 0) {
        margin = 0;

    }
    categories.style.marginLeft = `-${margin}px`;

});