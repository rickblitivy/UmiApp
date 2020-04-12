import getBookinfo from '@/services/book';

const BookModal= {

    namespace:'book',
    state:{
        complete:undefined,
    },
    effects:{
        *getInfo({payload},{call,put}){
            const response = yield call(getBookinfo,1);
            yield put({
                type:'changeResult',
                payload:response,
            });
        }
    },
    reducer:{
        changeResult(state,payload){
            return {...state,complete:payload.complete}
        }
    }
}

export default BookModal;