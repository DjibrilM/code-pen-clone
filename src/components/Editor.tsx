//language image logo


import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { aura, auraInit } from '@uiw/codemirror-theme-aura';
import { TbLayoutSidebarRightExpand } from 'react-icons/tb';
import { FiCopy } from 'react-icons/fi';
import { TbLayoutSidebarLeftExpand } from 'react-icons/tb';



interface Props {
    title: string,
    onchange: Function,
    copy: Function,
    active: boolean,
    logo: JSX.Element,
    language: string,
    extension: Function,
    setActive: Function,
    resetActiveEditor: Function,
    value: string,
}

const Editor: React.FC<Props> = ({ title, language, onchange, copy, active, logo, extension, setActive, resetActiveEditor, value }): JSX.Element => {

    return (
        <div
            className={"editor-container " + (active === true ? ' active' : " noActive")}  >
            <div className="editor-title w-full h-14 bg-[#050509] flex justify-between items-center border-b-[#21202e] border-b-[4px] ">
                {/* <h1>{title}</h1> */}
                <button className='bg-[#21202e] h-full w-[6rem] text-white flex items-center justify-center gap-2  border-gray-600 border-t-4'>
                    {logo}
                    {title}
                </button>

                <div className="p-4 flex gap-3 items-center">
                    <FiCopy onClick={() => copy("javascript")} className='text-white cursor-pointer active:text-green-400 duration-100 active:scale-[1.8]' />

                    {
                        active ?
                            <TbLayoutSidebarRightExpand onClick={() => resetActiveEditor()} className='text-green-300 text-[1.4rem] cursor-pointer' /> :
                            <TbLayoutSidebarLeftExpand onClick={() => setActive()} className='text-white text-[1.4rem] cursor-pointer' />
                    }

                </div>
            </div>
            {/*  */}

            <CodeMirror
                value={value}
                maxHeight='445px'
                height='100%'
                minHeight='200px'
                className='editor'
                extensions={[extension({})]}
                lang='javascript'
                onChange={(value: string) => onchange(value, language)}
                theme={aura}
                style={{
                    border: "solid  0px",
                    position: "absolute",
                    overflowY: "auto",
                    overflowX: "clip",
                    width: '100%',
                    maxHeight: '500px',
                    height: '100%',
                }}
            />
        </div>
    )
};

export default Editor;
