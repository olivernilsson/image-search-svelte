import Index from "./pages/index.svelte"

const index = new Index({
  target: document.body,
  props: {
    name: "world"
  }
})

export default index
