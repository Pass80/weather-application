const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
 export const formats = {
  dd_mm_yyyy: "dd-mm-yyyy",
  wdwd_dd_mm_yyyy : "wdwd dd-mm-yyyy"

};

const convertToDate = (str) => {
	
  const newArr = str.split("-").map((item) => parseInt(item));
  return new Date(newArr[0], newArr[1] - 1, newArr[2]);
};

export const formatDate = (date, format) => {
  const yyyy = date.getFullYear();
  const m = date.getMonth() + 1;
  const mm = ("0" + m).slice(-2);
  const mmmm = monthNames[m - 1];
  const mmm = mmmm.slice(0, 3);
  const d = date.getDate();
  const dd = ("0" + d).slice(-2);
  const wdwd = weekDays[date.getDay()];
  const wd = wdwd.slice(0, 3);
  let dateString = "";
  switch (format) {
    case formats.dd_mm_yyyy:
      dateString = dd + "-" + mm + "-" + yyyy;
      break;
    case formats.wdwd_dd_mm_yyyy:
      dateString = wdwd + " " + dd + "-" + mm + "-" + yyyy;
      break;
    default:
      dateString = dd + "/" + mm + "/" + yyyy;
  }

  return dateString;
};

export default convertToDate;
