import { RequestHandler } from 'express';
//Video es el modelo!!
import Video from './Video';


//GET ALL
export const getVideos: RequestHandler =
    async (req, res) => {
        try {
            const allVideos = await Video.find();
            res.json(allVideos);
        } catch (error) {
            res.json(error);
        }

    };

//GET ONE
export const getVideo: RequestHandler =
    async (req, res) => {
        const videoFound = await Video.findById(req.params.id);
        if (!videoFound) 
          return res.status(204).json();
      //204 es una respuesta exitosa de NO HAY CONTENIDO,es correcto!
        res.json(videoFound);
    };


//INSERT ONE
export const createVideo: RequestHandler =
    async (req, res) => {

        const videoFound = await Video.findOne({ url: req.body.url })

        if (videoFound)
            return res.status(301).json({ message: 'the URL already exists' })

        const video = new Video(req.body);
        console.log(video);
        const savedVideo = await video.save();

        res.json(savedVideo);

    };

    //UPDATE ONE
export const updateVideo: RequestHandler =
async (req, res) => {
    const updatedVideo = await Video.findByIdAndUpdate(req.params.id,req.body, {new:true});

    res.json(updatedVideo)
};

//DELETE ONE
export const deleteVideo: RequestHandler =
  async  (req, res) => {

        const videoFound = await Video.findByIdAndDelete(req.params.id);
        if (!videoFound) 
          return res.status(204).json();

        res.json(videoFound)
    };

