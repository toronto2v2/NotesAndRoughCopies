const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay')

let i = 0;
const deleteEl = (e) =>{
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if(i == 1){
    //     btn.removeEventListener('click', deleteEl);
    // }
};


btn.addEventListener('click', deleteEl);
overlay.addEventListener('click', deleteEl);

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);

});

