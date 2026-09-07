import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, beforeAll } from 'vitest'

// jsdom does not implement window.scrollTo; ScrollToTop calls it on route
// changes during navigation tests.
beforeAll(() => {
  window.scrollTo = () => undefined
})

afterEach(() => {
  cleanup()
})