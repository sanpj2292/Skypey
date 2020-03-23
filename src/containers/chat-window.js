import React from "react";
import './chat-window.css';

import Header from "../components/header";
import Chats from "../components/chats";
import store from "../store";
import MessageInput from "./message-input";

import _ from 'lodash';

const ChatWindow = ({ activeUserId }) => {
    const state = store.getState();
    const { typing } = state;
    const activeUser = state.contacts[activeUserId];
    const activeUserMsgs = state.messages[activeUserId];

    return (
        <div className="ChatWindow">
            <Header user={activeUser} />
            <Chats messages={_.values(activeUserMsgs)} />
            <MessageInput value={typing} />
        </div>
    );
};

export default ChatWindow;