import { useState } from "react";
import styles from "./SearchForm.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {searchFetchAC} from '../../redux/actionCreators';
import { useDispatch, useSelector } from "react-redux";

function SearchForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.main.hotels);

function search (e) {
e.preventDefault();
dispatch(searchFetchAC({location, startDate,endDate}))
}

  return (
    <section className={styles.searchForm}>
      <form onSubmit={search}>
        <label htmlFor="location">Локация</label>
        <input required id="location" name="location" type="text" value={location} onChange={(e) => setLocation( e.target.value)}/>
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
