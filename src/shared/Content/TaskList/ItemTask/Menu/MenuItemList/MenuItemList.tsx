import React from 'react';
import { IconDecrease, IconDelete, IconEdit } from '../../../../../icons';
import { IconIncrease } from '../../../../../icons/IconIncrease';
import styles from './menuitemlist.module.css';

export function MenuItemList() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <button className={styles.itemBtn}>
          <IconIncrease />
          <span className={styles.itemText}>Увеличить</span>
        </button>
      </li>

      <li className={styles.item}>
        <button className={styles.itemBtn}>
          <IconDecrease />
          <span className={styles.itemText}>Уменьшить</span>
        </button>
      </li>

      <li className={styles.item}>
        <button className={styles.itemBtn}>
          <IconEdit />
          <span className={styles.itemText}>Редактировать</span>
        </button>
      </li>

      <li className={styles.item}>
        <button className={styles.itemBtn}>
          <IconDelete />
          <span className={styles.itemText}>Удалить</span>
        </button>
      </li>
      {/* <div className={styles.arrow}>ghbdtn</div> */}
    </ul>
  );
}
