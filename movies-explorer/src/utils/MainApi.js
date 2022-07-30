class MainApi {
  constructor({baseUrl, headers}) {
    this._headers = headers
    this._baseUrl = baseUrl
  }

  getProfile() {

    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(res => this._getResponseData(res))

  }


  editProfile(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        email
      })
    })
      .then(res => this._getResponseData(res))
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  setToken(newToken){
    this._headers={
      authorization: `Bearer ${newToken}`,
      'Content-Type': 'application/json'
    };
  }
}

export const api = new MainApi({
  baseUrl: 'http://localhost:3001',
  headers: {
    authorization: `Bearer ${localStorage.getItem('JWT')}`,
    'Content-Type': 'application/json'
  }
});

