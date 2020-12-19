import {
  firstDeclension,
  secondDeclension,
} from '@/declensions'

describe('declensions', () => {
  describe('firstDeclension', () => {
    it('returns a nested object with numbers and cases', () => {
      const nounObject = { dictionaryForm: [ 'tabula', 'ae', 'f.' ] }
      const declinated = firstDeclension(nounObject)
      expect(declinated).toEqual({
        singular: {
          nominative: 'tabula',
          accusative: 'tabulam',
          genitive: 'tabulae',
          dative: 'tabulae',
          ablative: 'tabula',
        },
        plural: {
          nominative: 'tabulae',
          accusative: 'tabulas',
          genitive: 'tabularum',
          dative: 'tabulis',
          ablative: 'tabulis',
        },
      })
    })

    it('respects singular only nouns', () => {
      const nounObject = {
        dictionaryForm: [ 'Cleopatra', 'ae', 'f.' ],
        singularOnly: true,
      }
      const declinated = firstDeclension(nounObject)

      expect(declinated).toEqual({
        singular: {
          nominative: 'Cleopatra',
          accusative: 'Cleopatram',
          genitive: 'Cleopatrae',
          dative: 'Cleopatrae',
          ablative: 'Cleopatra',
        },
      })
    })
  })

  describe('secondDeclension', () => {
    it('works with -us, -i nouns', () => {
      const nounObject = {
        dictionaryForm: [ 'populus', 'i', 'm.' ],
      }
      const declinated = secondDeclension(nounObject)

      expect(declinated).toEqual({
        singular: {
          nominative: 'populus',
          vocative: 'popule',
          accusative: 'populum',
          genitive: 'populi',
          dative: 'populo',
          ablative: 'populo',
        },
        plural: {
          nominative: 'populi',
          accusative: 'populos',
          genitive: 'populorum',
          dative: 'populis',
          ablative: 'populis',
        },
      })
    })

    it('works with -er, -i nouns', () => {
      const nounObject = {
        dictionaryForm: [ 'puer', 'i', 'm.' ],
      }
      const declinated = secondDeclension(nounObject)

      expect(declinated).toEqual({
        singular: {
          nominative: 'puer',
          accusative: 'puerum',
          genitive: 'pueri',
          dative: 'puero',
          ablative: 'puero',
        },
        plural: {
          nominative: 'pueri',
          accusative: 'pueros',
          genitive: 'puerorum',
          dative: 'pueris',
          ablative: 'pueris',
        },
      })
    })

    it('works with -um, -i nouns', () => {
      const nounObject = {
        dictionaryForm: [ 'bellum', 'i', 'n.' ],
      }
      const declinated = secondDeclension(nounObject)

      expect(declinated).toEqual({
        singular: {
          nominative: 'bellum',
          accusative: 'bellum',
          genitive: 'belli',
          dative: 'bello',
          ablative: 'bello',
        },
        plural: {
          nominative: 'bella',
          accusative: 'bella',
          genitive: 'bellorum',
          dative: 'bellis',
          ablative: 'bellis',
        },
      })
    })

    it('respects singular only nouns', () => {
      const nounObject = {
        dictionaryForm: [ 'Brutus', 'i', 'm.' ],
        singularOnly: true,
      }
      const declinated = secondDeclension(nounObject)

      expect(declinated).toEqual({
        singular: {
          nominative: 'Brutus',
          vocative: 'Brute',
          accusative: 'Brutum',
          genitive: 'Bruti',
          dative: 'Bruto',
          ablative: 'Bruto',
        },
      })
    })

    it('respects plural only neutral nouns', () => {
      const nounObject = {
        dictionaryForm: [ 'castra', 'orum', 'n.' ],
        pluralOnly: true,
      }
      const declinated = secondDeclension(nounObject)

      expect(declinated).toEqual({
        plural: {
          nominative: 'castra',
          accusative: 'castra',
          genitive: 'castrorum',
          dative: 'castris',
          ablative: 'castris',
        },
      })
    })

    it('respects plural only masculin nouns', () => {
      const nounObject = {
        dictionaryForm: [ 'pueri', 'orum', 'm.' ],
        pluralOnly: true,
      }
      const declinated = secondDeclension(nounObject)

      expect(declinated).toEqual({
        plural: {
          nominative: 'pueri',
          accusative: 'pueros',
          genitive: 'puerorum',
          dative: 'pueris',
          ablative: 'pueris',
        },
      })
    })
  })
})

