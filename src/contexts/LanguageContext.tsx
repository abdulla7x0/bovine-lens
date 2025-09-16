import { createContext, useContext, useState, ReactNode } from 'react';

interface Translations {
  [key: string]: {
    // Header
    home: string;
    about: string;
    blog: string;
    login: string;
    signUp: string;
    
    // Hero Section
    heroHeadline: string;
    heroSubtitle: string;
    forFree: string;
    seeHowItWorks: string;
    breedsSupported: string;
    farmersSignup: string;
    
    // Stats
    trustedBy: string;
    statsDescription: string;
    accuracyRate: string;
    activeUsers: string;
    breedTypes: string;
    avgScanTime: string;
    
    // Features
    featuresHeadline: string;
    featuresDescription: string;
    builtForField: string;
    builtForFieldDesc: string;
    lightningFast: string;
    lightningFastDesc: string;
    highlyAccurate: string;
    highlyAccurateDesc: string;
    detailedAnalytics: string;
    detailedAnalyticsDesc: string;
    teamCollaboration: string;
    teamCollaborationDesc: string;
    cloudSync: string;
    cloudSyncDesc: string;
    readyToTransform: string;
    readyToTransformDesc: string;
    watchDemo: string;
    
    // BreedScanner
    uploadOrDrag: string;
    changeImage: string;
    analyzing: string;
    predictedBreed: string;
    confidence: string;
    tryAgain: string;
    analyze: string;
    
    // Footer
    product: string;
    company: string;
    resources: string;
    legal: string;
    newsletter: string;
    enterEmail: string;
    subscribe: string;
    copyright: string;
  };
}

