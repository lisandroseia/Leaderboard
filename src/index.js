import './style.css'

const board = document.querySelector('.board');
const name = document.getElementById('name');
const score = document.getElementById('score')
const submitBtn = document.getElementById('submit-btn')


function getNode(name, score){
    const node = document.createElement('div');
    node.classList.add('player');
    node.appendChild(document.createTextNode(`${name}: ${score}`))
    return node;
}

submitBtn.addEventListener('click', () => {
    if(name.value === '' || score.value === ''){
        return
    }
    if(parseInt(score.value)){
        board.appendChild(getNode(name.value, score.value));
        name.value = ''
        score.value = ''
    }
})
