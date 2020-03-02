module.exports = column => {
  const { type, nullable, defaultValue, enumerate, unique, alias } = column

  return { type, nullable, defaultValue, enumerate, unique, alias }
}
