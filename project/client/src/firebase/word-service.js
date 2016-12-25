import firebase from 'firebase';

class WordService {
    getAll() {
        const url = `users/${this._uid}/words`;

        return this._database.ref(url).once('value').then(snapshot => {
            const wordsObject = snapshot.val() || {};
            const words = Object
                .keys(wordsObject)
                .map(key => Object.assign({}, wordsObject[key], { key: key }));

            return words;
        });
    }

    add(word) {
        const url = `users/${this._uid}/words`;
        const wordRef = this._database.ref(url).push();
        const wordKey = wordRef.key;
        const currentTime = new Date().getTime();

        const createProps = {
            value: word.value,
            translation: word.translation,
            createdAt: currentTime,
            changedAt: currentTime
        };

        return wordRef.set(createProps).then(() => {
            return wordKey;
        });
    }

    remove(key) {
        const url = `users/${this._uid}/words/${key}`;

        return this._database.ref(url).remove();
    }

    update(word) {
        const url = `users/${this._uid}/words/${word.key}`;

        const updateProps = {
            value: word.value,
            translation: word.translation,
            changedAt: new Date().getTime()
        };

        return this._database.ref(url).update(updateProps);
    }

    get _database() {
        return firebase.database();
    }

    get _uid() {
        return firebase.auth().currentUser.uid;
    }
}

export default WordService;