/*Este VideoItem va a contener un solo Video*/
import React from 'react';
import { Video } from './Video';
import ReactPlayer from 'react-player';
import './VideoItem.css';
import {useHistory} from 'react-router-dom';
import * as videoService from './VideoService';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


interface Props {
    video: Video;
    loadVideos: () => void;
}


const VideoItem = ({ video ,loadVideos}: Props) => {
const history = useHistory();

const handleDelete = async (id:string) => {
    await videoService.deleteVideo(id);
    loadVideos();
    toast.success("Video Deleted Succesfully");    
}

    return (
        <div className="col-md-6 pl-4 pt-3">
            <div className="card video-card">
                <div className="card-body border">
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className="card-title" style={{cursor:'pointer'}} onClick={() => history.push(`/update/${video._id}`)}>{video.title}</h1>
                        <span className="text-danger span-borrar mr-2" onClick={() => video._id && handleDelete(video._id)}>X</span>
                    </div>
                    <h6 className="card-subtitle">{video.description}</h6>
                </div>

                <div className="card-footer">
                    <div className="embed-responsive embed-rexxxsponsive-16by9">
                        <ReactPlayer url={video.url} 
                        controls={true} light={false}
                        playing={false}
                        />
                    </div>
                </div>


            </div>

        </div>
    )
}

export default VideoItem;
