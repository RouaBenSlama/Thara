import React from 'react';
import {motion} from "framer-motion";

const Video = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="home"
        >
            <h2>Video</h2>

        </motion.div>
    );
};

export default Video;