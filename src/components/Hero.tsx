import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroSky1 from "@/assets/hero-sky-1.jpg";
import heroSky2 from "@/assets/hero-sky-2.jpg";
import heroSky3 from "@/assets/hero-sky-3.jpg";
import heroSky4 from "@/assets/hero-sky-4.jpg";
import heroSky5 from "@/assets/hero-sky-5.jpg";
import isoCertificate from "@/assets/iso-certificate.png";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const heroImages = [{
    src: heroSky1,
    alt: "Commercial aircraft soaring through blue sky with clouds"
  }, {
    src: heroSky2,
    alt: "Fighter jet flying through dramatic sunset clouds"
  }, {
    src: heroSky3,
    alt: "Business jet above sea of white clouds"
  }, {
    src: heroSky4,
    alt: "Light sport aircraft flying in clear blue sky"
  }, {
    src: heroSky5,
    alt: "Twin-engine aircraft soaring through majestic dusk sky"
  }];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  return <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Slider with Overlay */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-[2000ms] ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}>
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
          </div>)}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        
        
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 animate-fade-in">
          專業航空科技解決方案
        </h1>
        
        <p className="text-xl md:text-2xl text-primary/90 mb-10 max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '0 0 8px rgba(251, 146, 60, 0.8), 0 0 12px rgba(251, 146, 60, 0.6)' }}>提供創新的飛行訓練系統、活動模擬平臺及航空設備專業維修</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg group bg-gradient-to-r from-accent to-secondary hover:shadow-glow-sm transition-all duration-300">
            探索產品
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg glass-effect text-primary border-primary/50 hover:border-primary transition-all duration-300">
            聯絡我們
          </Button>
        </div>

        {/* Tech Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[{
          number: "15+",
          label: "年經驗"
        }, {
          number: "100+",
          label: "專案實績"
        }, {
          number: "98%",
          label: "客戶滿意度"
        }].map((stat, i) => <div key={i} className="glass-effect rounded-lg p-4 animate-fade-in" style={{
          animationDelay: `${i * 0.2}s`
        }}>
              <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-primary/70">{stat.label}</div>
            </div>)}
        </div>

        {/* Company Info Card */}
        <div className="mt-16 max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-8 md:p-12">
                  <h3 className="text-3xl font-bold mb-6">公司簡介</h3>
                  <div className="space-y-4 text-lg">
                    <p>尹航科技有限公司於2017年成立，以從事民航，軍用和教學航空器提供航空器材相關供應和服務。</p>
                    <p>尹航科技有限公司之核心競爭力包含豐富的航空產業知識及銷售，資訊迅速流通成為我們最大競爭優勢，對市場需求的深入度，與客戶緊密的結合，是我們的目標，也是我們賴以生存的最佳利器。</p>
                    <p>二十年戰鬥機，客機飛機組裝經驗。民航局合格飛行，維修証照。</p>
                    <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                      <h4 className="text-xl font-semibold mb-3">專業服務</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="mr-2">✈️</span>
                          <span>飛行模擬機訓練，資深教官指導教學</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">🔧</span>
                          <span>飛機修護乙，丙級技術士證照輔導</span>
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm mt-4 opacity-90">2025年8月18日 ISO 9001:2015 核發</p>
                  </div>
                </div>
                <div className="bg-white p-6 md:p-8 h-full flex items-center justify-center">
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <img 
                        src={isoCertificate} 
                        alt="ISO 9001:2015 證書" 
                        title="點擊放大查看證書" 
                        className="w-full h-auto max-w-md object-contain animate-fade-in cursor-pointer hover:scale-105 transition-transform duration-300" 
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full p-2">
                      <img 
                        src={isoCertificate} 
                        alt="ISO 9001:2015 證書" 
                        className="w-full h-auto object-contain" 
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>;
};
export default Hero;