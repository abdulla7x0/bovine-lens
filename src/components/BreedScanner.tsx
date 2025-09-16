import { useState, useRef, DragEvent } from 'react';
import { 
  UploadCloud, 
  Image as ImageIcon, 
  Loader2, 
  CheckCircle, 
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

type ScannerStatus = 'idle' | 'active' | 'loading' | 'success' | 'error';

interface ScanResult {
  breed: string;
  confidence: number;
  description?: string;
}

const BreedScanner = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<ScannerStatus>('idle');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Mock scan results for demo
  const mockResults: ScanResult[] = [
    { breed: 'Holstein', confidence: 94, description: 'Black and white dairy breed known for high milk production' },
    { breed: 'Angus', confidence: 89, description: 'Black beef cattle breed known for marbled meat quality' },
    { breed: 'Hereford', confidence: 87, description: 'Red with white face, excellent for beef production' },
    { breed: 'Charolais', confidence: 91, description: 'Large, muscular breed with cream to light gold coloring' },
  ];

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file (JPG, PNG, GIF)');
      setStatus('error');
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      setError('File size must be less than 10MB');
      setStatus('error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target?.result as string);
      setStatus('active');
      setError(null);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const simulateAnalysis = () => {
    setStatus('loading');
    setError(null);
    
    // Simulate API call with random result
    setTimeout(() => {
      const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
      setScanResult(randomResult);
      setStatus('success');
    }, 2500);
  };

  const resetScanner = () => {
    setStatus('idle');
    setSelectedImage(null);
    setScanResult(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const renderIdleState = () => (
    <div
      className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
        isDragOver 
          ? 'border-primary bg-primary/5 scale-105' 
          : 'border-border hover:border-primary/50'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
    >
      <div className="animate-float">
        <UploadCloud className="h-16 w-16 mx-auto mb-4 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Upload Cattle Photo</h3>
      <p className="text-muted-foreground mb-4">
        {t('uploadOrDrag')}
      </p>
      <p className="text-sm text-muted-foreground">
        JPG, PNG or GIF up to 10MB
      </p>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        className="hidden"
      />
    </div>
  );

  const renderActiveState = () => (
    <div className="space-y-6">
      <div className="relative">
        <img
          src={selectedImage!}
          alt="Selected cattle"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <button
          onClick={resetScanner}
          className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-muted transition-colors"
          aria-label="Remove image"
        >
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>
      
      <div className="text-center">
        <button
          onClick={simulateAnalysis}
          className="btn-primary inline-flex items-center space-x-2"
        >
          <ImageIcon className="h-5 w-5" />
          <span>{t('analyze')}</span>
        </button>
      </div>
    </div>
  );

  const renderLoadingState = () => (
    <div className="space-y-6">
      <div className="relative">
        <img
          src={selectedImage!}
          alt="Selected cattle"
          className="w-full h-64 object-cover rounded-lg shadow-lg opacity-75"
        />
        <div className="absolute inset-0 bg-primary/10 rounded-lg flex items-center justify-center">
          <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-2" />
            <p className="text-sm font-medium">{t('analyzing')}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-muted rounded-lg p-4">
        <div className="flex items-center space-x-3 mb-3">
          <Loader2 className="h-5 w-5 animate-spin text-primary" />
          <span className="font-medium">AI Analysis in Progress</span>
        </div>
        <div className="bg-background rounded-full h-2 overflow-hidden">
          <div className="animate-progress-bar h-full bg-gradient-primary"></div>
        </div>
      </div>
    </div>
  );

  const renderSuccessState = () => (
    <div className="space-y-6">
      <div className="relative">
        <img
          src={selectedImage!}
          alt="Selected cattle"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
      
      <div className="animate-scanner-success bg-success/10 border border-success/20 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <CheckCircle className="h-6 w-6 text-success" />
          <h3 className="text-xl font-semibold text-success">Breed Identified!</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-2xl font-bold text-gradient-primary">
              {scanResult?.breed}
            </h4>
            <p className="text-muted-foreground mt-1">
              {scanResult?.description}
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">Confidence Score</span>
              <span className="font-bold text-primary">{scanResult?.confidence}%</span>
            </div>
            <div className="bg-muted rounded-full h-3 overflow-hidden">
              <div 
                className="h-full bg-gradient-primary transition-all duration-1000 ease-out"
                style={{ width: `${scanResult?.confidence}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex space-x-3">
        <button
          onClick={resetScanner}
          className="btn-secondary flex-1"
        >
          Scan Another
        </button>
        <button className="btn-primary flex-1">
          Save Result
        </button>
      </div>
    </div>
  );

  const renderErrorState = () => (
    <div className="space-y-6">
      {selectedImage && (
        <div className="relative">
          <img
            src={selectedImage}
            alt="Selected cattle"
            className="w-full h-64 object-cover rounded-lg shadow-lg opacity-50"
          />
        </div>
      )}
      
      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-3">
          <AlertCircle className="h-6 w-6 text-destructive" />
          <h3 className="text-lg font-semibold text-destructive">Upload Error</h3>
        </div>
        <p className="text-destructive/80">{error}</p>
      </div>
      
      <button
        onClick={resetScanner}
        className="btn-primary w-full"
      >
        {t('tryAgain')}
      </button>
    </div>
  );

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-lg max-w-lg mx-auto">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Breed Scanner</h2>
        <p className="text-muted-foreground">
          Upload a photo to identify cattle breeds instantly
        </p>
      </div>

      {status === 'idle' && renderIdleState()}
      {status === 'active' && renderActiveState()}
      {status === 'loading' && renderLoadingState()}
      {status === 'success' && renderSuccessState()}
      {status === 'error' && renderErrorState()}
    </div>
  );
};

export default BreedScanner;