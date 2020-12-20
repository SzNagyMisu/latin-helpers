import DeclensionBase from './DeclensionBase'

export default class ThirdDeclension extends DeclensionBase {
  suffixes = [
    [ '-', 'em', 'is', 'i', 'e' ],
    [ 'es', 'es', 'um', 'ibus', 'ibus' ],
  ]

  getRoot () {
    const nominative = this.nounObject.dictionaryForm[0]
    const genitive = this.nounObject.dictionaryForm[1]

    if (nominative.endsWith('tio') && genitive.endsWith('onis')) return nominative + 'n'
    return nominative
  }
}
