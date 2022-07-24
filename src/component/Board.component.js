import React, { useState, useContext, useEffect } from "react";
import TopBar from "./Board/TopBar.component";
import Channel from "./Board/Channel.component";
import AddChannel from "./Board/AddChannel.component";
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from "react-sortable-hoc";

import { Context } from "../Context";

const Board = (props) => {
  const [, updateState] = useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const { patternNum, clipState, setClipState, lastChange, setLastChange } =
    useContext(Context);

  const deleteChannel = (track) => {
    const changedClipState = clipState.slice();
    changedClipState[patternNum].splice(track, 1);
    setClipState(changedClipState);
  };

  const addChannel = () => {
    const changedClipState = clipState.slice();
    changedClipState[patternNum].push(Array(18).fill(false));

    setClipState(changedClipState);
  };

  const handleClipChange = (track, step) => {
    const changedClipState = clipState.slice();
    changedClipState[patternNum][track][step] =
      !changedClipState[patternNum][track][step];
    setClipState(changedClipState);
    setLastChange([track, step]);
  };

  //Use  react-sortable-hoc to make channels sortable:
  const SortableItem = SortableElement(Channel);

  const ChannelContainer = SortableContainer(() => {
    return (
      <ul>
        {clipState[patternNum].map((elem, index) => (
          <SortableItem
            key={`item${index}`}
            track={index}
            clipState={clipState[patternNum][index]}
            handleClipChange={handleClipChange}
            index={index}
            deleteChannel={deleteChannel}
          />
        ))}
      </ul>
    );
  });

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const changedPattern = arrayMove(clipState[patternNum], oldIndex, newIndex);
    clipState[patternNum] = changedPattern;
    setClipState(clipState);
    forceUpdate();
  };

  return (
    <div className="Board">
      <TopBar />
      <div id="scroll">
        <ChannelContainer onSortEnd={onSortEnd} useDragHandle />
        <AddChannel addChannel={addChannel} />
      </div>
    </div>
  );
};
export default Board;
