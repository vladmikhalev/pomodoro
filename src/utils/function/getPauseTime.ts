export function getPauseTime(value: number) {
  value = value / 1000 / 60;
  const hours = Math.floor(value / 60);
  const minutes = value - hours * 60;

  const rounded = Math.trunc(minutes);
  const resultMin = rounded === 0 ? minutes.toFixed(1) : minutes.toFixed(0);
  if (hours > 0) {
    return `${hours} ч ${resultMin} м`;
  } else {
    return `${resultMin} м`;
  }
}
