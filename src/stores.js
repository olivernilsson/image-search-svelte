import { writable } from "svelte/store"

export const searchTerm = writable("")

export const images = writable({})

export const storedImage = writable({})

export const pageNumber = writable(0)

export const totalPageNumber = writable(0)
