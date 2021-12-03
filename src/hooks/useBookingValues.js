export const useBookingValues = (values, dateValues) => {
  let Origin;
  let Destiny;
  let dated;
  let DateVal;
  !dateValues
    ? (values && (Origin = values.first.split(',')),
      values.second && (Destiny = values.second.split(',')))
    : ((Origin = dateValues[0].split(',')),
      (Destiny = dateValues[1].split(',')),
      (dated = dateValues[2].split(' ')),
      (DateVal = `${dated[1]} ${dated[2]}, ${dated[3]}`));
      
  return {Origin, Destiny, DateVal};
};
