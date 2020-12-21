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
    if (nominative.endsWith('s') && genitive.endsWith('tis')) return nominative.slice(0, -1) + 't'
    if (nominative.endsWith('us') && genitive.endsWith('utis')) return nominative.slice(0, -1) + 't'
    if (nominative.endsWith('us') && genitive.endsWith('oris')) return nominative.slice(0, -2) + 'or'
    if (nominative.endsWith('ut') && genitive.endsWith('itis')) return nominative.slice(0, -2) + 'it'
    if (nominative.endsWith('x') && genitive.endsWith('cis')) return nominative.slice(0, -1) + 'c'
    if (nominative.endsWith('ps') && genitive.endsWith('pis')) return nominative.slice(0, -1)
    if (nominative.endsWith('en') && genitive.endsWith('inis')) return nominative.slice(0, -2) + 'in'
    if (nominative.endsWith('is') && genitive.endsWith('is')) return nominative.slice(0, -2)  // TODO genitive.endsWith('is') -> third declension
    if (nominative.endsWith('re')) return nominative.slice(0, -1)
    return nominative
  }
}
