import React from 'react';
import "./main.css";

import Empty from "./empty";
import ChatWindow from "../containers/chat-window";

const Main = ({ user, activeUserId }) => {
    const renderMainContent = () => {
        if (!activeUserId) {
            return <Empty user={user} activeUserId={activeUserId} />;
        } else {
            return <ChatWindow activeUserId={activeUserId} />;
        }
    };
    return <main className="Main">{renderMainContent()}</main>;
};

export default Main;