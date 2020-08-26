import app from './backend/server';
import config from './backend/config';

const { PORT } = config;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));