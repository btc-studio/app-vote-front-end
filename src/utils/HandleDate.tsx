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

export const convertDateSeconds = function (date: string | undefined): number {
  if (date === undefined) return 0;
  const newDate = new Date(date);
  return newDate.getTime();
};

export const convertHours = function (seconds: number | undefined): string {
  if (seconds === undefined) return '';
  const date = new Date(seconds);
  const hours = date.getHours().toString();
  const minus = date.getMinutes().toString();

  return hours + '-' + minus;
};

export const convertHoursSeconds = function (hours: string | undefined): number {
  if (hours === undefined) return 0;
  const newDate = new Date(hours);
  return newDate.getTime();
};
