export default class DeclensionBase {
  numbers = [ 'singular', 'plural' ]
  cases = [ 'nominative', 'accusative', 'genitive', 'dative', 'ablative' ]

  constructor (nounObject) {
    this.nounObject = nounObject
  }

  declinate () {
    const root = this.getRoot()
    const declinated = {}
    this.numbers.forEach((number, numberIndex) => {
      declinated[number] = {}
      this.cases.forEach((kase, caseIndex) => {
        declinated[number][kase] = root + this.suffixes[numberIndex][caseIndex]
      })
    })

    declinated.singular.nominative = this.nounObject.dictionaryForm[0]

    if (this.nounObject.singularOnly) delete declinated.plural
    if (this.nounObject.pluralOnly) delete declinated.singular

    return declinated
  }
}
