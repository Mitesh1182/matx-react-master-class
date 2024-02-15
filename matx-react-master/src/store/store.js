import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootsaga from "saga/recruiter/rootsaga";
import createjobslice from "slice/recruiter/createjobslice";
import userSlice from "slice/recruiter/userSlice";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    jobs : createjobslice,
    user : userSlice
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootsaga);
export default store;