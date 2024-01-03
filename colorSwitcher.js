const buttons = document.querySelectorAll('button');
const body = document.querySelector('body')

buttons.forEach((btn)=>{
    btn.addEventListener('click', (elem)=>{
        switch (elem.target.id){
            case 'grey':
                body.style.backgroundColor = 'grey';
                break;
            case 'green':
                body.style.backgroundColor = 'green';
                break;
            case 'blue':
                body.style.backgroundColor = 'blue';
                break;
            case 'red':
                body.style.backgroundColor = 'red';
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow';
                break;
            case 'white':
                body.style.backgroundColor = 'white';
                break;
            case 'lawngreen':
                body.style.backgroundColor = 'lawngreen';
                break;
            case 'pink':
                body.style.backgroundColor = 'pink';
                break;
            case 'purple':
                body.style.backgroundColor = 'purple';
                break;
            case 'brown':
                body.style.backgroundColor = 'brown';
                break;
            default:
                break;
        }
    })
})