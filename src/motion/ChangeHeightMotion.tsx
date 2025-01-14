import { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

export const ChangeHeightMotion: FC<PropsWithChildren> = ({ children }) => {
    return <motion.div
        initial={{ width: '0' }}
        animate={{ width: '100px' }}
        transition={{ duration: .3 }}>
        {children}
    </motion.div>
}
