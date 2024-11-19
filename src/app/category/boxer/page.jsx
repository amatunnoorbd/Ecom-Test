"use client";

import { motion } from 'framer-motion';

const BoxerPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='flex justify-center h-screen mt-28 text-5xl font-semibold'
        >
            No Data Found...!
        </motion.div>
    );
};


export default BoxerPage;