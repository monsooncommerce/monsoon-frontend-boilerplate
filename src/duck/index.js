import { packageModules } from '../monsoon_utils';
import reducer from './operations/reducer';
import duckSaga from './operations/sagaStuff';

console.log(duckSaga);
export const saga = duckSaga;
console.log(saga);

export const containers = packageModules(require.context('./', true, /Container\.js$/));
export default reducer;