const translations: Translations = {
  EN: {
    // Header
    home: 'Home',
    about: 'About',
    blog: 'Blog',
    login: 'Login',
    signUp: 'Sign Up',
    
    // Hero Section
    heroHeadline: 'Identify Cattle Breeds with AI',
    heroSubtitle: 'Upload a photo and get instant, accurate breed identification results. Designed for farmers, by farmers. Works perfectly in field conditions.',
    forFree: 'For Free',
    seeHowItWorks: 'See How It Works',
    breedsSupported: '50+ Breeds Supported',
    farmersSignup: '10,000+ Farmers Trust Us',
    
    // Stats
    trustedBy: 'Trusted by Farmers Worldwide',
    statsDescription: 'Our AI technology has been tested across diverse cattle operations, from small family farms to large commercial ranches.',
    accuracyRate: 'Accuracy Rate',
    activeUsers: 'Active Users',
    breedTypes: 'Breed Types',
    avgScanTime: 'Avg. Scan Time',
    
    // Features
    featuresHeadline: 'Everything You Need to Manage Your Cattle',
    featuresDescription: 'CattleIQ combines cutting-edge AI technology with practical farming needs to give you the most comprehensive cattle management platform.',
    builtForField: 'Built for the Field',
    builtForFieldDesc: 'Optimized for mobile use. Works even with spotty internet connections and harsh outdoor conditions.',
    lightningFast: 'Lightning Fast',
    lightningFastDesc: 'Get accurate breed identification results in seconds, not minutes. Our AI processes images instantly.',
    highlyAccurate: 'Highly Accurate',
    highlyAccurateDesc: '94% accuracy rate across 50+ cattle breeds. Continuously improving with machine learning.',
    detailedAnalytics: 'Detailed Analytics',
    detailedAnalyticsDesc: 'Track your herd composition, breed performance, and genetic diversity with comprehensive reports.',
    teamCollaboration: 'Team Collaboration',
    teamCollaborationDesc: 'Share results with your team, veterinarians, and advisors. Multiple user access levels.',
    cloudSync: 'Cloud Sync',
    cloudSyncDesc: 'Your data syncs across all devices. Access your cattle records anywhere, anytime.',
    readyToTransform: 'Ready to Transform Your Farm?',
    readyToTransformDesc: 'Join thousands of farmers who trust CattleIQ for their breed identification needs.',
    watchDemo: 'Watch Demo',
    
    // BreedScanner
    uploadOrDrag: 'Click to upload or drag & drop',
    changeImage: 'Change Image',
    analyzing: 'Analyzing...',
    predictedBreed: 'Predicted Breed:',
    confidence: 'Confidence',
    tryAgain: 'Try Again',
    analyze: 'Analyze',
    
    // Footer
    product: 'Product',
    company: 'Company',
    resources: 'Resources',
    legal: 'Legal',
    newsletter: 'Newsletter',
    enterEmail: 'Enter your email',
    subscribe: 'Subscribe',
    copyright: '© 2024 CattleIQ. All rights reserved.',
  },
  HI: {
    // Header
    home: 'होम',
    about: 'बारे में',
    blog: 'ब्लॉग',
    login: 'लॉगिन',
    signUp: 'साइन अप',
    
    // Hero Section
    heroHeadline: 'AI के साथ पशु नस्लों की पहचान करें',
    heroSubtitle: 'एक फोटो अपलोड करें और तुरंत सटीक नस्ल की पहचान के परिणाम प्राप्त करें। किसानों के लिए, किसानों द्वारा डिज़ाइन किया गया।',
    forFree: 'मुफ्त में',
    seeHowItWorks: 'देखें यह कैसे काम करता है',
    breedsSupported: '50+ नस्लें समर्थित',
    farmersSignup: '10,000+ किसान हम पर भरोसा करते हैं',
    
    // Stats
    trustedBy: 'दुनिया भर के किसानों द्वारा भरोसेमंद',
    statsDescription: 'हमारी AI तकनीक का परीक्षण छोटे पारिवारिक खेतों से लेकर बड़े वाणिज्यिक रैंच तक विविध पशु संचालन में किया गया है।',
    accuracyRate: 'सटीकता दर',
    activeUsers: 'सक्रिय उपयोगकर्ता',
    breedTypes: 'नस्ल प्रकार',
    avgScanTime: 'औसत स्कैन समय',
    
    // Features
    featuresHeadline: 'अपने पशुओं के प्रबंधन के लिए आवश्यक सब कुछ',
    featuresDescription: 'CattleIQ अत्याधुनिक AI तकनीक को व्यावहारिक कृषि आवश्यकताओं के साथ जोड़कर आपको सबसे व्यापक पशु प्रबंधन प्लेटफॉर्म देता है।',
    builtForField: 'खेत के लिए बनाया गया',
    builtForFieldDesc: 'मोबाइल उपयोग के लिए अनुकूलित। खराब इंटरनेट कनेक्शन और कठोर बाहरी परिस्थितियों में भी काम करता है।',
    lightningFast: 'बिजली की तेजी',
    lightningFastDesc: 'मिनटों में नहीं, सेकंडों में सटीक नस्ल पहचान परिणाम प्राप्त करें। हमारी AI तुरंत छवियों को प्रोसेस करती है।',
    highlyAccurate: 'अत्यधिक सटीक',
    highlyAccurateDesc: '50+ पशु नस्लों में 94% सटीकता दर। मशीन लर्निंग के साथ निरंतर सुधार।',
    detailedAnalytics: 'विस्तृत विश्लेषण',
    detailedAnalyticsDesc: 'व्यापक रिपोर्ट के साथ अपने झुंड की संरचना, नस्ल प्रदर्शन और आनुवंशिक विविधता को ट्रैक करें।',
    teamCollaboration: 'टीम सहयोग',
    teamCollaborationDesc: 'अपनी टीम, पशु चिकित्सकों और सलाहकारों के साथ परिणाम साझा करें। कई उपयोगकर्ता पहुंच स्तर।',
    cloudSync: 'क्लाउड सिंक',
    cloudSyncDesc: 'आपका डेटा सभी डिवाइसों में सिंक होता है। कभी भी, कहीं भी अपने पशु रिकॉर्ड तक पहुंचें।',
    readyToTransform: 'अपने खेत को बदलने के लिए तैयार हैं?',
    readyToTransformDesc: 'हजारों किसानों में शामिल हों जो अपनी नस्ल पहचान की जरूरतों के लिए CattleIQ पर भरोसा करते हैं।',
    watchDemo: 'डेमो देखें',
    
    // BreedScanner
    uploadOrDrag: 'अपलोड करने के लिए क्लिक करें या खींचें और छोड़ें',
    changeImage: 'छवि बदलें',
    analyzing: 'विश्लेषण कर रहे हैं...',
    predictedBreed: 'अनुमानित नस्ल:',
    confidence: 'विश्वास',
    tryAgain: 'फिर से कोशिश करें',
    analyze: 'विश्लेषण करें',
    
    // Footer
    product: 'उत्पाद',
    company: 'कंपनी',
    resources: 'संसाधन',
    legal: 'कानूनी',
    newsletter: 'न्यूज़लेटर',
    enterEmail: 'अपना ईमेल दर्ज करें',
    subscribe: 'सब्सक्राइब करें',
    copyright: '© 2024 CattleIQ। सभी अधिकार सुरक्षित।',
  },
  TE: {
    // Header
    home: 'హోమ్',
    about: 'గురించి',
    blog: 'బ్లాగ్',
    login: 'లాగిన్',
    signUp: 'సైన్ అప్',
    
    // Hero Section
    heroHeadline: 'AI తో పశు జాతులను గుర్తించండి',
    heroSubtitle: 'ఫోటో అప్‌లోడ్ చేసి తక్షణ, ఖచ్చితమైన జాతి గుర్తింపు ఫలితాలను పొందండి. రైతుల కోసం, రైతులచే రూపొందించబడింది.',
    forFree: 'ఉచితంగా',
    seeHowItWorks: 'ఇది ఎలా పనిచేస్తుందో చూడండి',
    breedsSupported: '50+ జాతులకు మద్దతు',
    farmersSignup: '10,000+ రైతులు మాపై నమ్మకం',
    
    // Stats
    trustedBy: 'ప్రపంచవ్యాప్తంగా రైతులచే నమ్మకంతో',
    statsDescription: 'మా AI సాంకేతికత చిన్న కుటుంబ పొలాల నుండి పెద్ద వాణిజ్య గడ్డిబీడుల వరకు విభిన్న పశువుల కార్యకలాపాలలో పరీక్షించబడింది.',
    accuracyRate: 'ఖచ్చితత్వ రేటు',
    activeUsers: 'క్రియాశీల వినియోగదారులు',
    breedTypes: 'జాతి రకాలు',
    avgScanTime: 'సగటు స్కాన్ సమయం',
    
    // Features
    featuresHeadline: 'మీ పశువులను నిర్వహించడానికి అవసరమైన ప్రతిదీ',
    featuresDescription: 'CattleIQ అత్యాధునిక AI సాంకేతికతను ప్రాక్టికల్ వ్యవసాయ అవసరాలతో కలిపి మీకు అత్యంత సమగ్రమైన పశువుల నిర్వహణ వేదికను అందిస్తుంది.',
    builtForField: 'పొలం కోసం నిర్మించబడింది',
    builtForFieldDesc: 'మొబైల్ వాడకం కోసం అనుకూలీకరించబడింది. దుర్బలమైన ఇంటర్నెట్ కనెక్షన్‌లు మరియు కఠినమైన బాహ్య పరిస్థితులలో కూడా పనిచేస్తుంది.',
    lightningFast: 'మెరుపువేగం',
    lightningFastDesc: 'నిమిషాలలో కాకుండా సెకన్లలో ఖచ్చితమైన జాతి గుర్తింపు ఫలితాలను పొందండి. మా AI చిత్రాలను తక్షణం ప్రాసెస్ చేస్తుంది.',
    highlyAccurate: 'అత్యంత ఖచ్చితమైన',
    highlyAccurateDesc: '50+ పశు జాతులలో 94% ఖచ్చితత్వ రేటు. మెషిన్ లెర్నింగ్‌తో నిరంతరం మెరుగుపడుతుంది.',
    detailedAnalytics: 'వివరణాత్మక విశ్లేషణలు',
    detailedAnalyticsDesc: 'సమగ్ర నివేదికలతో మీ మంద కూర్పు, జాతి పనితీరు మరియు జన్యు వైవిధ్యాన్ని ట్రాక్ చేయండి.',
    teamCollaboration: 'బృంద సహకారం',
    teamCollaborationDesc: 'మీ బృందం, పశు వైద్యులు మరియు సలహాదారులతో ఫలితాలను పంచుకోండి. బహుళ వినియోగదారు యాక్సెస్ స్థాయిలు.',
    cloudSync: 'క్లౌడ్ సింక్',
    cloudSyncDesc: 'మీ డేటా అన్ని పరికరాలలో సమకాలీకరిస్తుంది. ఎక్కడైనా, ఎప్పుడైనా మీ పశువుల రికార్డులను యాక్సెస్ చేయండి.',
    readyToTransform: 'మీ పొలాన్ని మార్చడానికి సిద్ధంగా ఉన్నారా?',
    readyToTransformDesc: 'వారి జాతి గుర్తింపు అవసరాలకు CattleIQ మీద నమ్మకంతో ఉన్న వేలాది రైతుల్లో చేరండి.',
    watchDemo: 'డెమో చూడండి',
    
    // BreedScanner
    uploadOrDrag: 'అప్‌లోడ్ చేయడానికి క్లిక్ చేయండి లేదా లాగి వదలండి',
    changeImage: 'చిత్రం మార్చండి',
    analyzing: 'విశ్లేషిస్తున్నాము...',
    predictedBreed: 'అంచనా వేసిన జాతి:',
    confidence: 'నమ్మకం',
    tryAgain: 'మళ్లీ ప్రయత్నించండి',
    analyze: 'విశ్లేషించండి',
    
    // Footer
    product: 'ఉత్పత్తి',
    company: 'కంపెనీ',
    resources: 'వనరులు',
    legal: 'చట్టపరమైన',
    newsletter: 'వార్తాలేఖ',
    enterEmail: 'మీ ఇమెయిల్ నమోదు చేయండి',
    subscribe: 'సబ్‌స్క్రైబ్ చేయండి',
    copyright: '© 2024 CattleIQ. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.',
  },
  TA: {
    // Header
    home: 'முகப்பு',
    about: 'பற்றி',
    blog: 'வலைப்பதிவு',
    login: 'உள்நுழைவு',
    signUp: 'பதிவு செய்க',
    
    // Hero Section
    heroHeadline: 'AI மூலம் கால்நடை இனங்களை அடையாளம் காணுங்கள்',
    heroSubtitle: 'ஒரு புகைப்படத்தை பதிவேற்றி உடனடி, துல்லியமான இன அடையாள முடிவுகளைப் பெறுங்கள். விவசாயிகளுக்காக, விவசாயிகளால் வடிவமைக்கப்பட்டது.',
    forFree: 'இலவசமாக',
    seeHowItWorks: 'இது எப்படி செயல்படுகிறது என்று பாருங்கள்',
    breedsSupported: '50+ இனங்கள் ஆதரிக்கப்படுகின்றன',
    farmersSignup: '10,000+ விவசாயிகள் எங்களை நம்புகிறார்கள்',
    
    // Stats
    trustedBy: 'உலகம் முழுவதும் விவசாயிகளால் நம்பப்படுகிறது',
    statsDescription: 'எங்கள் AI தொழில்நுட்பம் சிறிய குடும்ப பண்ணைகள் முதல் பெரிய வணிக பண்ணைகள் வரை பல்வேறு கால்நடை செயல்பாடுகளில் சோதிக்கப்பட்டுள்ளது.',
    accuracyRate: 'துல்லிய விகிதம்',
    activeUsers: 'செயலில் உள்ள பயனர்கள்',
    breedTypes: 'இன வகைகள்',
    avgScanTime: 'சராசரி ஸ்கேன் நேரம்',
    
    // Features
    featuresHeadline: 'உங்கள் கால்நடைகளை நிர்வகிக்க தேவையான அனைத்தும்',
    featuresDescription: 'CattleIQ அதிநவீன AI தொழில்நுட்பத்தை நடைமுறை விவசாய தேவைகளுடன் இணைத்து உங்களுக்கு மிகவும் விரிவான கால்நடை மேலாண்மை தளத்தை வழங்குகிறது.',
    builtForField: 'வயலுக்காக கட்டப்பட்டது',
    builtForFieldDesc: 'மொபைல் பயன்பாட்டிற்காக உகந்தது. பலவீனமான இணைய இணைப்புகள் மற்றும் கடுமையான வெளிப்புற நிலைமைகளில் கூட செயல்படுகிறது.',
    lightningFast: 'மின்னல் வேகம்',
    lightningFastDesc: 'நிமிடங்களில் அல்ல, வினாடிகளில் துல்லியமான இன அடையாள முடிவுகளைப் பெறுங்கள். எங்கள் AI படங்களை உடனடியாக செயலாக்குகிறது.',
    highlyAccurate: 'மிகவும் துல்லியமான',
    highlyAccurateDesc: '50+ கால்நடை இனங்களில் 94% துல்லிய விகிதம். இயந்திர கற்றலுடன் தொடர்ந்து மேம்படுகிறது.',
    detailedAnalytics: 'விரிவான பகுப்பாய்வு',
    detailedAnalyticsDesc: 'விரிவான அறிக்கைகளுடன் உங்கள் கூட்டத்தின் கலவை, இன செயல்திறன் மற்றும் மரபணு பன்முகத்தன்மையை கண்காணிக்கவும்.',
    teamCollaboration: 'குழு ஒத்துழைப்பு',
    teamCollaborationDesc: 'உங்கள் குழு, கால்நடை மருத்துவர்கள் மற்றும் ஆலோசகர்களுடன் முடிவுகளைப் பகிரவும். பல பயனர் அணுகல் நிலைகள்.',
    cloudSync: 'கிளவுட் ஒத்திசைவு',
    cloudSyncDesc: 'உங்கள் தரவு அனைத்து சாதனங்களிலும் ஒத்திசைக்கப்படுகிறது. எங்கும், எப்போதும் உங்கள் கால்நடை பதிவுகளை அணுகவும்.',
    readyToTransform: 'உங்கள் பண்ணையை மாற்ற தயாரா?',
    readyToTransformDesc: 'அவர்களின் இன அடையாள தேவைகளுக்காக CattleIQ ஐ நம்பும் ஆயிரக்கணக்கான விவசாயிகளில் சேருங்கள்.',
    watchDemo: 'டெமோ பாருங்கள்',
    
    // BreedScanner
    uploadOrDrag: 'பதிவேற்ற கிளிக் செய்யவும் அல்லது இழுத்து விடவும்',
    changeImage: 'படத்தை மாற்றவும்',
    analyzing: 'பகுப்பாய்வு செய்கிறோம்...',
    predictedBreed: 'முன்னறிவிக்கப்பட்ட இனம்:',
    confidence: 'நம்பிக்கை',
    tryAgain: 'மீண்டும் முயற்சிக்கவும்',
    analyze: 'பகுப்பாய்வு செய்யவும்',
    
    // Footer
    product: 'தயாரிப்பு',
    company: 'நிறுவனம்',
    resources: 'வளங்கள்',
    legal: 'சட்டப்பூர்வ',
    newsletter: 'செய்திமடல்',
    enterEmail: 'உங்கள் மின்னஞ்சலை உள்ளிடவும்',
    subscribe: 'குழுசேரவும்',
    copyright: '© 2024 CattleIQ. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
  },
};

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    localStorage.setItem('cattleiq-language', lang);
  };

  const t = (key: string): string => {
    return translations[currentLanguage][key] || translations['EN'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};