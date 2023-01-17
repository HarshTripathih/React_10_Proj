import React from "react";
import './ImageGallary.css';
import benches from '../../components/ImageGallary/images/benches.jpg';
import bridge from '../../components/ImageGallary/images/bridge.jpg';
import jungle from '../../components/ImageGallary/images/jungle.jpg';
import lion from '../../components/ImageGallary/images/lion.jpg';
import moraine from '../../components/ImageGallary/images/moraine.jpg';
import mountain from '../../components/ImageGallary/images/mountain.jpg';
import nature from '../../components/ImageGallary/images/nature.jpg';
import road from '../../components/ImageGallary/images/road.jpg';

export default function ImageGallary() {
    return (
        <div className="ImgGal">
            <h1 style={{fontsize:'60px'}}>Image Gallary</h1>
            <div id="gallery">

                <img src={ benches } alt="loding error" />
                <img src={ bridge } alt="loding error" />
                <img src={ jungle } alt="loding error" />
                <img src={lion } alt="loding error" />
                <img src={ moraine } alt="loding error" />
                <img src={mountain } alt="loding error" />
                <img src={nature } alt="loding error" />
                <img src={road } alt="loding error" />
                <img src={ benches} alt="loding error" />
                <img src={ bridge} alt="loding error" />
                <img src={ jungle} alt="loding error" />
                <img src={lion } alt="loding error" />
                <img src={ moraine} alt="loding error" />
                <img src={ mountain} alt="loding error" />
                <img src={ nature} alt="loding error" />
                <img src={ road} alt="loding error" />
                <img src={ benches} alt="loding error" />
                <img src={ bridge} alt="loding error" />
                <img src={jungle } alt="loding error" />
                <img src={ lion} alt="loding error" />
                <img src={ moraine} alt="loding error" />
                <img src={ mountain} alt="loding error" />
                <img src={ nature} alt="loding error" />
                <img src={road } alt="loding error" />

            </div>
        </div>
    );
}