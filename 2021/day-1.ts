export const getNumberOfIncreases = (measurements: number[]) =>
    measurements.filter((measurement, index) => measurements[index] > measurements[index - 1]).length;

const sum = (array: number[]) =>
    array.reduce((previousValue, currentValue) => previousValue + currentValue);

export const generateThreeMeasurementSums = (measurements: number[]) =>
    measurements.map((measurement, index) => sum(measurements.slice(index, index + 3)));

export const getNumberOfSlidingWindowIncreases = (measurements: number[]) =>
    getNumberOfIncreases(generateThreeMeasurementSums(measurements));
