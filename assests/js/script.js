let foot = [
    {comida: 'arroz', id:1},
    {comida: 'feijõa', id:2},
    {comida: 'macarrão', id:3},
    {comida: 'salada', id:4},
    {comida: 'suco', id:5},
    {comida: 'carne', id:6},
    {comida: 'frango', id:7},
    {comida: 'café', id:8},

];
const content = document.querySelector('.content');
const comida = document.querySelector('.comida');
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
    }
}

Object.keys(events).forEach((item)=>{
    comida.addEventListener(item, events[item]);
});

