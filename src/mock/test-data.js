function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const getRandomType = () => {
  const types = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];

  const randomIndex = getRandomArbitrary(0, types.length - 1);
  return types[randomIndex];
};

const getRandomDestinationTown = () => {
  const types = ['Brest', 'Kiev', 'Amsterdam', 'Rome'];

  const randomIndex = getRandomArbitrary(0, types.length - 1);
  return types[randomIndex];
};

const getRandomDate = () => {
  const date = new Date().getTime();
  let randomDate = {};

  const randomDays = getRandomArbitrary(-30, 30);
  let daysDiff = new Date(date + (randomDays * 24 * 60 * 60 * 1000));
  const month = daysDiff.toLocaleString('en', { month: 'short' });
  const day = daysDiff.getUTCDate();
  const duration = getRandomArbitrary(30, 60);
  const start = daysDiff.getHours() + ':' + daysDiff.getMinutes();

  const timeTravel = new Date(daysDiff.getTime() + (duration) * 60 * 1000);
  const arrive = timeTravel.getHours() + ':' + timeTravel.getMinutes();


  return randomDate = {
    month: month,
    day: day,
    hourStart: start,
    hourArrive: arrive,
    pathTime: duration
  };
};

const getRandomPrice = () => {
  const randomPrice = getRandomArbitrary(5, 30);
  return randomPrice;
};



export const generateTask = () => {
  return {
    date:getRandomDate(),
    type: getRandomType(),
    destinationTown: getRandomDestinationTown(),
    price: getRandomPrice()
  };
};
