export function getTimestampDay(date: Date){
  date.setHours(0, 0, 0, 0);
  return  date.getTime();
}
