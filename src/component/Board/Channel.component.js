import React, { useEffect } from 'react'
import { SortableHandle } from 'react-sortable-hoc'


const Channel = props => {
    const { clipState, handleClipChange, track, deleteChannel } = props

  
   
    const Draghandle = SortableHandle(() => <svg
        t="1598071646386"
        className="Board-Channel__dragicon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="17445"
        width="24"
        height="24">
        <path d="M84.828402 266.60355h848.284024c36.35503 0 60.591716-24.236686 60.591716-60.591716s-24.236686-60.591716-60.591716-60.591716h-848.284024c-36.35503 0-60.591716 24.236686-60.591716 60.591716s24.236686 60.591716 60.591716 60.591716z m848.284024 181.775148h-848.284024c-36.35503 0-60.591716 24.236686-60.591716 60.591716s24.236686 60.591716 60.591716 60.591716h848.284024c36.35503 0 60.591716-24.236686 60.591716-60.591716s-24.236686-60.591716-60.591716-60.591716z m0 302.95858h-848.284024c-36.35503 0-60.591716 24.236686-60.591716 60.591716s24.236686 60.591716 60.591716 60.591716h848.284024c36.35503 0 60.591716-24.236686 60.591716-60.591716s-24.236686-60.591716-60.591716-60.591716z" p-id="17446" fill="#1a1a1a"></path></svg>)


    const createChannelInfo = () => {
        return (
            <div className="Board-Channel__info">
                <Draghandle />
                <div className="Board-Channel__id">{clipState[18]}</div>
                <button id={`channel${track}`}>{track}</button>
                <span className="Board-Channel__stateicon">
                    <input
                        checked={clipState[16]}
                        onChange={() => handleClipChange(track, 16)}
                        type="checkbox"
                        id="check1" />
                    <input
                        checked={clipState[17]}
                        onChange={() => handleClipChange(track, 17)}
                        type="checkbox"
                        id="check2" />
                </span>
            </div>
        )
    }


    const createChannelItem = () => {
        const channelList = clipState.filter((clip, i) => i < 16).map((clip, i) => {
            return (
                <input
                    key={`clip${i}`}
                    checked={clipState[i]}
                    type="checkbox"
                    className="Board-Channel__item"
                    onChange={() => handleClipChange(track, i)}
                    data-step={i}
                />
            )
        })
        return channelList
    }

    const createChannelDelete = () => {
        return <svg
            t="1598061086726"
            onClick={() => deleteChannel(track)}
            className="Board-Channel__delete"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5710"
            width="16"
            height="16">
            <path d="M989.431954 201.728L679.159954 512l310.272 310.272a118.198857 118.198857 0 0 1-167.058285 167.131429L512.028526 679.058286l-310.345143 310.345143A117.76 117.76 0 0 1 118.15424 1024a118.198857 118.198857 0 0 1-83.529143-201.728L344.897097 512 34.625097 201.728A118.125714 118.125714 0 0 1 201.683383 34.596571L512.028526 344.868571 822.300526 34.596571a118.198857 118.198857 0 0 1 167.131428 167.131429z" p-id="5711" fill="#707070"></path></svg>
    }

    return (
        <li>
            <div className="Board-Channel">
                {createChannelInfo()}
                <div className="Board-Channel__group">
                    {createChannelItem()}
                </div>
                {createChannelDelete()}
            </div>
        </li>
    )
}
export default Channel