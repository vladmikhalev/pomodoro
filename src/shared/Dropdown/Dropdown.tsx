import React from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.module.css';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  dropdownRef: React.RefObject<HTMLDivElement>
}

export function Dropdown({ button, children, dropdownRef }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);


  const ref = React.useRef<HTMLDivElement>(null);
  const rect = ref.current?.getBoundingClientRect();
  
  React.useEffect(() => {
    function handleClickClose(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target) && !dropdownRef.current?.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    
    document.addEventListener('click', handleClickClose);
    
    return (() => {
      document.removeEventListener('click', handleClickClose);
    });

  }, [dropdownRef]);
  
  const node = document.querySelector('#dropdown_root');
  if (!node) return null;


  return (
    <div className={styles.container}>
      <div ref={ref}>
        <div onClick={() => { setIsDropdownOpen(!isDropdownOpen); }}>
          {button}
        </div>
        {isDropdownOpen && ReactDOM.createPortal((
          <div
            className={styles.listContainer}
            style={{
              top: Math.round(rect ? rect.top + rect.height/1.2 : 0),
              left: Math.round(rect ? rect.left + rect.width * 3 : 0),
            }}
          >

            <div className={styles.list}>
              {children}
            </div>

          </div>
        ), node)}

      </div>
    </div>
  );
}
