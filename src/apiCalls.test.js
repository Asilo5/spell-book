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

        it('should fetch with correct URL')

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
       
        it('')

    });
})