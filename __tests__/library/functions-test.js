import * as func from '../../library/functions';

describe('test suite for library/functions', () => {
  it('creates an ID that is 20 to 25 chars long', () => {
      expect(func.generateId()).toBeDefined();
      expect(func.generateId().length).toBeGreaterThan(20);
    });

  it('selects a deck by id from an array of decks', () => {

    const decks = [
      {id: "deck1", name: "bla"},
      {id: "deck2", name: "bla xx"},
      {id: "deck3", name: "bla dd"},
      {id: "deck4", name: "bla deck 4"},
    ];

    expect(func.selectDeckByIdFromArray('deck3', decks)).toEqual({id: "deck3", name: "bla dd"});
  });

  it('selects a deck by id', () => {

    const decks = {
      MyDeck: {id: "MyDeck", questions: []},
      MyDeck2: {id: "MyDeck2", questions: []},
      MyDeck3: {id: "MyDeck3", questions: []},
    };

    expect(func.selectDeckByTitle('MyDeck2', decks)).toEqual({id: "MyDeck2", questions: []});
  });


  it('returns the right expression based on the number of cards', () => {

    expect(func.getCardCountExpression(0)).toEqual('Empty deck');
    expect(func.getCardCountExpression(1)).toEqual('1 card');
    expect(func.getCardCountExpression(2)).toEqual('2 cards');
    expect(func.getCardCountExpression(7)).toEqual('7 cards');

  });

});
