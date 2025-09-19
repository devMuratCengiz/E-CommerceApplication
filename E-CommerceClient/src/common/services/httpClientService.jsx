import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://localhost:7160/api", // Base adres
  headers: {
    "Content-Type": "application/json",
  },
});

// İsteği yakalamak istersen (token ekleme, loglama vs.)
// httpClient.interceptors.request.use(config => {
//   // örnek: config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

export default httpClient;
