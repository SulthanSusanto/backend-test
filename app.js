export default (express) => {
  const app = express();

  app.use(express.json());

  app.get('/test', (req, res) => {
    return res.json({
      res: 'Hello, world!',
    });
  });
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
