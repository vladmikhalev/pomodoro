import React from 'react';
import { useAppDispatch } from '../../../../../hooks/hook';
import { decreaseTomatos, increaseTomatos } from '../../../../../store/taskSlice';
import { Dropdown } from '../../../../../shared/Dropdown';
import styles from './menu.module.css';
import { MenuIcon } from './MenuIcon';
import { MenuItemList } from './MenuItemList';

interface IMenuProps {
  id: string;
  amountTomatos: number;
  handleEditTask: () => void;
}

export function Menu({id, amountTomatos, handleEditTask}: IMenuProps) {
  const dropdownRef = React.useRef(null);
  const dispatch = useAppDispatch();


  function handleIncreaseTomatos() {
    dispatch(increaseTomatos({id}));
  }

  function handleDecreaseTomatos() {
    dispatch(decreaseTomatos({id}));
  }


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
          <MenuItemList
            id={id}
            amountTomatos={amountTomatos}
            handleIncreaseTomatos={handleIncreaseTomatos}
            handleDecreaseTomatos={handleDecreaseTomatos}
            handleEditTask={handleEditTask}
          />
        </div>
      </Dropdown>
    </div>
  );
}
