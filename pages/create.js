import React, { useState, useRef } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/create.module.css';

export default function Home() {
    const [hotkeyName, setHotkeyName] = useState("Eyedropper");
    const [hotkeyKey, setHotkeyKey] = useState("Press \"i\"");
    const [hotkeyDescription, setHotkeyDescription] = useState("The Eyedropper tool is used to select a color from an image or any Photoshop document.");

    function handleNameChange(e){
        setHotkeyName(e.target.value);
    }

    function handleKeyChange(e){
        setHotkeyKey(e.target.value);
    }

    function handleDescriptionChange(e){
        setHotkeyDescription(e.target.value);
    }

    const [image, setImage] = useState("");
    const imageRef = useRef(null);

    function useDisplayImage() {
        const [result, setResult] = useState("");

        function uploader(e) {
        const imageFile = e.target.files[0];

        const reader = new FileReader();
            reader.addEventListener("load", (e) => {
                setResult(e.target.result);
        });

        reader.readAsDataURL(imageFile);
        }

        return { result, uploader };
    }

    const { result, uploader } = useDisplayImage();

    async function handleSubmit(e){
        e.preventDefault();
        console.log(image);
    }

    return(
        <Layout>
            <div className='container'>
                <div style={{marginTop: 124, marginBottom: 64}}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='name'>Hotkey name: </label>
                        <input required type={"text"} id="name" onChange={handleNameChange} className={styles.hkInput}></input>

                        <label htmlFor='hotkey'>Hotkey keys: </label>
                        <input required type={"text"} id="hotkey" onChange={handleKeyChange} className={styles.hkInput}></input>

                        <label htmlFor='description'>Hotkey description: </label>
                        <input required type={"text"} id="description" onChange={handleDescriptionChange} className={styles.hkInput} ></input>

                        <label htmlFor='image'>Image: </label>
                        <input required type={"file"} accept={"image/png, image/jpeg"} id="image" onChange={(e) => {
                            setImage(e.target.files[0]);
                            uploader(e);
                        }} className={styles.hkInput}></input>

                        <input type={"submit"} className="btn btn-primary" value={"Submit"}/>
                    </form>
                </div>

                <h3>Preview</h3>

                <div className={styles.previewContainer}>
                    <div className={styles.left}>
                        <img src='/logo.png' width={164}/>
                        <div className={styles.bodyContainer}>
                            <h3 className={styles.hotkeyName}>{hotkeyName}</h3>
                            <h4 className={styles.bodyHotkey}>{hotkeyKey}</h4>
                            <p className={styles.bodyDescription}>{hotkeyDescription}</p>
                        </div>

                        {/*Trigger modal*/}
                        <img src='/carousel1.png' width={280} className={styles.helperImage} data-bs-toggle="modal" data-bs-target="#carouselModalCenter"/>
                    </div>
                    <div className={styles.right}>
                        {result && <img ref={imageRef} src={result} style={{height: "100%"}} alt="" />}
                        {/* <img src='/hk1.png' style={{height: "100%"}}/> */}
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div className='modal fade' id='carouselModalCenter' tabIndex={-1} role="dialog" aria-labelledby="carouselModalCenter" aria-hidden={true}>
                <div className='modal-dialog modal-dialog-centered modal-xl' role="document">
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <span type='button' className='close' data-dismiss='modal' aria-label='close' aria-hidden='true' style={{fontSize:48, color: "#f1f1f1", right: 0}}>&times;</span>
                        </div>
                        <div className='modal-body'>
                            <img src='/carousel1.png'></img>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
}
