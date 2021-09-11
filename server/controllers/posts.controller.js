const postsController = {
  protectedRoute(req, res, next) {
    console.log(req.body);
    res.send('<h1>HELLO WORLD</h1>');
  }
}

export default postsController;