import { combineReducers } from "redux";

import contacts from "./contacts";
import users from "./users";
import activeUserId from "./active-user";
import { messages } from "./messages";
import { typing } from "./typing";

export default combineReducers({
    contacts,
    user: users,
    activeUserId,
    messages,
    typing
});