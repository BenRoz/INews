import { prepareDataForSingleApiCall } from './ApiCall'
import { NY_TIMES_ID_TO_NAME } from '../../utils/QueryMaps'

describe('prepareDataForSingleApiCall', () => {
  test('when param comes empty array', () => {
    const result = prepareDataForSingleApiCall([])
    expect(result).toBe(null)
  })
  test('when param does not exist', () => {
    const result = prepareDataForSingleApiCall(undefined)
    expect(result).toBe(null)
  })
  test('when param is array with one choice', () => {
    const id = '1111'
    const result = prepareDataForSingleApiCall([id])
    expect(result).toBe(`( "${NY_TIMES_ID_TO_NAME[id]}" )`)
  })
  test('when param is array with multiple choice', () => {
    const ids = ['1111', '2222']
    const result = prepareDataForSingleApiCall(ids)
    expect(result).toBe(
      `( "${NY_TIMES_ID_TO_NAME[ids[0]]}", "${NY_TIMES_ID_TO_NAME[ids[1]]}" )`
    )
  })
})
