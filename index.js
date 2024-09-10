const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(
        {
            id: 0,
            user: "James",
            department: "SWE"
        },
        {
            id: 1,
            user: "John",
            department: "SWE"
        },
    ));

})









app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
});