/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  ShieldAlert, 
  ShieldCheck, 
  RefreshCcw, 
  BrainCircuit, 
  Wand2, 
  GraduationCap,
  Verified
} from "lucide-react";

const Nav = () => (
  <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl rounded-full px-6 py-3 glass-nav flex justify-between items-center z-50 shadow-xl shadow-stone-900/5">
    <div className="flex items-center gap-2">
      <span className="text-2xl font-headline italic font-bold text-primary">CindyFlower</span>
    </div>
    <div className="hidden md:flex items-center space-x-8">
      {["服務項目", "核心價值", "創辦人", "方案", "客戶見證"].map((item) => (
        <a 
          key={item} 
          href={`#${item}`} 
          className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide"
        >
          {item}
        </a>
      ))}
    </div>
    <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:scale-[1.02] transition-all duration-300 cursor-pointer">
      預約顧問
    </button>
  </nav>
);

const Hero = () => (
  <header className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_#ffdea5_0%,_transparent_40%)] opacity-20"></div>
      <img 
        alt="Digital Atelier Background" 
        className="w-full h-full object-cover opacity-10 mix-blend-multiply" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLK6TcxHtWc2pxS8jdgi2014sp2MuG6prw6Qdm2GXLPV01flAe5g94goqJ1MqvunJhBBNuQgu8MFECVZ92Xk4BT1ZjRwHNKbe6x2DNrR__3VbCmk9atqOI9UjT7yUdoFX1xjLKKBXqMLDA9ilUzQuvMXtafmkkuzOns205hC37JY57qjfwByZyg3Z1q0VDnUIsuP0maqiYB8Dh5gwD9qVRUSn2DfKpyxZ5tXEwDZqp8yU0IvunawIgJwAj-_KvlTx1adCk7WZc6g03" 
        referrerPolicy="no-referrer"
      />
    </div>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 max-w-5xl text-center space-y-12"
    >
      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-surface-container-high text-primary text-xs font-semibold tracking-widest uppercase">
        Est. 1994 • AI Powered
      </div>
      <h1 className="font-headline text-6xl md:text-8xl text-primary leading-tight tracking-tight">
        30 Years of Design <br />
        <span className="font-normal not-italic text-on-surface-variant">Meets AI Future.</span>
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-on-surface-variant leading-relaxed">
        將三十載的視覺傳承，轉化為智能時代的新秩序。CindyFlower 為追求極致的品牌提供 AI 部署、策略顧問與數位轉型。
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
        <button className="signature-gradient text-white px-10 py-4 rounded shadow-xl hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer">
          探索 AI 顧問服務
          <ArrowRight size={20} />
        </button>
        <button className="px-10 py-4 rounded border border-outline-variant/30 hover:bg-surface-container-low transition-colors cursor-pointer">
          觀看案例
        </button>
      </div>
    </motion.div>
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
      <ChevronDown size={40} />
    </div>
  </header>
);

