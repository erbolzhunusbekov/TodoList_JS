'use strict';


let btn = document.querySelector('#btn');
let input = document.querySelector('input');
let list = document.querySelector('#list');

// document.addEventListener('keypress', (e)=> {
//     if ( e.key == 'enter') {
//         // getResult(input.value)
//         console.log('hlll');
//     }
// })

document.addEventListener('keypress', (event) => {
    const keyName = event.key;
    if (keyName == 'Enter') {
        input

    
    list.innerHTML += `<div class="greed"><span>${input.value}</span><span id="del"><i class="fas fa-times-circle"></i></span></div>`;
    let remove = document.querySelectorAll('#del');
        for ( let x = 0; x < remove.length; x++ ) {
            remove[x].addEventListener('click', ()=> {
                remove[x].parentElement.remove();
            })
        }
    }
  });

btn.addEventListener('click', ()=> {
    console.log(input.value);
    input.innerHTML = ' bbbb ';

    
    list.innerHTML += `<div class="greed"><span>${input.value}</span><span id="del"><i class="fas fa-times-circle"></i></span></div>`;
    
    let remove = document.querySelectorAll('#del');
        for ( let x = 0; x < remove.length; x++ ) {
            remove[x].addEventListener('click', ()=> {
                remove[x].parentElement.remove();
            })
        }


});

