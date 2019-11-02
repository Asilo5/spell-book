import { getHouses, getSpells } from './apiCalls';

describe('apiCalls', () => {

    describe('getHouses', () => {
        let mockHouses;

        beforeEach(() => {
            mockHouses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
            window.fetch = jest.fn().mockImplementation(() => {
                Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockHouses)
                })
            })
        })

        it('should fetch with correct URL', () => {
           getHouses('https://www.potterapi.com/v1/sortingHat');
           expect(window.fetch).toHaveBeenCalledWith('https://www.potterapi.com/v1/sortingHat');
        });

        it('should return houses data (Happy Path)', () => {
            getHouses().then((results) => expect(results).toEqual(mockHouses));
        });

        it('should return an error if response is not ok (Sad Path)', () => {
            window.fetch = jest.fn().mockImplementation(() => {
              return Promise.resolve({
                  ok: false
              })
            })
        });

        it('should return an error if fetch fails', () => {
            window.fetch = jest.fn().mockImplementation(() => {
              return Promise.reject(Error('Muggle Error'))
            })
            expect(getHouses()).rejects.toEqual(Error('Muggle Error'));
        });
    });

    describe('getSpells', () => {
        let mockSpells;
        beforeEach(() => {
           mockSpells = [
              { _id: '5b74ebd5fb6fc0739646754c',
                spell: 'Aberto',
                type: 'Charm',
                effect: 'opens objects' },
              { _id: '5b74ecfa3228320021ab622b',
                spell: 'Accio',
                type: 'Charm',
                effect: 'Summons an object',
                __v: 0 }
           ];
    
           window.fetch = jest.fn().mockImplementation(() => {
               return Promise.resolve({
                  ok: true,
                  json: () => Promise.resolve(mockSpells)
               })
           })
        });
       
        it('should fetch with correct URL', () => {
            const apiKey = `$2a$10$s7FC7dj4ik0afkB/Dnr4Ju6NXS0Os8RtRntk97bi8gx.KqvmqgNgK`;
          getSpells(`https://www.potterapi.com/v1/spells?key=${apiKey}`);

          expect(window.fetch).toHaveBeenCalledWith(`https://www.potterapi.com/v1/spells?key=${apiKey}`);
        });

    });
})