const btn = document.querySelector('.btn');
let timerId;
let i = 0;

function myAnimation () {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 20);

    function frame () {
        if (pos == 300){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';

        }
    }
}

// function logger (){
//     if (i == 3){
//         clearInterval(timerId);
//     }
//     console.log(`timer`);
//     i++;
// }

btn.addEventListener('click', myAnimation);


// let id = setTimeout(function log () {
//     console.log(`hello`);
//     id = setTimeout(log, 1000);
// }, 1000);






