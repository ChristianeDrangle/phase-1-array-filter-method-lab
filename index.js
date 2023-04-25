const findMatching = (drivers, string) =>
  drivers.filter((driver) => driver.toLowerCase() === string.toLowerCase());

const fuzzyMatch = (drivers, string) =>
  drivers.filter(
    (driver) => driver.toLowerCase().indexOf(string.toLowerCase()) === 0
  );

const matchName = (drivers, string) =>
  drivers.filter((driver) => driver.name === string);
