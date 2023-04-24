import React from 'react';
import { Dropdown } from '../../../../Dropdown';
import styles from './menu.module.css';
import { MenuIcon } from './MenuIcon';
import { MenuItemList } from './MenuItemList';

export function Menu() {
  const dropdownRef = React.useRef(null);

  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
        dropdownRef={dropdownRef}
      >
        <div ref={dropdownRef} className={styles.dropdown}>
          <MenuItemList />
        </div>
      </Dropdown>
    </div>
  );
}
