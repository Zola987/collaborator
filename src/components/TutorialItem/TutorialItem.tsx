import React, { useState } from 'react';
import styles from './TutorialItem.module.css';
import { RootState } from '@reduxStore/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { addTutorial, removeTutorial } from '@reduxStore/actions/tutorial';

const TutorialItem = () => {
    const [tutorial, setTutorial] = useState({
        id: 0,
        title: '',
        author: '',
    });
    const dispatch = useDispatch();
    const tutorials = useSelector(
        (state: RootState) => state.tutorial.tutorials
    );

    function handleOnChangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
        const title = event.target.value;
        setTutorial({ ...tutorial, title: title });
    }

    function handleOnChangeAuthor(event: React.ChangeEvent<HTMLInputElement>) {
        const author = event.target.value;
        setTutorial({ ...tutorial, author: author });
    }

    return (
        <section>
            <h2>Add New Tutorial</h2>
            <div>
                <input
                    type="text"
                    name="Title"
                    placeholder="Title"
                    onChange={handleOnChangeTitle}
                />
                <input
                    type="text"
                    name="Title"
                    placeholder="Author"
                    onChange={handleOnChangeAuthor}
                />
                <button
                    onClick={() => dispatch(addTutorial(tutorial))}
                    className={styles.btn}
                >
                    Add
                </button>
            </div>
            <div>
                {tutorials.map((tutorial) => (
                    <div key={tutorial.id} className={styles.tutorial}>
                        <span className={styles.title}>{tutorial.title}</span>
                        <span className={styles.author}>{tutorial.author}</span>
                        <button
                            onClick={() =>
                                dispatch(removeTutorial(tutorial.id))
                            }
                            className={styles.removeBtn}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TutorialItem;
