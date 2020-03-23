import { combineReducers } from "redux";

import contacts from "./contacts";
import users from "./users";
import activeUserId from "./active-user";

export default combineReducers({
    contacts,
    user: users,
    activeUserId
});