const Services = () => (
  <section className="py-32 px-6 bg-surface-container-low" id="服務項目">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 items-end">
        <div className="md:col-span-7">
          <h2 className="font-headline text-5xl text-primary mb-6">智能美學服務</h2>
          <p className="text-on-surface-variant max-w-xl">
            我們不僅提供工具，更提供「眼界」。將 AI 的效率與人類的審美靈魂相結合，打造無可取代的品牌競爭力。
          </p>
        </div>
        <div className="md:col-span-5 text-right">
          <span className="text-primary-container font-headline italic text-2xl">Bespoke Excellence.</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <BrainCircuit size={28} />,
            title: "企業 AI 部署",
            desc: "量身定制的 AI 工作流導入，將繁瑣的製圖與設計流程自動化，效率提升 10 倍以上。",
            price: "NT$ 58,000+"
          },
          {
            icon: <Wand2 size={28} />,
            title: "視覺美學顧問",
            desc: "基於 30 年設計經驗，為您的 AI 生成內容提供審美修正與品牌一致性導航。",
            price: "NT$ 25,000+"
          },
          {
            icon: <GraduationCap size={28} />,
            title: "創作者實戰班",
            desc: "一對一或小組訓練，掌握從 Prompt Engineering 到 Final Polish 的完整技藝。",
            price: "NT$ 12,000+"
          }
        ].map((service, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -8 }}
            className="bg-surface-container-lowest p-10 rounded-xl shadow-stone-900/5 shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center text-primary mb-8">
              {service.icon}
            </div>
            <h3 className="text-xl font-headline font-bold mb-4">{service.title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
              {service.desc}
            </p>
            <div className="flex justify-between items-center pt-6 border-t border-outline-variant/10">
              <span className="text-xs font-semibold tracking-widest text-outline-variant">FROM</span>
              <span className="font-headline text-xl text-primary">{service.price}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const WhyUs = () => (
  <section className="py-32 px-6 bg-surface overflow-hidden" id="核心價值">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden bg-stone-200">
            <img 
              alt="Security and Precision" 
              className="w-full h-full object-cover grayscale opacity-50 contrast-125" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7M__plm9Pnj4YgqllL95HP7YVTGCwxQz3h65HyjRpkKiaCcYFKdHDn2Pur0tQFoMMDPYIvVbwgdfgm79KZixnUGWWyRd0Qa1Ry7PK8q7tLUFI1SMeS9v4HnygAO9_m4walKrqTxDsLViTXnhnES5QQL-F21h7HFbKratsMApzKr5XEBufGhHaheptdPUMspw8g7qpd72TufyuslwUoK-1TataxBPGVtBV53C01ON-Gm3C9dQKNbLGu8VsBqdx9j7KmQpFJIU62its" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-tertiary-fixed p-12 rounded-xl hidden lg:block shadow-2xl">
            <p className="font-headline text-3xl text-on-tertiary-fixed leading-tight">
              "AI Is Power, <br /> But Mastery Is <br /> Control."
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-12">
          <div>
            <h2 className="font-headline text-5xl text-primary mb-8">為什麼你需要專業 AI 顧問？</h2>
            <p className="text-on-surface-variant">盲目使用 AI 不僅無法提升效率，更可能傷害品牌價值。我們協助您規避以下風險：</p>
          </div>
          <div className="space-y-6">
            {[
              { icon: <ShieldAlert className="text-error" />, title: "美學崩壞風險", desc: "未經專業引導的 AI 生成圖往往帶有強烈的「塑膠感」，損害高端品牌形象。" },
              { icon: <ShieldCheck className="text-error" />, title: "法律與版權迷局", desc: "確保您的 AI 流程符合商用規範，避開潛在的版權與訓練數據爭議。" },
              { icon: <RefreshCcw className="text-error" />, title: "品牌一致性斷裂", desc: "防止不同渠道生成的 AI 內容各行其是，維持跨媒體視覺語彙的高度統一。" }
            ].map((risk, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="mt-1">{risk.icon}</span>
                <div>
                  <h4 className="font-bold text-primary">{risk.title}</h4>
                  <p className="text-sm text-on-surface-variant">{risk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Founder = () => (
  <section className="py-32 px-6 bg-primary text-surface overflow-hidden relative" id="創辦人">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-container opacity-20 transform skew-x-12 translate-x-20"></div>
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <h4 className="text-tertiary-fixed tracking-widest text-sm mb-4 font-bold">THE STORY</h4>
          <h2 className="font-headline text-5xl mb-8 leading-tight text-white">從鉛筆、貝塞爾曲線 <br /> 到 Prompt 寫作。</h2>
          <div className="space-y-6 text-white/80 font-light leading-relaxed">
            <p>
              我曾深信設計師的雙手是唯一的造物工具。三十年前，我拿著筆刷在畫板上揮灑；二十年前，我學會了數位向量的精準；而今天，我發現最強大的設計工具是「思想」。
            </p>
            <p>
              CindyFlower 智能顧問工作室的創立，是為了讓設計的靈魂不被技術的巨輪碾碎，而是成為駕馭它的騎士。我將三十年的美學沉澱，注入到 AI 的邏輯框架中。
            </p>
            <p className="italic font-headline text-xl py-4 border-l-2 border-tertiary-fixed pl-6">
              「AI 不會取代設計師，但懂得使用 AI 的設計師會取代你。」
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-full border border-tertiary-fixed opacity-20 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full border border-tertiary-fixed opacity-40"></div>
            <img 
              alt="Founder Portrait" 
              className="absolute inset-8 rounded-full object-cover filter saturate-0 contrast-125 w-64 h-64 mx-auto" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtjNmuMsV7mltBs3zoS4yN-IGaaXx7hCUKj0jsb-RFW6fCYwHHNqP3RuEM2ix64KlZFxG8tnEjTDKTv6iPGz8McFanv1M-9XmzzO3ly8dzkj-aJoMeSbDYJOJi3IgRBwePe95eipYpYb3TcenNvLIwUsPSEKqTHDEkYKwkqAkKcuIRLvDkQ1bdTeu6gvduKFDL2ThH4HuXeRPUzbPV57m7YpekinE14BVLr7CuaNW980tLEoOqW8yhr1Z6ATTgeQlCoyFHENWqrZC8" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-32 px-6 bg-surface-container" id="客戶見證">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-headline text-5xl text-primary mb-4">信任，源於專業</h2>
        <p className="text-on-surface-variant">與來自不同領域的菁英合作，見證 AI 的美學變革。</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface p-8 rounded-xl md:col-span-2 shadow-sm border border-stone-200">
          <div className="flex gap-4 mb-6">
            <img 
              alt="Client 1" 
              className="w-12 h-12 rounded-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_m5D-MQmF_FuDT8prVJrMXru3HkIarmom-CKgIOX2pmr0ZYQffXCt9O9WI3fRSmqWM1lxl7DuO62nG57bSsepevjqtBlWvjO4WZJncOPCDHDlett3qG6z2pmNhj37thWknuW6ji61yvO-zqWvaPdcE82RBpqZreLiOvs1STLb-lWXlgsOsHPW1ePXmdLiY3b4D-Rr2dLc8gYne4ihKaRiKOj_3LF6dtJP1wpl_0q_o2iLlriBeOYJGMtcEz9TyBGv1dy5qemowFeJ" 
              referrerPolicy="no-referrer"
            />
            <div>
              <p className="font-bold">陳志豪</p>
              <p className="text-xs text-outline-variant">恆泰實業 執行長</p>
            </div>
          </div>
          <p className="text-on-surface-variant italic leading-relaxed">
            「我們公司過去面臨視覺產出緩慢的問題，Cindy 的顧問服務不只是教我們用軟體，更重要的是幫我們建立了一套『AI 視覺審美準則』。現在我們的行銷素材產出速度快了五倍，且質感提升了一個檔次。」
          </p>
        </div>
        <div className="bg-surface p-8 rounded-xl shadow-sm border border-stone-200">
          <div className="flex gap-4 mb-6">
            <img 
              alt="Client 2" 
              className="w-12 h-12 rounded-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBepgKtWcxmhL4PQmY_-6TeQZsThQ5L6Mh-nFo1RREgsw2YIxw7gJQAYUAqx4vO-mctiK0csll8X2rVJTKpjiN-jiuj5oCkqlMoeuqskLI6vlgEyw52MP_ZSMo4h94rf4Q1JA9fFeyulr-kufGf8bKyRkk6y-ofWsi09M9Rv4OVTEsikXqVngaFhFjuRyGEZC8EuOUZNoEs7BsYMxgKVRpdx6yU3REsTC2cgqGwuseAuTu0-e_u3UiqfT5PtrK0yvu0zyQvTm6AAvuD" 
              referrerPolicy="no-referrer"
            />
            <div>
              <p className="font-bold">Linda Wang</p>
              <p className="text-xs text-outline-variant">獨立時尚設計師</p>
            </div>
          </div>
          <p className="text-on-surface-variant text-sm italic leading-relaxed">
            「起初我很排斥 AI，但在 Cindy 的引導下，我發現 AI 是極佳的靈感碰撞機器。她幫我跨越了那道技術門檻。」
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section className="py-32 px-6 bg-surface" id="方案">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-headline text-5xl text-primary text-center mb-20">選擇您的變革方案</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div 
          whileHover={{ y: -5 }}
          className="border border-stone-200 p-12 rounded-xl flex flex-col items-center text-center bg-white shadow-sm"
        >
          <span className="text-xs tracking-widest text-outline-variant mb-4 uppercase font-bold">Individual</span>
          <h3 className="text-2xl font-headline font-bold mb-6">創意先鋒方案</h3>
          <div className="text-4xl font-headline text-primary mb-8">
            NT$ 18,800 <span className="text-sm font-body font-normal text-on-surface-variant">/ 每案</span>
          </div>
          <ul className="space-y-4 text-left text-sm text-on-surface-variant mb-12 w-full">
            {[
              "專屬 AI Prompt 資料庫建立",
              "4 小時一對一遠端實戰教學",
              "一個月內的線上技術支援"
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-primary" />
                {feature}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 border border-primary text-primary hover:bg-primary hover:text-white transition-all rounded font-bold cursor-pointer">立即諮詢</button>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-primary p-12 rounded-xl text-white flex flex-col items-center text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
          <span className="text-xs tracking-widest text-tertiary-fixed mb-4 uppercase font-bold">Enterprise</span>
          <h3 className="text-2xl font-headline font-bold mb-6">企業智能轉型</h3>
          <div className="text-4xl font-headline text-tertiary-fixed mb-8">
            Custom <span className="text-sm font-body font-normal opacity-60">/ 專案計費</span>
          </div>
          <ul className="space-y-4 text-left text-sm opacity-80 mb-12 w-full">
            {[
              "團隊工作流自動化佈局",
              "品牌專屬 AI 模型微調 (Fine-tuning)",
              "美學指導與長期顧問服務"
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <Verified size={18} className="text-tertiary-fixed" />
                {feature}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 bg-tertiary-fixed text-on-tertiary-fixed hover:scale-[1.02] transition-all rounded font-bold cursor-pointer">開啟企業合作</button>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-surface-container-low w-full pt-20 pb-10 px-8 border-t border-stone-200">
    <div className="flex flex-col items-center max-w-7xl mx-auto space-y-8">
      <div className="text-2xl font-headline italic font-bold text-primary">CindyFlower</div>
      <div className="flex flex-wrap justify-center gap-8">
        {["隱私條款", "服務條款", "LINE 客服", "電子郵件"].map(item => (
          <a key={item} href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">
            {item}
          </a>
        ))}
      </div>
      <p className="text-on-surface-variant/60 text-xs font-medium">
        © 2026 CindyFlower 智能顧問工作室. All rights reserved.
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
      <Nav />
      <Hero />
      <Services />
      <WhyUs />
      <Founder />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}
