
import { HeroVinhetas } from '@/components/servicos/vinhetas/HeroVinhetas';
import { SobreVinhetas } from '@/components/servicos/vinhetas/SobreVinhetas';
import { BeneficiosVinhetas } from '@/components/servicos/vinhetas/BeneficiosVinhetas';
import { OQueVoceRecebe } from '@/components/servicos/vinhetas/OQueVoceRecebe';
import { ProcessoProducao } from '@/components/servicos/vinhetas/ProcessoProducao';
import { ParaQuemE } from '@/components/servicos/vinhetas/ParaQuemE';
import { PlanosVinhetas } from '@/components/servicos/vinhetas/PlanosVinhetas';
import { DiferenciaisVinhetas } from '@/components/servicos/vinhetas/DiferenciaisVinhetas';
import { PortfolioVinhetas } from '@/components/servicos/vinhetas/PortfolioVinhetas';
import { DepoimentosVinhetas } from '@/components/servicos/vinhetas/DepoimentosVinhetas';
import { FaqVinhetas } from '@/components/servicos/vinhetas/FaqVinhetas';
import { CtaFinalVinhetas } from '@/components/servicos/vinhetas/CtaFinalVinhetas';

export default function VinhetasMusicaisPage() {
  return (
    <div className="bg-zinc-950 text-white">
      <HeroVinhetas />
      <SobreVinhetas />
      <BeneficiosVinhetas />
      <OQueVoceRecebe />
      <ProcessoProducao />
      <ParaQuemE />
      <PlanosVinhetas />
      <DiferenciaisVinhetas />
      <PortfolioVinhetas />
      <DepoimentosVinhetas />
      <FaqVinhetas />
      <CtaFinalVinhetas />
    </div>
  );
}
