import React from 'react';
import {motion} from "framer-motion";
import video from './Thara.mp4';

const Video = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="home"
        >
            <h2>Video</h2>
            <video controls width="800">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </motion.div>
    );
};

export default Video;