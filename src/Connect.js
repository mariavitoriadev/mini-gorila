import React from 'react';

import Header from './components/header'
import ConnectHeader from './components/connect/ConnectHeader';
import ConnectContent from './components/connect/ConnectContent';

export default function Connect () {
    return (
        <>
            <Header></Header>
            <ConnectHeader></ConnectHeader>
            <ConnectContent></ConnectContent>
        </>
    )
}
