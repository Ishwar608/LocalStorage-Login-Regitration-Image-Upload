import { Button, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Stack } from '@mui/system';
import ImageGallary from './ImageGallary';
import one from '../Image/one.jpg'

export default function UploadImage() {
    const [file, setFile] = useState('');
    const [img, setImg] = useState(one)
    const [imgList,setImageList] = useState([])

    useEffect(()=>{
        if(localStorage.getItem('IMAGE') != null){
            setImageList(JSON.parse(localStorage.getItem('IMAGE')))
        }
      },[])
    const convertBase64 = (file) => {
        return new Promise(resolve => {
            let fileInfo;
            let baseURL = "";
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                baseURL = reader.result;
                resolve(baseURL);
            };
        });
    }

    const inputHandler = (e) => {
        setFile(e.target.files[0])

    }

    const submitImage = (e) => {
        e.preventDefault()
        convertBase64(file).then(result => {
            let d = [...imgList];
            d.push(result);
            setImg(result)
            localStorage.setItem("IMAGE", JSON.stringify(d));
            setImageList(d);
        })
     
    }
console.log(imgList);
    return (
        <>
            <form onSubmit={submitImage}>
                <Stack
                    spacing={3}
                    direction="row"
                    alignItems='center'
                    justifyContent='center'
                    marginTop='30px'
                >
                    <Typography>SELECT IMAGE </Typography>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" onChange={inputHandler} />
                        <PhotoCamera />
                    </IconButton>
                    <Typography>{file.name}</Typography>
                    <Button type='submit' variant="outlined">Upload</Button>
                </Stack>
            </form>
            <Stack
                spacing={3}
                direction="row"
                alignItems='center'
                justifyContent='center'
                marginTop='30px'
            >
                <ImageGallary img={img} />
                
            </Stack>
        </>
    )
}
