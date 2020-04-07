import config from "./config";

const apiService = {
  getProducts() {
    return fetch(`${config.API_ENDPOINT}/products`, {
      headers: {
        "content-type": "application/json",
        Authorization: `${config.API_KEY}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};
