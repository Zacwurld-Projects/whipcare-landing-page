// components/SplashScreen.js
import { useState, useEffect } from 'react';

interface SplashScreenProps {
    onDone?: () => void;
}

const SplashScreen = ({ onDone }: SplashScreenProps) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onDone) onDone();
        }, 3000); // 3 seconds duration

        return () => clearTimeout(timer);
    }, [onDone]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 w-full h-full z-50 bg-black">
            <video
                autoPlay
                muted
                playsInline
                onEnded={() => {
                    setIsVisible(false);
                    if (onDone) onDone();
                }}
                className="w-full h-full object-cover"
            >
                <source src="/assets/preloader.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default SplashScreen;