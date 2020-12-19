import DeclensionBase from './DeclensionBase'

export default class FirstDeclension extends DeclensionBase {
  suffixes = [
    [ '-', 'am', 'ae', 'ae', 'a' ],
    [ 'ae', 'as', 'arum', 'is', 'is' ],
  ]

  getRoot () {
    return this.nounObject.dictionaryForm[0].slice(0, -1)
  }
}

