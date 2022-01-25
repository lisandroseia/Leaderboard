import getNode from './getNode.js'

const board = document.querySelector('.board');
const name = document.getElementById('name');
const score = document.getElementById('score')

export default function display(){
    if(name.value === '' || score.value === ''){
        return
    }
    if(parseInt(score.value)){
        board.appendChild(getNode(name.value, score.value));
        name.value = ''
        score.value = ''
    }
}