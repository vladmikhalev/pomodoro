import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/hook';
import { removeTaskStatistics } from '../../store/statisticsSlice';
import { removeTask } from '../../store/taskSlice';
import { IconExitModal } from '../icons';
import styles from './modaldelete.module.css';

interface IModalDeleteProps {
  id: string;
}

export function ModalDelete({ id }: IModalDeleteProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const refBackgr = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate(); 
  const dispatch = useAppDispatch();


  const  IdURI = useParams<'id'>();

  const checkId = id === IdURI.id;

  function handleClose() {
    navigate('/timer');
  }

  function handleRemove() {
    dispatch(removeTask({ id }));
    dispatch(removeTaskStatistics({ id: id }));
    navigate('/timer');
  }
  

  React.useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target) && refBackgr.current?.contains(event.target)) {
        navigate('/timer');
      }
    }
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return checkId ? ReactDOM.createPortal((
    <div id="modal" className={styles.modalBackgr} ref={refBackgr}>
      <div className={styles.modal} >
        <div className={styles.content} ref={ref}>
          <h3 className={styles.title}>Удалить задачу?</h3>
          <button className={styles.remove} onClick={handleRemove}>Удалить</button>
          <button className={styles.cancel} onClick={handleClose}>Отмена</button>
          <button className={styles.exit} onClick={handleClose}>
            <IconExitModal />
          </button>
        </div>
      </div>
    </div>
  ), node) : null;
}
