const buttons = document.querySelectorAll('button');
const body = document.querySelector('body')

buttons.forEach((btn)=>{
    btn.addEventListener('click', (elem)=>{
        body.style.background = elem.target.id
    })
})