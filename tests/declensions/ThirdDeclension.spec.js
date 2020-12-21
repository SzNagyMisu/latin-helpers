import ThirdDeclension from '@/declensions/ThirdDeclension'

describe('ThirdDeclension', () => {
  describe('getRoot', () => {
    const testGetRoot = (dictionaryForm, expectedRoot) => {
      const root = new ThirdDeclension({ dictionaryForm }).getRoot()
      try {
        expect(root).toEqual(expectedRoot)
      } catch (e) {
        e.message += `\nDictionary Form: ${dictionaryForm.join(', ')}`  // no custom error message in jest
        throw e
      }
    }

    it('gives -tion for -tio, onis', () => {
      testGetRoot([ 'ratio', 'onis', 'f.' ], 'ration')
    })

    it('gives nominative for -or, oris', () => {
      testGetRoot([ 'labor', 'oris', 'm.' ], 'labor')
    })

    it('gives -tut for -tus, utis', () => {
      testGetRoot([ 'virtus', 'utis', 'f.' ], 'virtut')
    })

    it('gives -c for -x, cis', () => {
      testGetRoot([ 'dux', 'ducis', [ 'm.', 'f.' ] ], 'duc')
    })

    it('gives -p for -ps, pis', () => {
      testGetRoot([ 'ops', 'opis', 'f,' ], 'op')
    })

    it('gives -or for -us, oris', () => {
      testGetRoot([ 'corpus', 'oris', 'm.' ], 'corpor')
    })

    it('gives -in for -en, inis', () => {
      testGetRoot([ 'nomen', 'nominis', 'n.' ], 'nomin')
    })

    it('gives -it for -ut, itis', () => {
      testGetRoot([ 'caput', 'itis', 'n.' ], 'capit')
    })

    it('gives nominative without the -is ending for -is, is', () => {
      testGetRoot([ 'civis', 'is', 'm.' ], 'civ')
    })

    it('gives -rt for -rs, tis', () => {
      testGetRoot([ 'ars', 'artis', 'f.' ], 'art')
    })

    it('gives -nt for -ns, tis', () => {
      testGetRoot([ 'mens', 'mentis', 'f.' ], 'ment')
    })

    it('gives -r for -re, is', () => {
      testGetRoot([ 'mare', 'is', 'n.' ], 'mar')
    })

    it('gives -al for -al, alis', () => {
      testGetRoot([ 'animal', 'alis', 'n.' ], 'animal')
    })

    it('gives -ar for -ar, aris', () => {
      testGetRoot([ 'exemplar', 'aris', 'n.' ], 'exemplar')
    })
  })
})
