const numbers = [ 'singular', 'plural' ]
const cases = [ 'nominative', 'accusative', 'genitive', 'dative', 'ablative' ]

export function firstDeclension (nounObject) {
  const suffixes = [
    [ 'a', 'am', 'ae', 'ae', 'a' ],
    [ 'ae', 'as', 'arum', 'is', 'is' ],
  ]
  const root = nounObject.dictionaryForm[0].slice(0, -1)

  const declinated = {}
  numbers.forEach((number, numberIndex) => {
    declinated[number] = {}
    cases.forEach((kase, caseIndex) => {
      declinated[number][kase] = root + suffixes[numberIndex][caseIndex]
    })
  })

  if (nounObject.singularOnly) delete declinated.plural

  return declinated
}

