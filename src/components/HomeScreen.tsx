import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Heart, Bookmark, Search, Volume2, Moon, Sun } from "lucide-react";

export const HomeScreen = () => {
  const quickActions = [
    {
      icon: BookOpen,
      title: "সূরা পড়ুন",
      subtitle: "কুরআনের সূরাসমূহ",
      color: "bg-primary",
      count: "১১৪ সূরা"
    },
    {
      icon: Heart,
      title: "প্রিয় আয়াত",
      subtitle: "সংরক্ষিত আয়াতসমূহ",
      color: "bg-accent",
      count: "১২ আয়াত"
    },
    {
      icon: Bookmark,
      title: "বুকমার্ক",
      subtitle: "চিহ্নিত পৃষ্ঠা",
      color: "bg-secondary",
      count: "৫ পৃষ্ঠা"
    },
    {
      icon: Volume2,
      title: "অডিও",
      subtitle: "তিলাওয়াত শুনুন",
      color: "bg-primary-dark",
      count: "৩০ পারা"
    }
  ];

  const recentSurahs = [
    { name: "সূরা আল-ফাতিহা", arabic: "الفاتحة", verses: 7, number: 1 },
    { name: "সূরা আল-বাকারাহ", arabic: "البقرة", verses: 286, number: 2 },
    { name: "সূরা আল ইমরান", arabic: "آل عمران", verses: 200, number: 3 },
    { name: "সূরা আন-নিসা", arabic: "النساء", verses: 176, number: 4 }
  ];

  return (
    <div className="min-h-screen bg-gradient-background islamic-pattern">
      {/* Header */}
      <header className="p-6 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold bengali-text">নূরে কুরআন</h1>
              <p className="text-white/80 bengali-text">আসসালামু আলাইকুম</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Moon className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Today's Verse */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-4">
              <div className="text-center">
                <h3 className="font-semibold bengali-text mb-2">আজকের আয়াত</h3>
                <p className="text-xl arabic-text mb-2 leading-relaxed">
                  وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا
                </p>
                <p className="text-sm bengali-text opacity-90">
                  "যে আল্লাহকে ভয় করে, তিনি তার জন্য নিষ্কৃতির পথ তৈরি করে দেন।"
                </p>
                <Badge variant="secondary" className="mt-2 bg-white/20 text-white border-white/30">
                  সূরা আত-তালাক: ২
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 max-w-4xl mx-auto">
        {/* Quick Actions */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold bengali-text mb-4 text-foreground">দ্রুত অ্যাক্সেস</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Card key={index} className="islamic-card hover:scale-105 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-medium bengali-text text-sm mb-1">{action.title}</h3>
                  <p className="text-xs text-muted-foreground bengali-text mb-2">{action.subtitle}</p>
                  <Badge variant="outline" className="text-xs">{action.count}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Surahs */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold bengali-text text-foreground">সাম্প্রতিক সূরা</h2>
            <Button variant="ghost" className="text-primary bengali-text">
              সব দেখুন
            </Button>
          </div>
          <div className="space-y-3">
            {recentSurahs.map((surah, index) => (
              <Card key={index} className="islamic-card hover:shadow-elegant transition-all duration-300 cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                        {surah.number}
                      </div>
                      <div>
                        <h3 className="font-medium bengali-text">{surah.name}</h3>
                        <p className="text-sm text-muted-foreground arabic-text">{surah.arabic}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-1">
                        {surah.verses} আয়াত
                      </Badge>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <BookOpen className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Volume2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Prayer Times Widget */}
        <section>
          <h2 className="text-xl font-semibold bengali-text mb-4 text-foreground">নামাজের সময়</h2>
          <Card className="islamic-card">
            <CardContent className="p-4">
              <div className="grid grid-cols-5 gap-4 text-center">
                {[
                  { name: "ফজর", time: "৫:১২", active: false },
                  { name: "যোহর", time: "১২:০৮", active: true },
                  { name: "আসর", time: "৪:২৫", active: false },
                  { name: "মাগরিব", time: "৬:১৮", active: false },
                  { name: "এশা", time: "৭:৪৫", active: false }
                ].map((prayer, index) => (
                  <div key={index} className={`p-2 rounded-lg ${prayer.active ? 'bg-primary text-white' : 'bg-secondary'}`}>
                    <p className="text-xs bengali-text mb-1">{prayer.name}</p>
                    <p className="font-bold text-sm">{prayer.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};