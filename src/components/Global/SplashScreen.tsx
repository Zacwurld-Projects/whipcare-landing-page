import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import preloaderAnimation from '@/assets/preloader.json';
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
        <div className="fixed inset-0 w-full h-full z-50 bg-white flex items-center justify-center">
            <Lottie
                animationData={preloaderAnimation}
                loop={false}
                autoplay={true}
                onComplete={() => {
                    setIsVisible(false);
                    if (onDone) onDone();
                }}
                className="w-full h-full object-contain"
                // If you need to adjust the size, you can use style prop
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </div>
    );
};

export default SplashScreen;
