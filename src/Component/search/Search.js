import "./Search.css";
import axios from "axios";
import { useState } from "react";

const Search = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c33f32a7e6f2c88b9953d23d00881a8e`
      );
      console.log(response.data);
      setWeatherData(response.data);
      setLoading(false);
    } catch (error) {
      setError("Une erreur s'est produite. Veuillez réessayer.");
      setLoading(false);
    }
  };
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          placeholder="Entrez le nom d'une ville"
        />
        <button type="submit" disabled={loading}>
          Rechercher
        </button>
      </form>
      {loading && (
        <div className="weather-info">
          <p>Chargement...</p>
        </div>
      )}
      {error && (
        <div className="weather-info">
          <img alt="" src="/télécharger (1).jpeg" />
          <br />
          <br />
          <br />
          <p style={{ fontFamily: "Plus jakarta, sans-serif" }}>
            Une erreur s'est produite. Veuillez réessayer
          </p>
        </div>
      )}
      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <img
            alt=""
            src={`./${weatherData.weather[0].main.toLowerCase()}.png`}
          />
          <p>
            Température: {Number.parseInt(weatherData.main.temp - 273.15)}°C
          </p>
          <p>Humidité: {weatherData.main.humidity}%</p>
          <p>Pression: {weatherData.main.pressure} hPa</p>
          <p>Vitesse du vent: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};
export default Search;
