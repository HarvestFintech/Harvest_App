import {useEffect} from 'react';

export default useAuth = (url, token) => {
  let status = 0;
  let payload = {};

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(res => {
        console.log('res', res);
      })
      .catch(err => {
        console.log('err', err);
      });

    return [status, payload];
  }, [token]);
};
