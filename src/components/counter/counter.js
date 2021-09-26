import styles from "./counter.module.css";
import PropTypes from "prop-types";

const Counter = ({ time, buttonList, onClick }) => {
  return (
    <>
      <h1 className={styles.hero}>Counter</h1>
      <section className={styles.counter}>
        <div className={styles.container}>
          <ul className={styles.stopwatchScreen}>
            {time.map((value, index) => (
              <li key={index}>
                <p className={styles.number}>{value}</p>
              </li>
            ))}
          </ul>
          <ul className={styles.buttonList}>
            {buttonList.map((button, index) => (
              <li key={index}>
                <button
                  id={button}
                  className={styles.button}
                  onClick={onClick[button]}
                >
                  {button}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
Counter.propTypes = {
  time: PropTypes.arrayOf(PropTypes.string),
  buttonList: PropTypes.arrayOf(PropTypes.string),
};
export default Counter;
