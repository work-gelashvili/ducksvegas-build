import { createSlice } from "@reduxjs/toolkit";

const initialUsersData = {
  ID_IsVerified: 0,
  emailIsVerified: 0,
  name: null,
  nick: null,
  phoneIsVerified: 0,
  surname: null,
  type: null,
  userId: null,
  balance: null,
  phone: null,
  birthday: null,
  gender: null,
  zip: null,
  country: null,
  city: null,
  loggedIn: null,
};

const userData = createSlice({
  name: "user",
  initialState: initialUsersData,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeNick(state, action) {
      state.nick = action.payload;
    },
    changeSurname(state, action) {
      state.surname = action.payload;
    },
    changeType(state, action) {
      state.type = action.payload;
    },
    changeUserId(state, action) {
      state.userId = action.payload;
    },
    changeUserBalance(state, action) {
      state.balance = action.payload;
    },
    changeIsLoggedIn(state, action) {
      state.loggedIn = action.payload;
    },
    changeIsGender(state, action) {
      state.gender = action.payload;
    },
    changeIsPhone(state, action) {
      state.phone = action.payload;
    },
    changeIsBirthday(state, action) {
      state.birthday = action.payload;
    },
    changeIsZipCode(state, action) {
      state.zip = action.payload;
    },
    changeIsCountry(state, action) {
      state.country = action.payload;
    },
    changeIsCity(state, action) {
      state.city = action.payload;
    },
  },
});

export const usersAction = userData.actions;

export default userData.reducer;
