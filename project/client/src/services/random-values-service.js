class RandomValuesService {
    static getRandomInteger(from, to) {
        return Math.floor(Math.random() * (to - from + 1)) + from;
    }

    static getRandomBoolean() {
        return Math.random() >= 0.5;
    }
}

export default RandomValuesService;