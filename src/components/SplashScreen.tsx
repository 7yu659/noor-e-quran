import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 500);
    const timer2 = setTimeout(() => setStage(2), 1500);
    const timer3 = setTimeout(() => setStage(3), 2500);
    const timer4 = setTimeout(() => onComplete(), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10 flex items-center justify-center islamic-pattern">
      {/* Background Geometric Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-primary rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border-2 border-accent rounded-full animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-primary/30 rounded-full animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10">
        {/* Arabic Calligraphy Style */}
        <div className={`transition-all duration-1000 ${stage >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <h1 className="text-6xl md:text-8xl font-bold arabic-text text-primary animate-pulse-glow mb-4">
            القرآن الكريم
          </h1>
        </div>

        {/* Bengali Text */}
        <div className={`transition-all duration-1000 delay-300 ${stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-bold bengali-text text-foreground animate-fade-in mb-6">
            কোরআন শরীফ
          </h2>
        </div>

        {/* Subtitle */}
        <div className={`transition-all duration-1000 delay-500 ${stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg md:text-xl text-muted-foreground bengali-text animate-fade-in">
            নূরে কুরআন - আলোর উৎস
          </p>
        </div>

        {/* Loading Animation */}
        <div className={`mt-8 transition-all duration-500 ${stage >= 1 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-2 border-accent/30 rounded-lg rotate-45 animate-float"></div>
      <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-primary/30 rounded-lg rotate-12 animate-float delay-500"></div>
      
      {/* Islamic Star Pattern */}
      <div className="absolute top-1/4 right-1/3 w-8 h-8 text-accent/30 animate-float delay-700">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
    </div>
  );
};