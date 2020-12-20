import FirstDeclension from './FirstDeclension'
import SecondDeclension from './SecondDeclension'
import ThirdDeclension from './ThirdDeclension'

export function firstDeclension (nounObject) {
  return new FirstDeclension(nounObject).declinate()
}

export function secondDeclension (nounObject) {
  return new SecondDeclension(nounObject).declinate()
}

export function thirdDeclension (nounObject) {
  return new ThirdDeclension(nounObject).declinate()
}

