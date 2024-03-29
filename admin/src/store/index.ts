import {combineReducers, configureStore} from '@reduxjs/toolkit'
import overviewModuleReducer from '@modules/Overview/core/reducer'
import photosModuleReducer from '@modules/Photos/core/reducer'
import pagesModuleReducer from '@modules/Pages/core/reducer'
import settingsModuleReducer from '@modules/Settings/core/reducer'

const rootReducer = combineReducers({
	overviewModule: overviewModuleReducer,
	photosModule: photosModuleReducer,
	pagesModule: pagesModuleReducer,
	settingsModule: settingsModuleReducer
})

export const store = configureStore({
	reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store