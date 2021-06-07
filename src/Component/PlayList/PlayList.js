import React from "react";
import { usePlaylist } from "../../Contexter/playListContext";

export function PlayList(){
    const { playList, playlistId, inputPlaylistBox, showPlaylistModal, dispatchplaylist} = usePlaylist();

    return (
        <div>
            <h1>Playlist</h1>
            {playList.map((playListLister) => {
                const { id, name, videos } = playListLister;
                return (
                    <>
                        <div>
                            <p>{playListLister.name}</p>
                        </div>
                        
                        <div>
                            {videos.map((playListItem) => {
                                return (
                                    <div>
                                        <p>{playListItem}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                )
            })}
        </div>
    )
}