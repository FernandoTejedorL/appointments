import express from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (_req, res) => {
  res.send('Appointments API running!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
