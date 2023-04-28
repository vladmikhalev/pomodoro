import React from 'react';
// import Select from 'react-select';
import styles from './statistics.module.css';

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

export function Statistics() {
  // const [selectedOption, setSelectedOption] = React.useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* <div className={styles.content}> */}
        <div className={styles.header}>
          <h2 className={styles.title}>Ваша активность</h2>
          {/* <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          /> */}
        </div>
        <div className={styles.graf}></div>
        <div className={styles.statist}></div>
        {/* </div> */}
      </div>
    </section >


  );
}

