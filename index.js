const app = require('./src/app');

const DEFAULT_PORT = 4000;

const PORT = process.env.PORT || DEFAULT_PORT;

app.listen(PORT, () => console.log(`App listenting on localhost:${PORT}`));
