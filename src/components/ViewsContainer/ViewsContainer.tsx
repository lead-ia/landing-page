import React, { useRef, useState, useEffect } from 'react';
import View1 from './views/View1';
import View2 from './views/View2';
import View3 from './views/View3';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowUp } from 'lucide-react';

const ViewsContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentView, setCurrentView] = useState(0);

  const scrollToView = (viewIndex: number) => {
    if (containerRef.current) {
      const scrollAmount = viewIndex * window.innerHeight;
      containerRef.current.scrollTo({
        top: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToNextView = () => {
    if (containerRef.current) {
      const nextView = Math.min(currentView + 1, 2); // 2 is the index of the last view
      scrollToView(nextView);
    }
  };

  const scrollToPreviousView = () => {
    if (containerRef.current) {
      const prevView = Math.max(currentView - 1, 0); // 0 is the index of the first view
      scrollToView(prevView);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop;
        const viewIndex = Math.round(scrollPosition / window.innerHeight);
        setCurrentView(viewIndex);
      }
    };

    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener('scroll', handleScroll, { passive: true });
      return () => currentContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden relative bg-primary">
      <div
        ref={containerRef}
        className="h-full snap-y snap-mandatory overflow-y-auto"
      >
        <div className="h-screen snap-start flex items-center justify-center">
          <View1 />
        </div>
        <div className="h-screen snap-start flex items-center justify-center bg-white">
          <View2 />
        </div>
        <div className="h-screen snap-start flex items-center justify-center bg-white">
          <View3 />
        </div>
      </div>

      {/* FAB-style button to go down with text and icon - only show if not on last view */}
      {currentView < 2 && (
        <div className="fixed bottom-6 right-6 z-10">
          <Button
            onClick={scrollToNextView}
            size="lg"
            variant="outline"
          >
            <ArrowDown /> Continuar
          </Button>
        </div>
      )}

      {/* Button to go up - only show if not on first view */}
      {currentView > 0 && (
        <div className="fixed bottom-6 left-6 z-10">
          <Button
            onClick={scrollToPreviousView}
            size="lg"
            variant="outline"
          >
            <ArrowUp className="h-6 w-6" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ViewsContainer;
