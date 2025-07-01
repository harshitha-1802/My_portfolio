
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Redirect to the main HTML file
    window.location.href = '/index.html';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Redirecting to Portfolio...</h1>
        <p className="text-xl text-muted-foreground">
          <a href="/index.html" className="text-blue-500 hover:underline">
            Click here if not redirected automatically
          </a>
        </p>
      </div>
    </div>
  );
};

export default Index;
