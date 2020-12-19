import FirstDeclension from './FirstDeclension'
import SecondDeclension from './SecondDeclension'

export function firstDeclension (nounObject) {
  return new FirstDeclension(nounObject).declinate()
}

export function secondDeclension (nounObject) {
  return new SecondDeclension(nounObject).declinate()
}

