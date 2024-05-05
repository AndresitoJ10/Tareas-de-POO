import React, { useState } from 'react';
import ImageG from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

const Carousel = () => {
    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
        ];

    return (
    <div>
        <ImageG
        items={images}
        />
    </div>
    );
};

export default Carousel;