import React from 'react';
import { Link } from 'react-router-dom';
import { IconDecrease, IconDelete, IconEdit, IconIncrease } from '../../../../../icons';
import styles from './menuitemlist.module.css';


interface MenuItemListProps {
  id: string;
  amountTomatos: number;
  handleIncreaseTomatos: () => void;
  handleDecreaseTomatos: () => void;
  handleEditTask: () => void;
  handleRemoveTask: () => void;
}

export function MenuItemList({ id, amountTomatos, handleIncreaseTomatos, handleDecreaseTomatos, handleEditTask, handleRemoveTask }: MenuItemListProps) {
  const [isDisable, setIsDisable] = React.useState('false');

  React.useEffect(() => {
    amountTomatos <= 1 ? setIsDisable('true') : setIsDisable('false');
  }, [amountTomatos]);

  return (
    <>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button className={styles.itemBtn} onClick={handleIncreaseTomatos}>
            <IconIncrease />
            <span className={styles.itemText}>Увеличить</span>
          </button>
        </li>

        <li className={styles.item}>
          <button className={styles.itemBtn} data-disabled={isDisable} onClick={handleDecreaseTomatos}>
            <IconDecrease />
            <span className={styles.itemText}>Уменьшить</span>
          </button>
        </li>

        <li className={styles.item}>
          <button className={styles.itemBtn} onClick={handleEditTask}>
            <IconEdit />
            <span className={styles.itemText}>Редактировать</span>
          </button>
        </li>

        <li className={styles.item}>
          <Link to={`/timer/remove-task/${id}`} className={styles.itemBtn} >
            <IconDelete />
            <span className={styles.itemText}>Удалить</span>
          </Link>
          {/* <button className={styles.itemBtn} onClick={() => { setIsModalOpen(true); }} >
            <IconDelete />
            <span className={styles.itemText}>Удалить</span>
          </button> */}
        </li>
      </ul>


    </>
  );
}



