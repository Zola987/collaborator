import Calendar from '@components/Timesheet';
import styles from './Timesheet.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@reduxStore/reducers';
import { open } from '@reduxStore/actions/modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AddNewTimesheet from '@components/modals/AddNewTimeSheet/AddNewTimesheet';

const month = new Date().toLocaleString('default', { month: 'long' });
const year = new Date().getFullYear();

const TimesheetPg = () => {
    const dispatch = useDispatch();
    const modal = useSelector((state: RootState) => state.modal.show);

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.header}>
                {month} {year}
            </h2>
            <button className={styles.plus}>
                <FontAwesomeIcon
                    icon={faPlus}
                    onClick={() => dispatch(open())}
                />
            </button>
            <Calendar />
            <div>{modal ? <AddNewTimesheet /> : null}</div>
        </div>
    );
};

export default TimesheetPg;
