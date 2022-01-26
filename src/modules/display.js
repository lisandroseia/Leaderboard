import getNode from './getNode.js';

const board = document.querySelector('.board');

const display = (name, score) => {
  if (name === undefined || score === undefined) {
    return;
  }

  board.appendChild(getNode(name, score));
};

export default display;
