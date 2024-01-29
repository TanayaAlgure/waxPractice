import { Wax } from 'wax-prosemirror-core';
import MyLayout from './Layout/MyLayout';
import config from './config/config';



import React from 'react'

const WaxEditor = () => {
    return (
        <>
            <Wax
                config={config}
                autoFocus
                placeholder="Type something..."
                value=''
                layout={MyLayout}
                onChange={source => console.log(source)}


            />
        </>
    )
}

export default WaxEditor
