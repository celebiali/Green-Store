import store from "..";
import { append, destroy, destroyAll } from ".";

export const createModal = (name, data = false) =>
  store.dispatch(append({ name, data }));
export const destroyModal = () => store.dispatch(destroy());
export const destroyAllModal = () => store.dispatch(destroyAll());
