import getLink from './getLink'
import display  from './display.js'

const submitBtn = document.getElementById('submit-btn');
const board = document.querySelector('.board');

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

  export default postScore