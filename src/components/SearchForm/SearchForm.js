import { useState } from "react";
import styles from "./SearchForm.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SearchForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [location, setLocation] = useState();

  return (
    <section className={styles.searchForm}>
      <form>
        <label htmlFor="location">Локация</label>
        <input id="location" name="location" type="text" value={location} onChange={(e) => setLocation( e.target.value)}/>
        <label htmlFor="start">Дата заселения</label>
        <DatePicker
          id="start"
          name="start"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <label htmlFor="end">Дата отъезда</label>
        <DatePicker
          id="end"
          name="end"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
        />
        <button type="submit">Поиск</button>
      </form>
    </section>
  );
}

export default SearchForm;
