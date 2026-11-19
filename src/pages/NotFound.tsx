import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist on FidelityNet Global Services."
        path="/404"
        noindex
      />
      <div className="bg-light flex items-center justify-center px-4 py-32 min-h-[60vh]">
        <div className="text-center max-w-2xl">
          <h1 className="text-9xl font-bold text-navy mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="gold" size="lg" icon={<Home className="w-5 h-5" />}>
                Go Home
              </Button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="bg-white text-navy px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors border border-gray-300 flex items-center justify-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
