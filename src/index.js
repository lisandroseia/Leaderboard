import './style.css';
import display from './modules/display.js';

const submitBtn = document.getElementById('submit-btn');
const board = document.querySelector('.board');


/* start working with apis */



const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const getLink = () => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ name: ' new game' }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) =>
        resolve(
          `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${data.result
            .slice(13, -6)
            .trim()}/scores/`
        )
      );
  });
};

async function postScore() {
  const newUrl = await getLink();
  console.log(newUrl)
  submitBtn.addEventListener('click', () => {
    const name = document.getElementById('name');
    const score = document.getElementById('score');
    fetch(newUrl, {
        method: 'POST',
        body: JSON.stringify({ user: `${name.value}`, score: parseInt(score.value)}),
        headers: {
            "content-type": "application/json"
        }
      }).then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  })
  const refresh = document.querySelector('.refresh-btn');
  
  refresh.addEventListener('click', () => {
    fetch(newUrl)
    .then(res => res.json())
    .then(data => {
         board.innerHTML = ''
        display(data.result.forEach(item => display(item.user, item.score)))
    })
})

}

postScore();
