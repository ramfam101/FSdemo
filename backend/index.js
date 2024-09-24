const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;
const path = require("path");
app.use(express.json());


const uri = "mongodb+srv://jmunnangi:JbgzomD7PglhXVoO@testcluster.nbviz.mongodb.net/?retryWrites=true&w=majority"; // Replace with your MongoDB URI if needed
const dbName = 'jeevDB';
const mongoose = require('mongoose');



const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/users', async (req, res) => {
    try {
        // Connect
        await client.connect();
        
        const db = client.db(dbName);
        const collection = db.collection('User');
        // Find all docs
        const users = await collection.find({}).toArray();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving users');
    } finally {
        await client.close();
    }
});

app.post('/users', async (req, res) => {
    console.log(req.body); // Log the incoming data
    // try {
    //     const newUser = new User(req.body); // Automatically validates the schema
    //     const result = await newUser.save();
    //     res.status(201).json({ message: 'User added successfully', userId: result._id });
    // } catch (error) {
    //     console.error(error);
    //     res.status(400).json({ message: 'Validation error', error: error.message });
    // }
});



const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
