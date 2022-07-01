export const formatDate = function (date: Date, type: number): string {
  const yyyy = date.getFullYear();
  let mm: string = (date.getMonth() + 1).toString();
  let dd: string = date.getDate().toString();
  if (parseInt(dd) < 10) dd = '0' + dd.toString();
  if (parseInt(mm) < 10) mm = '0' + mm;
  let today: string = type === 1 ? dd + '/' + mm + '/' + yyyy : yyyy + '-' + mm + '-' + dd;
  return today;
};
