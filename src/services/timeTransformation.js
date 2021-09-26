import PropTypes from "prop-types";

export default function timeTransformation(time) {
  const hours = Math.floor(time / 3600);
  time = time - hours * 3600;
  const minutes = Math.floor(time / 60);
  time = time - minutes * 60;
  const seconds = time % 60;
  return [
    `${
      hours < 1 || hours > 23
        ? "00"
        : hours >= 1 && hours <= 9
        ? `0${hours}`
        : `${hours}`
    }`,
    `${minutes < 10 ? (minutes === 0 ? "00" : `0${minutes}`) : `${minutes}`}`,
    `${seconds < 10 ? `0${seconds}` : `${seconds}`}`,
  ];
}
timeTransformation.propTypes = {
  time: PropTypes.number.isRequired,
};
