import axios from 'axios';

// axios.defaults.withCredentials = true;

export function doRequest(url, method, data) {
  return new Promise((resolve, reject) => {
    axios({
      url: `${url}`,
      method: method,
      data: data ? JSON.stringify({ ...data }) : null,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      resolve(response);
    }).catch((error) => {
      if (error.response) {
        // Access is forbidden so we should log out
        if (error.response.status === 403) {
          reject({ message: "Access denied, please log out and log in again if you keep seeing this error." });
        } else {
          reject(error.response.data);
        }
      } else {
        reject(error);
      }
    });
  });

}
