import create from 'zustand'

export default create(set => ({
  language:"en",
  setLanguage: (lang) => set(s => ({ language:lang })),
}))
