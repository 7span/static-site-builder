module.exports = {
  removeExtension(filename) {
    return filename
      .split(".")
      .slice(0, -1)
      .join(".");
  }
};
