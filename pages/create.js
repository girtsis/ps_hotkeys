import React, { useState, useRef } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/create.module.css';

export default function Home() {
    const [hotkeyName, setHotkeyName] = useState("Eyedropper");
    const [hotkeyKey, setHotkeyKey] = useState("Press \"i\"");
    const [hotkeyDescription, setHotkeyDescription] = useState("The Eyedropper tool is used to select a color from an image or any Photoshop document.");
    let [uniqueId, setUniqueId] = useState(1);

    function handleNameChange(e){
        setHotkeyName(e.target.value);
    }

    function handleKeyChange(e){
        setHotkeyKey(e.target.value);
    }

    function handleDescriptionChange(e){
        setHotkeyDescription(e.target.value);
    }

    const [uploadImage, setImage] = useState("");
    const [uploadGuideImages, setUploadGuideImages] = useState([]);

    const [guideImages, setGuideImages] = useState([]);


    //Can be reused anywhere
    //If needed, move to lib folder
    function useDisplayImage() {
        const [result, setResult] = useState("");

        function uploader(e) {
        const imageFile = e.target.files[0];

        //Initialize new FileReader to read files selected by user
        const reader = new FileReader();
        //The event will be triggered when the file reading has completed
        reader.addEventListener("load", (e) => {
            setResult(e.target.result);
        });

        //When this operation is finished loadend is triggered, in other words above block will be executed
        reader.readAsDataURL(imageFile);
        }

        //returns the image source and uploader function
        return { result, uploader };
    }

    const { result, uploader } = useDisplayImage();

    async function handleSubmit(e){
        e.preventDefault();

        console.log(uploadImage);
        console.log(uploadGuideImages);

        const formData = new FormData();
        formData.append("Name", e.target.name.value);
        formData.append("Description", e.target.description.value);
        formData.append("ShortcutDescription", e.target.ShortcutDescription.value);
        formData.append("HotkeyImage", uploadImage);

        if(uploadGuideImages.length != 0){
            uploadGuideImages.forEach(file => {
                formData.append("GuidanceImages", file)
            });
        }

        const response = await fetch("/api/createGuide", {
            method: "POST",

            body: formData
        });

        console.log(response.json());
    }

    function onGuidanceChange(e){
        const imageFile = e.target.files[0];

        //Initialize new FileReader to read files selected by user
        const reader = new FileReader();
        //The event will be triggered when the file reading has completed
        reader.addEventListener("load", (e) => {
            setGuideImages([...guideImages, {id: uniqueId, file: e.target.result, caption: ""}]);
        });
        let newId = uniqueId+1;
        setUniqueId(newId);

        //When this operation is finished loadend is triggered, in other words above block will be executed
        reader.readAsDataURL(imageFile);
    }

    function renderCarouselIndicators(){
        let buttons = [];
        for (let i = 1; i < guideImages.length; i++) {
            buttons.push(<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={i} aria-label={`Slide ${i+1}`} key={`b${i}`}></button>)
        }
        return (
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                {buttons}
            </div>
            );
    }

    function renderCarouselItems(){
        let items = [];
        for (let i = 1; i < guideImages.length; i++) {
            items.push(
                <div className="carousel-item" key={`c${i}`}>
                    <img src={guideImages[i].file} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <p>{guideImages[i].caption}</p>
                    </div>
                </div>
            )
            
        }

        return(
            <div className="carousel-inner">
                <div className="carousel-item active ">
                    <img className='d-block w-100' src={guideImages[0] ? guideImages[0].file : ""}></img>
                    <div className="carousel-caption d-none d-md-block">
                        <p>{guideImages[0] ? guideImages[0].caption : ""}</p>
                    </div>
                </div>
                {items}
            </div>
        )
    }

    function handleCaptionChange(e){
        let fileId = parseInt(e.target.parentNode.dataset.id);
        let newState = guideImages.map((file) => {
            if(file.id === fileId){
                return {...file, caption: e.target.value};
            }

            return file;
        })

        setGuideImages(newState);
    }

    return(
        <Layout>
            <div className='container'>
                <div style={{marginTop: 124, marginBottom: 64}}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='name'>Hotkey name: </label>
                        <input required type={"text"} id="name" name="Name" onChange={handleNameChange} className={styles.hkInput}></input>

                        <label htmlFor='hotkey'>Hotkey keys: </label>
                        <input required type={"text"} id="hotkey" name="ShortcutDescription" onChange={handleKeyChange} className={styles.hkInput}></input>

                        <label htmlFor='description'>Hotkey description: </label>
                        <input required type={"text"} id="description" name="Description" onChange={handleDescriptionChange} className={styles.hkInput} ></input>

                        <label htmlFor='image'>Image: </label>
                        <input required type={"file"} accept={"image/png, image/jpeg"} name="HotkeyImage" id="image" onChange={(e) => {
                            //set file to send to server on submit
                            setImage(e.target.files[0]);
                            uploader(e);
                        }} className={styles.hkInput}></input>

                        <br></br>

                        <h3 className='fw-bold'>Guidance images</h3>
                        <input type={"file"} accept={"image/png, image/jpeg"} name="GuidanceImages" onChange={(e) => {
                            setUploadGuideImages([...uploadGuideImages, e.target.files[0]]);
                            onGuidanceChange(e);
                            }}></input>
                        <div className='my-5'>
                            {guideImages && (
                                <>
                                    {guideImages.map((image, i) => {
                                        return (
                                            <div key={image.id} data-id={image.id}>
                                                <p>Order: {i+1}</p>
                                                <img src={image.file} height={200} className="my-4"></img>
                                                <label>Caption</label>
                                                <input name='caption' onChange={handleCaptionChange}></input>
                                            </div>

                                        )
                                    })}
                                </>
                            )}
                        </div>

                        <input type={"submit"} className="btn btn-primary" value={"Submit"}/>
                    </form>

                </div>

                <button onClick={() => {
                    console.log(guideImages);
                }}>guideImages</button>
                <h3>Test</h3>

                <h3>Preview</h3>

                <div className={styles.previewContainer}>
                    <div className={styles.left}>
                        <img src='/logo.png' width={164}/>
                        <div className={styles.bodyContainer}>
                            <h3 className={styles.hotkeyName}>{hotkeyName}</h3>
                            <h4 className={styles.bodyHotkey}>{hotkeyKey}</h4>
                            <p className={styles.bodyDescription}>{hotkeyDescription}</p>
                        </div>

                        {/*Trigger modal
                        TODO: find the most suitable image size*/}
                        {guideImages.length >= 1 && (
                            <img src={guideImages[0].file} width={280} height={180} className={styles.helperImage} data-bs-toggle="modal" data-bs-target="#carouselModalCenter"/>
                        )}

                    </div>
                    <div className={styles.right}>
                        {result && <img src={result} style={{height: "100%"}} alt="" />}
                        {/* <img src='/hk1.png' style={{height: "100%"}}/> */}
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div className='modal fade' data-bs-backdrop="static" id='carouselModalCenter' tabIndex={-1} role="dialog" aria-labelledby="carouselModalCenter" aria-hidden={true}>
                <div className='modal-dialog modal-dialog-centered modal-lg' role="document">
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <span type='button' className='close' data-bs-dismiss='modal' aria-label='close' aria-hidden='true' style={{fontSize:48, color: "#f1f1f1", right: 0}}>&times;</span>
                        </div>
                        <div className='modal-body'>

                            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                                {renderCarouselIndicators()}

                                {renderCarouselItems()}
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
}
