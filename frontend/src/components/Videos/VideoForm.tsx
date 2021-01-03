/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Video } from './Video';
import * as videoService from './VideoService';
import 'react-toastify/dist/ReactToastify.css';
import 'bootswatch/dist/cerulean/bootstrap.min.css';
import './VideoForm.css'
import { toast } from 'react-toastify';
import { Button } from '@material-ui/core';
import { Icon } from '@material-ui/core';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

interface Params {
    id: string;
}

//aqui empieza el componente
const VideoForm = () => {

    const history = useHistory();
    const params = useParams<Params>();
    console.log(params.id);

    const initialState = {
        title: '',
        description: '',
        url: '',
    }
    const [video, setVideo] = useState<Video>(initialState);

    const handleInputChange = (e: InputChange) => {

        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    

        if (!params.id) {
            await videoService.createVideo(video);
            toast.success("New Video Added Succesfully");
            setVideo(initialState);
        } else {
            await videoService.updateVideo(params.id, video);
            toast.success("Video Updated Succesfully");
            setVideo(initialState);
        }

        history.push('/');
    }

    const getVideo = async (id: string) => {
        const res = await videoService.getVideo(id);
        const { title, description, url } = res.data;
        setVideo({
            title, description, url
        })

    }
 
    //getVideo(params.id);

    useEffect(() => {
        if (params.id) getVideo(params.id);
    }, [])


    return (
        <>
            <div className="row p-4">
                <div className="col-md-6 offset-md-3">
                    <div className="card-header bg-warning border border-dark ">
                        {
                            params.id ?
                                <h1 className="text-center text-info display-4">Update Video</h1>
                                :
                                <h1 className="text-center text-info display-4">New Video</h1>
                        }
                    </div>

                    <div className="card-body border border-success rounded">
                        <form className="" onSubmit={handleSubmit}>

                            <div className="form-group pt-3">
                                <input type="text" name="title"
                                    placeholder="Write a title for this video"
                                    className="form-control"
                                    autoFocus={true}
                                    onChange={handleInputChange}
                                    value={video.title} />
                            </div>

                            <div className="form-group pt-3">
                                <input type="text" name="url"
                                    placeholder="Enter url like: http(s)://somesite.com"
                                    className="form-control"
                                    onChange={handleInputChange}
                                    value={video.url} />
                            </div>

                            <div className="form-group">
                                <textarea name="description" rows={3}
                                    className="form-control"
                                    placeholder="Write a short description"
                                    onChange={handleInputChange}
                                    value={video.description}
                                ></textarea>
                            </div>

                            {
                                params.id ?
                                    <button className="btn btn-dark btn-lg">    <Button variant="contained" size="large" color="secondary" startIcon={<Icon>start</Icon>}
                                        endIcon={<Icon>start</Icon>}>Update Video</Button> </button>
                                    :
                                    <button className="btn btn-dark btn-lg">    <Button variant="contained" size="large" color="secondary" startIcon={<Icon>start</Icon>}
                                        endIcon={<Icon>start</Icon>}>Create Video</Button> </button>
                            }

{/* 
                            <input type="reset" value="Reset Fields" className="btn btn-warning btn-lg border ml-5" /> */}

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default VideoForm;