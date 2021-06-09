import React from "react";
import { NavLink } from "react-router-dom";
import { usePlaylist } from "../../Contexter/playListContext";

export function PlayList(){
    const { playList, playlistId, inputPlaylistBox, showPlaylistModal, dispatchplaylist} = usePlaylist();

    function DeleteHandler(playlistId){
        dispatchplaylist({type:"DELETE_PLAYLIST",payload:playlistId});
    }

    function RemoveHandler(id,playListItem){
        dispatchplaylist({type: "REMOVE_FROM_PLAYLIST", payload: playListItem,playlistId:id});
    }

    return (
        <div>
            <h1>Playlist</h1>
            {playList.map((playListLister) => {
                const { id, name, videos } = playListLister;
                return (
                    <div className="PlayList">
                        <h1>{playListLister.name}</h1>
                        <div className="PlayList-header">
                            <button onClick={() => DeleteHandler(id)}>Delete Playlist</button>
                        </div><br/>
                        <ul style={{ padding: "0px" }}>
                            {videos.map((playListItem) => (
                                <li key={playListItem.videoId} style={{ listStyleType: "none",display: "inline-block"}}>
                                    <div className="card-row">
                                        <div className="card">
                                            <NavLink to={`/videoplayer/${playListItem.videoId}`} className="link">
                                            <img
                                                src={`https://img.youtube.com/vi/${playListItem.videoImageId}/mqdefault.jpg`}
                                                alt=""
                                            />
                                            </NavLink>
                                            <div className="" style={{backgroundColor:"#41464b"}}>
                                                <h3 style={{margin:"0",color:"orange"}} className="">Poet Name : {playListItem.poetName}</h3>
                                                <span style={{fontWeight:"600",color:"orange"}}>#Topic : {playListItem.topic}</span><br/><br/>
                                                <button style={{marginBottom:"15px"}} onClick={() => RemoveHandler(id,playListItem)}>Remove</button><br/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}