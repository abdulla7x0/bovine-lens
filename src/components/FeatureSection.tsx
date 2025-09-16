import { 
  Smartphone, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Cloud 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeatureSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Smartphone,
      title: t('builtForField'),
      description: t('builtForFieldDesc'),
    },
    {
      icon: Zap,
      title: t('lightningFast'),
      description: t('lightningFastDesc'),
    },
    {
      icon: Shield,
      title: t('highlyAccurate'),
      description: t('highlyAccurateDesc'),
    },
    {
      icon: BarChart3,
      title: t('detailedAnalytics'),
      description: t('detailedAnalyticsDesc'),
    },
    {
      icon: Users,
      title: t('teamCollaboration'),
      description: t('teamCollaborationDesc'),
    },
    {
      icon: Cloud,
      title: t('cloudSync'),
      description: t('cloudSyncDesc'),
    },
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-h1 font-heading mb-4">
            {t('featuresHeadline')}
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            {t('featuresDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fade-in 0.6s ease-out forwards'
              }}
            >
              <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-h2 font-heading mb-4">
              {t('readyToTransform')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('readyToTransformDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                {t('forFree')}
              </button>
              <button className="btn-secondary">
                {t('watchDemo')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;