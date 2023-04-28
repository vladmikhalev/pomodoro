export function getTimerTime(timeTimer: number) {



  const seconds = Math.floor((timeTimer / 1000) % 60);
  const minutes = Math.floor((timeTimer / 1000 / 60) % 60);
  const formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return formattedTime;
}
