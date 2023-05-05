import { normalizeCountForm } from './normalizeCountForm';

export function getWorkTime(value: number) {
  value = value / 1000 / 60;
  const hours = Math.floor(value / 60);
  const minutes = value - hours * 60;
  const rounded = Math.trunc(minutes);
  const resultMin = rounded === 0 ? minutes.toFixed(1) : minutes.toFixed(0);
  if (hours > 0) {
    return `${normalizeCountForm(hours, ['час', 'часа', 'часов'])} ${normalizeCountForm(+resultMin, ['минуты', 'минут', 'минут'])} `;
  } else {
    return normalizeCountForm(+resultMin, ['минуты', 'минут', 'минут']);
  }
}
