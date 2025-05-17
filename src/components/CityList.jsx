import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";
function CityList({ cities, isLoading }) {
  console.log(cities, "alaa");
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add Your First City By Clicking On the city on the map" />
    );

  return (
    <>
      {!isLoading && (
        <ul className={styles.cityList}>
          {cities.map((city) => (
            <CityItem city={city} key={city.id} />
          ))}
        </ul>
      )}
    </>
  );
}

export default CityList;
