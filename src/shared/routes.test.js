import { jamPageRoute, userProfilePageRoute } from './routes'

test('jamPageRoute helper', () => {
  expect(jamPageRoute()).toBe('/jam/:id')
  expect(jamPageRoute('123')).toBe('/jam/123')
})

test('userProfileRoute helper', () => {
  expect(userProfilePageRoute()).toBe('/user/:id')
  expect(userProfilePageRoute('123')).toBe('/user/123')
})
