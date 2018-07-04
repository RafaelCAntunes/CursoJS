import axios from "axios";
import md5 from "md5";

const ts = new Date().getTime();
const publicKey = "2bb31ab5663084a468dae992cb5fe0a3";
const privateKey = "74756bc374f2c58e52db7a9a4d15f631bd6699ba";

const hash = md5(`&{ts}${privateKey}${publicKey}`);

const instance = axios.create({

  baseURL:`https://gateway.marvel.com:443/v1/public/characters?name=deadpool&apikey=${publicKey}&hash=${hash}`,
  timeout: 10000
});

instance.get()
.then(response => console.log(response))
.catch(error => console.log(error));