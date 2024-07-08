
import Banks from './Banks'
import React, { useEffect, useRef, useState } from 'react'

const BankOptions = ({title, setup, defaultValue}) => {
    const [text, setText] = useState('')
    const [content, setContent] = useState(defaultValue ? defaultValue :'')
    const [codes, setCodes] = useState(Banks || [])
    const [all, setAll] = useState([])
    const togref = useRef()
    const [view, setView] = useState(false)
    
    useEffect(() => {
        togref && window.addEventListener('click', e => {togref.current !== null && !togref.current.contains(e.target) && setView(false) }, true)
    }, [])

    const handleChange = val => {
        setText(val)
        if(val.length > 0) {
            const findText = codes.filter(ele => ele.bank.toLowerCase().includes(val?.toLowerCase()))
            setCodes(findText)
        }else {
            setCodes(all)
        }
    }
    const handleSelection = val => {
        setContent(`${val.bank}`)
        setup(val)
        setView(false)
    }
    
    return (
        <div className='relative mb-4'>
            <div ref={togref} className={`${view ? '' : 'hidden'} absolute top-[4rem] z-10 left-0 w-full bg-white border shadow-2xl`}>
                <div className="w-11/12 mx-auto mt-3">
                    <input value={text} onChange={e => handleChange(e.target.value)} placeholder='Search country here!...' type="text" className="border text-sm p-2 w-full rounded-sm" />
                    <div className="h-[20rem] overflow-y-auto scrolls">
                        {codes.map((item, i) => (
                            <div onClick={() => handleSelection(item)} className="text-xs p-1.5 border-b cursor-pointer hover:bg-slate-50" key={i}>{item.bank}</div>
                        ))}
                    </div>
                </div>
            </div>
            <input onClick={() => setView(true)} className='w-full outline-none border border-zinc-400 hover:border-zinc-600 p-4 rounded' placeholder={title} value={content} readOnly />
        </div>
    )
}

export default BankOptions

