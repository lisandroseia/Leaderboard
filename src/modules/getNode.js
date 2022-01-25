const getNode = (name, score) => {
  const node = document.createElement('p');
  node.classList.add('player');
  node.appendChild(document.createTextNode(`${name}: ${score}`));
  return node;
};

export default getNode;
