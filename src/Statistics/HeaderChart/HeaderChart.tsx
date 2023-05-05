import React from 'react';
import Select, { OnChangeValue } from 'react-select';
import makeAnimated from 'react-select/animated';
import styles from './headerchart.module.css';

interface IOption {
  value: string;
  label: string;
}

const options: IOption[] = [
  { value: 'Эта неделя', label: 'Эта неделя' },
  { value: 'Прошедшая неделя', label: 'Прошедшая неделя' },
  { value: '2 недели назад', label: '2 недели назад' },
];

const animatedComponents = makeAnimated();


interface IHeaderChartProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

export function HeaderChart({ selectedOption, setSelectedOption }: IHeaderChartProps) {

  const getValue = () => {
    return selectedOption ? options.find(item => item.value === selectedOption) : '';
  };

  const onChange = (newValue: OnChangeValue<any, boolean>) => {
    setSelectedOption(newValue.value);
  };



  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Ваша активность</h2>
      <Select
        classNamePrefix="custom-select"
        value={getValue()}
        onChange={onChange}
        options={options}
        components={animatedComponents}
      />
    </div>
  );
}
