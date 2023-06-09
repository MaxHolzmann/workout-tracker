import decode from 'jwt-decode';
import axios from 'axios';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(token) {
    localStorage.setItem('id_token', token);
    window.location.assign('/');
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
  }
}

export default new AuthService();


