import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";
import partnershipDetail1 from "@/assets/partnership-detail-1.jpg";
import partnershipDetail2 from "@/assets/partnership-detail-2.jpg";
import partnershipDetail3 from "@/assets/partnership-detail-3.jpg";
import partnershipDetail4 from "@/assets/partnership-detail-4.jpg";

interface NewsDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewsDetailDialog = ({ open, onOpenChange }: NewsDetailDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Calendar size={14} className="text-accent" />
            <span className="font-medium">2024年10月7日</span>
          </div>
          <DialogTitle className="text-2xl md:text-3xl text-foreground leading-tight">
            中華科技大學簽署產學合作, 尹航科技有限公司航空人才培育研究案
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-6 space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              航空產業與國際接軌，一直是值得年青學子終身投入的產業，加強飛機修護、航空零組件製造與飛行技能的相關實作課程模組。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              經由勞動部飛修乙丙級的證照訓練，以及民航局維修工程師的執照的考試，最後再藉由尹航科技有限公司的合作，加強對航空產業實務各方面的認識，以提升職場的競爭力並能勝任職場的挑戰。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="overflow-hidden rounded-lg border border-border">
              <img 
                src={partnershipDetail1} 
                alt="飛行模擬器訓練" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-border">
              <img 
                src={partnershipDetail2} 
                alt="模擬駕駛艙內部" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-border">
              <img 
                src={partnershipDetail3} 
                alt="全景飛行模擬系統" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-border">
              <img 
                src={partnershipDetail4} 
                alt="航空訓練設備展示" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsDetailDialog;
