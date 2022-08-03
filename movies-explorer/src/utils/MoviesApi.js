class MoviesApi {

  constructor({baseUrl, headers}) {
    this._headers = headers
    this._baseUrl = baseUrl
  }

  getInitialMovies = () => {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      headers: this._headers
    })
      .then(res => this._getResponseData(res))

  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co',
  headers: {
    //authorization: `Bearer ${localStorage.getItem('JWT')}`,
    'Content-Type': 'application/json'
  }
});

