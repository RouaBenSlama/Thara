import React from 'react';
import { motion } from "framer-motion";

const Video = ({ youtubeUrl }) => {
    if (!youtubeUrl) {
        return <div>Veuillez fournir une URL de vidéo YouTube.</div>;
    }

    const videoId = youtubeUrl.includes('youtu.be') 
        ? youtubeUrl.split('youtu.be/')[1] 
        : youtubeUrl.split('v=')[1].split('&')[0];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="home"
        >
            <h2>Video</h2>
            <iframe 
                width="800" 
                height="450" 
                src={`https://www.youtube.com/embed/${videoId}`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe>
        </motion.div>
    );
};

export default Video;
