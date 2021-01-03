import React, {useEffect, useState} from 'react';
import { Video } from './Video';
import * as videoService from './VideoService'
import VideoItem from './VideoItem';
import './VideoList.css';

//componente
const VideoList = () => {

const [videos, setVideos] = useState<Video[]>([]);

const loadVideos = async () => {
    const res = await videoService.getVideos();
   
    const formatedVideos = res.data.map(video => {
        return{
            ...video,
            createdAt: video.createdAt ?
             new Date(video.createdAt):
             new Date(),
             updateAt: video.updateAt ?
             new Date(video.updateAt):
             new Date()
        }
    })
    .sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime());
   
    setVideos(formatedVideos);  
    console.log(formatedVideos);
     
}

//dentro de useEffect no podemos usar codigo asincrono    
useEffect(() => {
    loadVideos();
}, []);

    return (
        <div className="row pt-1">
            {videos.map((video) => {
             return(
                <VideoItem video = { video }
                key={video._id} loadVideos={loadVideos}/>
                )
            })}
        </div>
    )
}

export default VideoList;
