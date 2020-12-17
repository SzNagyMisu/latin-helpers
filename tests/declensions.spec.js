import {
  firstDeclension,
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
})

