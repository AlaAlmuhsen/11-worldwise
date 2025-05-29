import { useParams } from "react-router-dom";
import styles from "./City.module.css";
import { useCities } from "../context/Citiescontext";
import { useEffect } from "react";
import Spinner from "./Spinner";
import ButtonBack from "./ButtonBack";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();

  useEffect(() => {
    getCity(id);
  }, [id]);

  if (isLoading) {
    return <Spinner />;
  }

  const { cityName, emoji, date, notes } = currentCity;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <ButtonBack />
      </div>
    </div>
  );
}

export default City;

// The url for state managment :

// -> the url is an excellent place to store UI State
// and an alternative to useState in some situations
// Ex : open/close panel, currently selected item ,
// list sorting, applied list filters

// 1- Easy way to store in a global place,
// accessible to all components in the app

// 2- Good way to pass data from one page into the next page

// 3- Makes it possible to bookmark and share the page
// with the exact ui state it had at the time

// www.alaa.com/app/cities/lisbon?lat=25&lng=35&sort=price
//               path      params
