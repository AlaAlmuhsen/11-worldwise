import { useCities } from "../context/Citiescontext";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add Your First City By Clicking On the city on the map" />
    );

  const countries =
    cities.reduce((arr, city) => {
      if (!arr.map((el) => el.country).includes(city.country)) {
        arr.push({ country: city.country, emoji: city.emoji, id: city.id });
      }
      return arr;
    }, []) || [];

  return (
    <>
      {!isLoading && (
        <ul className={styles.countryList}>
          {countries.map((country) => (
            <CountryItem country={country} key={country.id} />
          ))}
        </ul>
      )}
    </>
  );
}

export default CountryList;
