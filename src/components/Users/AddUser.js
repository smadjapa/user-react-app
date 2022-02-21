import Card from "../UI/Card";
import { useState } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css"

const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    }

    const addUserHandler = (event) => {

        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input!',
                message: 'Please Enter a Valid name and age (non-empty values).'
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Age!',
                message: 'Pleasee Enter a valid Age (> 0).'
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);

        setEnteredAge('');
        setEnteredUsername('');
    };

    const errorHnadler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHnadler} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" value={enteredUsername} name="username" id="username" onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age</label>
                    <input type="number" value={enteredAge} name="age" id="age" onChange={ageChangeHandler} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
