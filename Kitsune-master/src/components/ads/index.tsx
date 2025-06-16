import React, { useEffect } from 'react';

interface AdProps {
  position: 'top' | 'bottom';
  className?: string;
}

export const Advertisement: React.FC<AdProps> = ({ position, className = '' }) => {
  useEffect(() => {
    // إضافة سكريبت التهيئة
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.text = `
      atOptions = {
        'key' : '616ae1208795cc7f6c060dab3f90b39a',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    `;
    document.body.appendChild(script1);

    // إضافة سكريبت الإعلان
    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = '//www.highperformanceformat.com/616ae1208795cc7f6c060dab3f90b39a/invoke.js';
    document.body.appendChild(script2);

    return () => {
      // تنظيف السكريبتات عند إزالة المكون
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className={`w-full min-h-[250px] flex items-center justify-center ${className}`} id={`ad-container-${position}`}>
      <div className="w-[300px] h-[250px]"></div>
    </div>
  );
};

export default Advertisement;
