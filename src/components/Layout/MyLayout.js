import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { grid, th } from '@pubsweet/ui-toolkit';
import { ComponentPlugin } from 'wax-prosemirror-core';
import cokoTheme from './Theme';

import EditorElements,{ElementStyles} from './EditorElements';

const MainMenuToolBar = ComponentPlugin('mainMenuToolBar');

const Wrapper = styled.div`

background: ${th('colorBackground')};
width:100%;
height:100%;
border:1px solid gray;
display: flex;
overflow: hidden;
flex-direction: column;
* {
box-sizing: border-box;
}`;
const TopMenu = styled.div`
background:${th('colorTopMenuBackground')};
border:${th('borderWdth')} ${th(' borderStyle')} ${th(' borderColor')}
display: flex;
height: 40px;
`;

const Main = styled.div`
display: flex;
flex-grow: 1;
height: calc(100% - 40px);`;

const EditorArea = styled.div`
flex-grow: 1;`;

const WaxSurfaceScroll = styled.div`
box-sizing: border-box;
display: flex;
height: 100%;
overflow-y: auto;
position: fixed;
top: 95px;
width: 100%;
/* PM styles  for main content*/
${EditorElements};`;          /////editor elements

const EditorContainer = styled.div`
height: 100%;
width: 100%;

.ProseMirror {       
height: 100%;
padding: ${grid(10)}; 
}`;  // prosemirror



const MyLayout = ({ editor }) => {
   


    return (
        <ThemeProvider theme={cokoTheme}>
            <Wrapper>
                <TopMenu>
                    <MainMenuToolBar />
                </TopMenu>

                <Main>
                    <EditorArea>
                        <WaxSurfaceScroll>
                            <EditorContainer>{editor}</EditorContainer>
                        </WaxSurfaceScroll>
                    </EditorArea>

                </Main>

            </Wrapper>

        </ThemeProvider>
    )
}

export default MyLayout
