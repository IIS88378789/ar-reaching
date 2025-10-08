import { MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Contact = () => {
  const locations = [
    {
      title: "公司地址",
      address: "桃園市桃園區大興西路二段139巷137號3F",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.5!2d121.3!3d25.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAwJzAwLjAiTiAxMjHCsDE4JzAwLjAiRQ!5e0!3m2!1szh-TW!2stw!4v1234567890"
    },
    {
      title: "ISO 9001 維修廠地址",
      address: "桃園市大園區五青路312巷51-7號",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.5!2d121.2!3d25.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA2JzAwLjAiTiAxMjHCsDEyJzAwLjAiRQ!5e0!3m2!1szh-TW!2stw!4v1234567890"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">聯絡地址</h2>
          <p className="text-muted-foreground">歡迎蒞臨參觀</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{location.title}</h3>
                    <p className="text-muted-foreground">{location.address}</p>
                  </div>
                </div>
                
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                  <iframe
                    src={location.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={location.title}
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
