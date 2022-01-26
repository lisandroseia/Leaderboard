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

  export default getLink;