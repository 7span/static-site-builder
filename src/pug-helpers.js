module.exports = {
  block(className, bem) {
    let classes = [className];
    if (bem && bem.modifier) {
      classes.push(className + "--" + bem.modifier);
    }
    return classes.join(" ");
  }
};
