import moment from "moment";

const getToday = (): string => moment().format('MMMM Do YYYY');

const getCurrentDay = (): string => moment().format('dddd');

const getCurrentYear = ({ isFull }: { isFull: boolean; }): string => isFull ? moment().format('YYYY') : moment().format('YY');

const getCurrentNumber = (): string => moment().format('Do');

export {
  getToday,
  getCurrentDay,
  getCurrentYear,
  getCurrentNumber
};