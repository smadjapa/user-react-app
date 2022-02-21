import Card from "../UI/Card";
import { useState } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css"

const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    }

    const addUserHandler = (event) => {

        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }

        if (+enteredAge < 1) {
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);

        setEnteredAge('');
        setEnteredUsername('');
    };

    return (
        <div>
            <ErrorModal title="An Error Occured!" message="Somthing went wrong!" />
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
