
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  ShieldCheck, 
  Brain, 
  Leaf, 
  Flame, 
  Bird, 
  ShoppingBag,
  Timer,
  Info
} from 'lucide-react';

// Fix: Using 'declare global' instead of 'declare module' to avoid module resolution errors
// when extending JSX IntrinsicElements for custom web components in this environment.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'cakto-upsell-buttons': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'cakto-upsell-accept': any;
      'cakto-upsell-reject': any;
    }
  }
}

// --- Components ---

const WarningBar: React.FC = () => {
  return (
    <div className="bg-red-600 text-white py-3 px-4 text-center font-bold sticky top-0 z-50 shadow-lg animate-pulse">
      <p className="text-sm md:text-base tracking-wide">
        ESPERE! SEU PEDIDO AINDA NÃO FOI FINALIZADO.
        <span className="block md:inline md:ml-2 font-normal">Não feche essa página agora.</span>
      </p>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="bg-white py-8 px-6 text-center border-b border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-emerald-700 font-bold mb-4 uppercase tracking-widest text-sm">Parabéns pela decisão!</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
          "O seu treinamento já está sendo separado e vai chegar em breve. Mas preciso ser honesto com você..."
        </p>
      </div>
    </header>
  );
};

const ProductReveal: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <div className="relative">
             <div className="absolute -inset-4 bg-emerald-100 rounded-xl blur-2xl opacity-50"></div>
             <img 
               src="https://i.ibb.co/RGnQWMbq/unnamed-9.jpg" 
               alt="Capa do Calendário do Éden" 
               className="relative rounded-2xl shadow-2xl border-4 border-white w-full max-w-sm mx-auto"
             />
             <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-4 rounded-full shadow-xl hidden md:block">
                <Leaf className="w-8 h-8 text-emerald-900" />
             </div>
          </div>
        </div>
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight uppercase">
            O CALENDÁRIO DO ÉDEN
          </h1>
          <p className="text-xl text-emerald-700 font-semibold">
            30 Dias para Restaurar sua Biologia, Clarear sua Mente e Reencontrar a Saúde Original.
          </p>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Este não é apenas um livro de receitas. É um <strong>plano de ação de 4 semanas</strong> que une a sabedoria profética de Ellen G. White com as descobertas mais recentes da ciência moderna sobre longevidade.
            </p>
            <p>
              Nós desenhamos o caminho exato para você sair do "ciclo da doença" e entrar no "ciclo da vitalidade" em apenas 30 dias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Benefits: React.FC = () => {
  const weeks = [
    {
      icon: <Leaf className="text-emerald-500 w-8 h-8" />,
      title: "Semana 1: O Detox Biológico",
      desc: "Limpe seu paladar e seu sangue. Aprenda a substituir a carne e os estimulantes sem sentir fraqueza ou fome excessiva."
    },
    {
      icon: <Brain className="text-blue-500 w-8 h-8" />,
      title: "Semana 2: O Despertar da Mente",
      desc: "Protocolos específicos para desinflamar o cérebro, acabando com a 'névoa mental' e a ansiedade através da nutrição."
    },
    {
      icon: <ShieldCheck className="text-yellow-500 w-8 h-8" />,
      title: "Semana 3: Blindagem Imunológica",
      desc: "Descubra os alimentos esquecidos da Bíblia que fortalecem suas defesas naturais."
    },
    {
      icon: <Bird className="text-purple-500 w-8 h-8" />,
      title: "Semana 4: A Conexão Espiritual",
      desc: "Como sua alimentação influencia diretamente sua comunhão com Deus e sua clareza espiritual (baseado nos escritos de EGW)."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
          O que vai acontecer com seu corpo nas próximas 4 semanas:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {weeks.map((week, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="flex-shrink-0 bg-gray-50 p-3 rounded-lg">
                {week.icon}
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">{week.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{week.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-emerald-50 p-6 rounded-2xl border border-emerald-100 flex items-center gap-4">
          <Info className="text-emerald-600 flex-shrink-0" />
          <p className="text-emerald-800 font-medium italic">
            <strong>BÔNUS EXTRA:</strong> Cardápios prontos, lista de compras econômica e o guia de substituições inteligentes incluso!
          </p>
        </div>
      </div>
    </section>
  );
};

const PricingSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="py-20 px-6 bg-emerald-900 text-white">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-yellow-300 font-bold animate-bounce">
          <Timer className="w-5 h-5" />
          <span>Oferta expira em: {formatTime(timeLeft)}</span>
        </div>

        <div className="space-y-4">
          <p className="text-lg opacity-90">De <span className="line-through decoration-red-500 decoration-2">R$ 147,00</span></p>
          <div className="text-6xl font-black">R$ 67,90</div>
          <p className="text-sm uppercase tracking-widest text-emerald-300">Pagamento Único • Sem Mensalidades</p>
        </div>

        {/* Cakto Upsell Integration Area */}
        <div className="space-y-6">
          <cakto-upsell-buttons>
            <cakto-upsell-accept
              bg-color="#10b981"
              text-color="#ffffff"
              upsell-accept-url="members_area"
              offer-id="bhth959"
              app-base-url="https://app.cakto.com.br"
              offer-type="upsell"
              upsell-reject-url="members_area"   
            >
              SIM! ADICIONAR O CALENDÁRIO AO MEU PEDIDO
            </cakto-upsell-accept>
            
            <p className="text-xs opacity-70 italic mt-4">
              Clique no botão acima e a cobrança será feita automaticamente no seu cartão. Não precisa digitar seus dados novamente.
            </p>

            <cakto-upsell-reject
              upsell-reject-url="members_area"       
            >
              Não, obrigado. Eu prefiro continuar me alimentando como sempre fiz e recuso essa oferta de desconto exclusivo.
            </cakto-upsell-reject>
          </cakto-upsell-buttons>
        </div>

        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col items-center gap-4">
             <div className="flex items-center gap-2 text-yellow-400 font-bold">
                <CheckCircle className="w-5 h-5" />
                <span>Garantia de 7 Dias</span>
             </div>
             <p className="text-sm opacity-80 leading-relaxed">
               Adicione agora. Se em 7 dias você achar que o calendário é difícil demais ou não sentir diferença na sua disposição, nós devolvemos 100% do valor deste e-book. <strong>O risco é todo nosso.</strong>
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialProof: React.FC = () => {
  return (
    <section className="py-12 bg-white px-6">
       <div className="max-w-xl mx-auto border-l-4 border-emerald-500 pl-6 py-4 italic text-gray-700 bg-gray-50 rounded-r-xl">
          <p className="text-lg mb-2">"Segui o dia 15 do calendário e minha gastrite sumiu. Me sinto com a energia de quando tinha 20 anos."</p>
          <p className="font-bold text-gray-900">— Maria A., Aluna do Calendário</p>
       </div>
    </section>
  );
};

// --- Main App ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <WarningBar />
      
      <Header />

      <main>
        {/* The Connection Section */}
        <section className="py-16 px-6 max-w-3xl mx-auto text-center">
           <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-snug">
              O Treinamento resolve uma parte do seu dia. <span className="text-emerald-600">Mas o que você vai comer no resto do tempo?</span>
           </p>
           <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
             <p>
               De nada adianta nutrir seu cérebro no café da manhã se, no almoço e no jantar, você continua intoxicando seu corpo com alimentos que causam inflamação, cansaço e doenças.
             </p>
             <p>
               Ellen White dizia que <strong>"a reforma de saúde é uma obra progressiva"</strong>. Você deu o primeiro passo, mas para ter saúde total, você precisa restaurar sua biologia completa.
             </p>
             <div className="pt-4">
                <ArrowRight className="mx-auto text-emerald-500 w-10 h-10 animate-bounce" />
             </div>
           </div>
        </section>

        <ProductReveal />
        
        <Benefits />

        <SocialProof />

        <PricingSection />
      </main>

      <footer className="py-12 bg-gray-100 px-6 text-center text-gray-500 text-sm">
        <p>© 2024 Calendário do Éden. Todos os direitos reservados.</p>
        <p className="mt-2">Este produto não substitui o conselho médico profissional.</p>
      </footer>
    </div>
  );
};

export default App;
