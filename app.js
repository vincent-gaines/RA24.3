const express = require('express');
const app = express();
const port = 3000;

// set up github actions on  a push to main branch
// so I had to set the CI variable in the actions file
// again an automatic run girls try it
// let us go host this
app.get('/', (req, res) => {
    res.send('Hello World');
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
}

module.exports = app;