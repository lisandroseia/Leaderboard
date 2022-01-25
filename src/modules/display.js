import getNode from './getNode.js';

const board = document.querySelector('.board');
const name = document.getElementById('name');
const score = document.getElementById('score');

const display = () => {
  if (name.value === '' || score.value === '') {
    return;
  }
  if (parseInt(score.value, 10)) {
    board.appendChild(getNode(name.value, score.value));
    name.value = '';
    score.value = '';
  }
};

export default display;