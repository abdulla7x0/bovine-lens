import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreedScanner from '@/components/BreedScanner';
import FeatureSection from '@/components/FeatureSection';
import heroImage from '@/assets/hero-cattle.jpg';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Cattle in pasture with AI technology overlay"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                  New: 94% Accuracy Rate Achieved
                </div>
                
                <h1 className="text-hero font-heading leading-tight">
                  {t('heroHeadline')}
                </h1>
                
                <p className="text-body text-muted-foreground max-w-lg">
                  {t('heroSubtitle')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary inline-flex items-center space-x-2">
                  <span>{t('forFree')}</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="btn-secondary inline-flex items-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>{t('seeHowItWorks')}</span>
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>{t('breedsSupported')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>{t('farmersSignup')}</span>
                </div>
              </div>
            </div>
            
            {/* Scanner Component */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-lg blur-xl opacity-20 animate-pulse"></div>
              <BreedScanner />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <FeatureSection />
      
      {/* Stats Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-h1 font-heading mb-4">
              {t('trustedBy')}
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              {t('statsDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '94%', label: t('accuracyRate') },
              { value: '10K+', label: t('activeUsers') },
              { value: '50+', label: t('breedTypes') },
              { value: '2.5s', label: t('avgScanTime') },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center space-y-2"
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  animation: 'fade-in 0.8s ease-out forwards'
                }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient-primary">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
