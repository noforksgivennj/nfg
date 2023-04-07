
const contentful = require('contentful')
import styled from './homeCarousel.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react'

const client = contentful.createClient({
    space: 'vryryxwbv6r1',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'iELaU9bgW1qLMPIPWOr3Z2vCl8iXk3ADMFtsOJvE0TM'
})



export default function HomeCarousel() {
    const [images, setImages] = useState()

    useEffect(() => {
        client.getEntry('7bLiqM9tiUuuVBd2aqdOy0')
            .then((entry) => setImages(entry.fields.images))
            .catch(console.error)

    }, [])

    return (

        <div className={styled.container}>

        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            showThumbs={false}
            showStatus={false}
            showArrows={false}

        >
            {images?.map((val, key) => {

                console.log(val)
                return (
                    <div key={key}>
                        <img src={val.fields.file.url} />


                    </div>
                )
            })}

        </Carousel>
        </div>

    )
} 