export const errorHandling = (err, req, res, next) => {
  res.json({
    error: err.message,
  });
};
