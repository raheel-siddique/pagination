import {configureStore} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { api } from './components/services/api'

const store = configureStore({
  reducer: {
		[api.reducerPath]: api.reducer
  },
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})	
setupListeners(store.dispatch)


export const useAppDispatch = () => useDispatch()
export default store
