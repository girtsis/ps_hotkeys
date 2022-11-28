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
        const [result, setResult] = React.useState("");

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

    return(
        <Layout>
            <div className='container'>
                <div style={{marginTop: 124, marginBottom: 64}}>
                    <label htmlFor='name'>Hotkey name: </label>
                    <input type={"text"} id="name" onChange={handleNameChange} className={styles.hkInput}></input>

                    <label htmlFor='hotkey'>Hotkey keys: </label>
                    <input type={"text"} id="hotkey" onChange={handleKeyChange} className={styles.hkInput}></input>

                    <label htmlFor='description'>Hotkey description: </label>
                    <input type={"text"} id="description" onChange={handleDescriptionChange} className={styles.hkInput}></input>

                    <label htmlFor='image'>Image: </label>
                    <input type={"file"} id="image" onChange={(e) => {
                        setImage(e.target.files[0]);
                        uploader(e);
                    }} className={styles.hkInput}></input>
                </div>
                <div className={styles.previewContainer}>
                    <div className={styles.left}>
                        <img src='/logo.png' width={164}/>
                        <div className={styles.bodyContainer}>
                            <h3 className={styles.hotkeyName}>{hotkeyName}</h3>
                            <h4 className={styles.bodyHotkey}>{hotkeyKey}</h4>
                            <p className={styles.bodyDescription}>{hotkeyDescription}</p>
                        </div>
                    </div>
                    <div className={styles.right}>
                        {result && <img ref={imageRef} src={result} style={{height: "100%"}} alt="" />}
                        {/* <img src='/hk1.png' style={{height: "100%"}}/> */}
                    </div>
                </div>
            </div>

        </Layout>
    );
}
