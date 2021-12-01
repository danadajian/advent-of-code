export const getNumberOfIncreases = (measurements: number[]) =>
    measurements.filter((measurement, index) => measurements[index] > measurements[index - 1]).length;

export const generateThreeMeasurementSums = (measurements: number[]) => {
    return measurements.map((measurement, index) => {
        if (index < measurements.length - 2) {
            return measurements[index] + measurements[index + 1] + measurements[index + 2]
        }
    }).filter(Boolean)
}

export const getNumberOfSlidingWindowIncreases = (measurements: number[]) => {
    return getNumberOfIncreases(generateThreeMeasurementSums(measurements));
}
