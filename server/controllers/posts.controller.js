const postsController = {
  greet(req, res, next) {
    res.json({
      "name": "instaclone-api",
      "message": "Hello world!",
      "version": "1.0.0",
      "author": "arsen1c"
    })
  }
}

export default postsController;