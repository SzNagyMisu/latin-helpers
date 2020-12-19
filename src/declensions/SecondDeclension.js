import DeclensionBase from './DeclensionBase'

export default class SecondDeclension extends DeclensionBase {
  get suffixes () {
    if (!this._suffixes) {
      const isNeutral = this.nounObject.dictionaryForm[2] === 'n.'
      const singular = [ '-', 'um', 'i', 'o', 'o' ]
      const plural = isNeutral
        ? [ 'a', 'a', 'orum', 'is', 'is' ]
        : [ 'i', 'os', 'orum', 'is', 'is' ]

      this._suffixes = [ singular, plural ]
    }

    return this._suffixes
  }

  getRoot () {
    const nominative = this.nounObject.dictionaryForm[0]
    const isPlural = this.nounObject.dictionaryForm[1] === 'orum'

    if (isPlural) return nominative.slice(0, -1)
    if (nominative.endsWith('er')) return nominative
    return nominative.slice(0, -2)
  }

  declinate () {
    const declinated = super.declinate()

    if (this.nounObject.dictionaryForm[0].endsWith('us')) {
      this._addVocative(declinated)
    }

    return declinated
  }

  _addVocative (declinated) {
    // TODO add more rules
    declinated.singular.vocative = this.getRoot() + 'e'
  }
}
