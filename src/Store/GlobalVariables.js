import { createSlice } from "@reduxjs/toolkit";

const initialGlobalVariables = {
    baseUrl: "https://ducksvegas-back.onrender.com",
    balanceInSolana: 0,
    page: null,
    mobileMenu: false,
    AsideWithdraw: false,
    AsideDeposit: false,
    AsideDetail: false,
    aSideModuleDetailWidthdraw: false,
    WithdrawStepOne: true,
    WithdrawStepTwo: false,
    WithdrawStepThree: false,
    WithdrawFinish: false,
    Aside: false,
    currency: ""
}

const GlobalVariables = createSlice({
    name: 'GlobalVariables',
    initialState: initialGlobalVariables,
    reducers: {
        changeBalanceInSolana(state, action){
            state.balanceInSolana = action.payload;
        },
        pageChanger(state, action){
            state.page = action.payload;
        },
        AsideProfile(state){
            state.Aside = !state.Aside;
        },
        AsideProfileDeposit(state, action){
            state.AsideDeposit = action.payload;
        },
        AsideProfileWithdraw(state, action){
            state.AsideWithdraw = action.payload;
        },
        AsideProfileDetail(state, action){
            state.AsideDetail = action.payload;
        },
        AsideProfileWithdrawDetail(state, action){
            state.aSideModuleDetailWidthdraw = action.payload;
        },
        WithdrawStepOne(state, action){
            state.WithdrawStepOne = action.payload;
        },
        WithdrawStepTwo(state, action){
            state.WithdrawStepTwo = action.payload;
        },
        WithdrawStepThree(state, action){
            state.WithdrawStepThree = action.payload;
        },
        WithdrawFinish(state, action){
            state.WithdrawFinish = action.payload;
        },
        openMobileMenu(state){
            state.mobileMenu = !state.mobileMenu;
        },
        changeCurrency(state, action){
            state.currency = action.payload
        }
    }
});

export const GlobalVariablesAction = GlobalVariables.actions;

export default GlobalVariables.reducer;