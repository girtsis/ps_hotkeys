import multer from "multer";
import nextConnect from 'next-connect';

const upload = multer({
    storage: multer.diskStorage({
        destination: "./public/uploadedImages",
        filename: (req, file, cb) => cb(null, file.originalname),
    }),
})

const apiRoute = nextConnect({
    onError(error, req, res) {
      res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
      res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

apiRoute.use(upload.fields([
  {name: "HotkeyImage", maxCount: 1},
  {name: "GuidanceImages", maxCount: 8}
]));
//apiRoute.use(upload.array('GuidanceImages'));

// apiRoute.use(async (req, res) => {
//     // let guidanceImages = [];
//     // let mainImage = {ImagePath: req.file.originalname};

//     // req.files.map(file => {
//     //   guidanceImages.push({ImagePath: file.originalname})
//     // })
  
//     //Save image paths to database
//     //...

// })

apiRoute.post((req, res) => {
    res.status(200).json({ data: 'success' });
});

export default apiRoute;

export const config = {
    api: {
      bodyParser: false, // Disallow body parsing, consume as stream
    },
};