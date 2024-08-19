import Lead from './source/models/Lead';

export default (express) => {
  const app = express();

  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('welcome to the world');
  });

  app.get('/test', async (req, res) => {
    try {
      const leadData = await Lead.findAll();
      res.json({ data: leadData });
    } catch (err) {
      res.json({ message: 'error to get the data' });
    }
  });
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
