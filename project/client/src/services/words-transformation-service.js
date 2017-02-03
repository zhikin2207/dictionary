import RandomValuesService from './random-values-service';

class WordsTransformationService {
    constructor(words) {
        this._words = words.map(word => ({
            key: word.key,
            value: word.value,
            translation: word.translation,
            translationChanged: false
        }));
    }

    get words() {
        return this._words;
    }

    randomizeTranslation() {
        for (let i = 0; i < this._words.length; i++) {
            const changeTranslation = RandomValuesService.getRandomBoolean();

            if (changeTranslation) {
                const randomWordIndex = RandomValuesService.getRandomInteger(0, this._words.length - 1);

                this._words[i].translation = this._words[randomWordIndex].translation;
                this._words[i].translationChanged = i !== randomWordIndex;
            }
        }

        return this;
    }

    getExactlyRandom(count) {
        const randomWords = [];

        for(let i = 0; i < count && i < this._words.length; i++) {
            const randomIndex = RandomValuesService.getRandomInteger(0, this._words.length - 1);
            randomWords.push(Object.assign({}, this._words[randomIndex]));
        }

        this._words = randomWords;

        return this;
    }

    getLast(count) {
        if (this._words.length > count) {
            this._words = this._words.slice(this._words.length - count);
        }
        return this;
    }

    randomize() {
        const randomWords = [];

        for(let i = 0; i < this._words.length; i++) {
            const randomIndex = RandomValuesService.getRandomInteger(0, this._words.length - 1);
            randomWords.push(Object.assign({}, this._words[randomIndex]));
        }

        this._words = randomWords;

        return this;
    }
}

export default WordsTransformationService;