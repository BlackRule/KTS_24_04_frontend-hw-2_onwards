import CartStore from 'stores/RootStore/CartStore'
import QueryParamsStore from './QueryParamsStore'
import {observable} from "mobx";
export default class RootStore {
  readonly query = observable(new QueryParamsStore())
  readonly cart = observable(new CartStore())
}
