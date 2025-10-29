import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [{
    icon: Award,
    value: "15+",
    label: "年專業經驗"
  }, {
    icon: Users,
    value: "50+",
    label: "專業團隊"
  }, {
    icon: Globe,
    value: "10+",
    label: "合作夥伴"
  }, {
    icon: TrendingUp,
    value: "100+",
    label: "成功案例"
  }];
  return <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Orange gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/12 to-accent/8">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[80px]" />
      </div>
      
      {/* Dense small circles pattern */}
      <div className="absolute inset-0 opacity-30">
        {/* Top left cluster */}
        <div className="absolute top-20 left-20 w-24 h-24 rounded-full border border-accent/40" />
        <div className="absolute top-32 left-32 w-16 h-16 rounded-full border border-accent/30" />
        <div className="absolute top-28 left-48 w-12 h-12 rounded-full border border-accent/35" />
        <div className="absolute top-44 left-24 w-20 h-20 rounded-full border border-accent/25" />
        <div className="absolute top-52 left-44 w-14 h-14 rounded-full border border-accent/40" />
        
        {/* Top right cluster */}
        <div className="absolute top-16 right-24 w-28 h-28 rounded-full border border-accent/35" />
        <div className="absolute top-36 right-36 w-18 h-18 rounded-full border border-accent/40" />
        <div className="absolute top-28 right-52 w-16 h-16 rounded-full border border-accent/30" />
        <div className="absolute top-48 right-28 w-22 h-22 rounded-full border border-accent/35" />
        <div className="absolute top-60 right-48 w-12 h-12 rounded-full border border-accent/25" />
        
        {/* Middle left cluster */}
        <div className="absolute top-1/3 left-16 w-20 h-20 rounded-full border border-accent/40" />
        <div className="absolute top-1/3 left-40 w-14 h-14 rounded-full border border-accent/30" />
        <div className="absolute top-[40%] left-28 w-16 h-16 rounded-full border border-accent/35" />
        <div className="absolute top-[45%] left-52 w-12 h-12 rounded-full border border-accent/40" />
        
        {/* Middle right cluster */}
        <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full border border-accent/35" />
        <div className="absolute top-[38%] right-44 w-18 h-18 rounded-full border border-accent/30" />
        <div className="absolute top-[43%] right-32 w-14 h-14 rounded-full border border-accent/40" />
        <div className="absolute top-1/2 right-52 w-16 h-16 rounded-full border border-accent/25" />
        
        {/* Bottom left cluster */}
        <div className="absolute bottom-24 left-24 w-22 h-22 rounded-full border border-accent/40" />
        <div className="absolute bottom-36 left-36 w-16 h-16 rounded-full border border-accent/35" />
        <div className="absolute bottom-28 left-52 w-14 h-14 rounded-full border border-accent/30" />
        <div className="absolute bottom-48 left-28 w-18 h-18 rounded-full border border-accent/35" />
        <div className="absolute bottom-56 left-44 w-12 h-12 rounded-full border border-accent/40" />
        
        {/* Bottom right cluster */}
        <div className="absolute bottom-20 right-28 w-26 h-26 rounded-full border border-accent/35" />
        <div className="absolute bottom-32 right-40 w-20 h-20 rounded-full border border-accent/40" />
        <div className="absolute bottom-28 right-56 w-14 h-14 rounded-full border border-accent/30" />
        <div className="absolute bottom-44 right-32 w-16 h-16 rounded-full border border-accent/35" />
        <div className="absolute bottom-52 right-48 w-12 h-12 rounded-full border border-accent/25" />
        
        {/* Center scattered circles */}
        <div className="absolute top-[55%] left-[35%] w-14 h-14 rounded-full border border-accent/30" />
        <div className="absolute top-[48%] left-[60%] w-18 h-18 rounded-full border border-accent/35" />
        <div className="absolute top-[62%] left-[48%] w-12 h-12 rounded-full border border-accent/40" />
        <div className="absolute top-[38%] left-[52%] w-16 h-16 rounded-full border border-accent/25" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            關於我們
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            專注於航空科技領域的專業服務公司
          </p>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Icon className="mx-auto mb-4 text-primary" size={48} />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>;
};
export default About;