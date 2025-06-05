const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./src/routes/auth');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});