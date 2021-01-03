import {Router} from 'express';
const router = Router();

//Cuando tengamos mucha destructuracion podemos usar un alias
// import {getVideos,getVideo,createVideo,deleteVideo,updateVideo}
//  from './videos.controller';

 import * as videoController from './videos.controller';

 //endpoint para el GET ALL
router.get('/videos', videoController.getVideos);

//endpoint para el GET ONE
router.get('/videos/:id', videoController.getVideo);

 //endpoint para el Insert
router.post('/videos', videoController.createVideo);

//endpoint para el UPDATE
router.put('/videos/:id', videoController.updateVideo);

//endpoint para el DELETE
router.delete('/videos/:id', videoController.deleteVideo);

export default router;