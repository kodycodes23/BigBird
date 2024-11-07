import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface storeRealCryptoData {
  realCryptoData: any
}

const initialState: storeRealCryptoData = {
  realCryptoData: null,
}

export const storeRealCryptoSlice = createSlice({
  name: 'real crypto',
  initialState,
  reducers: {
    getRealCryptoData: (state, action: PayloadAction<any>) => {
        state.realCryptoData = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { getRealCryptoData } = storeRealCryptoSlice.actions

export default storeRealCryptoSlice.reducer