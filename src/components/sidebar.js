import React from 'react';
import User from '../containers/user';
import './sidebar.css';

const Sidebar = ({ contacts }) => {
    (contacts);
    return <aside className="Sidebar">
        {contacts.map(contact => <User user={contact} key={contact.user_id} />)}
    </aside>;
};

export default Sidebar;