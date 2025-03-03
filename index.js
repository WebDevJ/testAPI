const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();
const PORT = 3001;

// Enable CORS for all routes
app.use(cors());

let obj = {
    "users": {
        "id": 0,
        "Title": "SWE",
        "popup": {
            "menuitem": [
                { "value": "New", "onclick": "CreateNewDoc()" },
                { "value": "Open", "onclick": "OpenDoc()" },
                { "value": "Close", "onclick": "CloseDoc()" }
            ]
        }
    }
}

let nai = {
    0: {
        "National Average Income": "55,000.00",
        "Title": "NAI",
        "popup": {
            "menuitem": [
                { "value": "New", "onclick": "CreateNewDoc()" },
                { "value": "Open", "onclick": "OpenDoc()" },
                { "value": "Close", "onclick": "CloseDoc()" }
            ]
        }
    }
}

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(obj);
});

// National Average Income
app.get('/nai', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(nai);
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});
