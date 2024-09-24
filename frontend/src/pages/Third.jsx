import React from "react";
import styles from"./Third.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Third(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submittedMessage, setSubmittedMessage] = useState('');


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newUser = {
            name,
            email,
            password
        };
        console.log(newUser.email);
        
        try {
            // Send a POST request to the /users endpoint
            const response = await fetch('/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                //prob gotta change it here
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                const result = await response.json();
                setSubmittedMessage(`User added successfully: ${result.userId}`);
            } else {
                const error = await response.json();
                setSubmittedMessage(`Error: ${error.message}`);
            }
        } catch (error) {
            console.error("Error adding user:", error);
            setSubmittedMessage("Error adding user. Please try again.");
        }
        
        setName('');
        setEmail('');
        setPassword('');
      };

    return(
        <div className={styles.outer}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your Password"
                    />
                </div>
                <div className={styles.buttonContainer}>
                    <button type="submit" className={styles.button}>Submit</button>
                    <button type="button" className={styles.button} onClick={() => navigate("/")}>Back to Home!</button>
                </div>
            </form>
            {submittedMessage && (
                <div>
                    <h3>{submittedMessage}</h3>
                </div>
            )}
            
      </div>
    )
}