// export const formatDate = function (date: Date, type: number): string {
//   const yyyy = date.getFullYear();
//   let mm: string = (date.getMonth() + 1).toString();
//   let dd: string = date.getDate().toString();
//   if (parseInt(dd) < 10) dd = '0' + dd.toString();
//   if (parseInt(mm) < 10) mm = '0' + mm;
//   let today: string = type === 1 ? dd + '/' + mm + '/' + yyyy : yyyy + '-' + mm + '-' + dd;
//   return today;
// };

export const convertDate = function (seconds: number | undefined): string {
  if (seconds === undefined) return '';
  const date = new Date(seconds);
  const yyyy = date.getFullYear();
  let mm: string = (date.getMonth() + 1).toString();
  let dd: string = date.getDate().toString();
  if (parseInt(dd) < 10) dd = '0' + dd.toString();
  if (parseInt(mm) < 10) mm = '0' + mm;
  let today = yyyy + '-' + mm + '-' + dd;
  return today;
};

export const convertDateSeconds = function (date: string): number {
  if (date === undefined) return 0;
  let dateStr: number[] = date.split('-').map(function (item) {
    return parseInt(item, 10);
  });
  const newDate = new Date(dateStr[0], dateStr[1] - 1, dateStr[2]);
  return newDate.getTime();
};

export const convertHours = function (seconds: number | undefined): string {
  if (seconds === undefined) return '';
  const date = new Date(seconds);
  const hours = date.getHours().toString();
  const minus = date.getMinutes().toString();

  return hours + '-' + minus;
};

export const convertHoursSeconds = function (hours: string): number {
  var arrInt = hours.split(':').map(function (item) {
    return parseInt(item, 10);
  });
  var second: number = (arrInt[0] * 60 + arrInt[1]) * 60 * 1000;
  return second;
};
