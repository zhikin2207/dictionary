import {ajax} from 'jquery';

class WordsService {
    getAll() {
        return ajax({
            url: 'http://5853f3d17511aa1200d53b90.mockapi.io/api/v1/words',
            method: 'GET',
            dataType: 'json'
        });
    }
}

export default WordsService;
