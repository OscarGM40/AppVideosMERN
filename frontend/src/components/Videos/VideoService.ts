import axios from 'axios';
import { Video } from './Video';

const API = 'http://localhost:4000';

//getALL
export const getVideos = async () => {
   return await axios.get<Video[]>(`${API}/videos`);      
}
//getOne
export const getVideo = async (id: string) => {
   return await axios.get<Video>(`${API}/videos/${id}`);    
}
//insert One
export const createVideo = async (video: Video) => {
   return await axios.post(`${API}/videos`,video);    
}
//update One
export const updateVideo = async (id: string,video: Video) => {
   return await axios.put(`${API}/videos/${id}`, video);
}
//delete One 
export const deleteVideo = async (id: string) => {
   return await axios.delete(`${API}/videos/${id}`);
}
