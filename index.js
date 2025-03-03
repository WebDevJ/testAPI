const express = require('express');
const app = express();
const PORT = 3001;

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
    res.end(JSON.stringify(
        obj
    ));

})

// National Average Income
app.get('/nai', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(
        nai
    ));

})







app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
});