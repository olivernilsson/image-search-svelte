<script>
  import { Router, Route } from "svelte-routing";
  import Index from "./pages/index.svelte";
  import ImageDetail from "./pages/imageDetail.svelte";

  // Used for SSR. A falsy value is ignored by the Router.
  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="/" component={Index} />
    <Route path="/imageDetail" component={ImageDetail} />
  </div>
</Router>
