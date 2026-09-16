import type { Meta, StoryObj } from '@storybook/react';
import type { FC } from 'react';
import './introduction.css';
import { Button } from '../components/atoms/Button/Button';
import { Badge } from '../components/atoms/Badge/Badge';
import { WishlistButton } from '../components/atoms/WishlistButton/WishlistButton';
import { Price } from '../components/atoms/Price/Price';
import { ShoppingBag, Smartphone, Palette } from 'lucide-react';

const IntroductionPage: FC = () => {
  return (
    <div className="intro-container">
      {/* Hero Header */}
      <header className="intro-hero">
        <span className="intro-badge">Fashion E-Commerce Design System</span>
        <h1 className="intro-title font-editorial">Atelier Design System</h1>
        <p className="intro-desc">
          하이엔드 패션 이커머스 프로덕트를 위한 일관되고 확장 가능한 UI/UX 디자인 시스템입니다.
          비주얼 머천다이징(3:4 룩북 비율), 실시간 할인율 계산, 모바일 최적화 및 피그마(Figma) 토큰 1:1 호환을 지원합니다.
        </p>

        <div className="intro-stats-bar">
          <div className="intro-stat-item">
            <strong>3:4 Portrait</strong>
            <span>Fashion Standard Ratio</span>
          </div>
          <div className="intro-stat-item">
            <strong>Figma Sync</strong>
            <span>CSS Variables 1:1 Mapping</span>
          </div>
          <div className="intro-stat-item">
            <strong>Mobile First</strong>
            <span>iPhone 15/16 Ready Viewports</span>
          </div>
          <div className="intro-stat-item">
            <strong>A11y Checked</strong>
            <span>Tabular Numbers & Contrast</span>
          </div>
        </div>
      </header>

      {/* Component Architecture */}
      <section className="intro-section">
        <h2 className="intro-section-title">Component Architecture</h2>
        <p className="intro-section-subtitle">
          아토믹 디자인(Atomic Design) 방법론에 기반하여 설계된 컴포넌트 계층 구조입니다.
        </p>

        <div className="intro-arch-grid">
          <div className="intro-arch-card">
            <span className="intro-arch-card__tag">Layer 01</span>
            <h3>Foundations</h3>
            <p>디자인의 뼈대가 되는 핵심 토큰</p>
            <ul>
              <li><span>Color Palette</span><code>var(--color-*)</code></li>
              <li><span>Typography Scale</span><code>font-editorial / tabular</code></li>
              <li><span>Spacing & Radius</span><code>4px baseline grid</code></li>
              <li><span>Fashion Ratios</span><code>3:4, 1:1, 16:9</code></li>
            </ul>
          </div>

          <div className="intro-arch-card">
            <span className="intro-arch-card__tag">Layer 02</span>
            <h3>Atoms</h3>
            <p>더 이상 쪼갤 수 없는 기본 상호작용 요소</p>
            <ul>
              <li><span>Button</span><code>Primary / Outline / Sale</code></li>
              <li><span>WishlistButton</span><code>Heart bounce animation</code></li>
              <li><span>Badge</span><code>SALE, NEW, BEST, SOLDOUT</code></li>
              <li><span>Price</span><code>Discount auto-calc</code></li>
              <li><span>Swatches</span><code>Color chips & Size pills</code></li>
            </ul>
          </div>

          <div className="intro-arch-card">
            <span className="intro-arch-card__tag">Layer 03</span>
            <h3>Molecules</h3>
            <p>아톰들이 결합하여 특정 기능을 수행하는 단위</p>
            <ul>
              <li><span>ProductCard</span><code>Hover swap & Quick add</code></li>
              <li><span>QuantitySelector</span><code>Minimal stepper</code></li>
              <li><span>FilterChip</span><code>Category pill toggle</code></li>
            </ul>
          </div>

          <div className="intro-arch-card">
            <span className="intro-arch-card__tag">Layer 04</span>
            <h3>Organisms</h3>
            <p>실제 서비스 화면의 핵심 섹션</p>
            <ul>
              <li><span>ProductGrid</span><code>Responsive 2/3/4 cols</code></li>
              <li><span>MobileStickyBar</span><code>Fixed bottom order CTA</code></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive Micro Showcase */}
      <section className="intro-section">
        <h2 className="intro-section-title">Interactive Live Preview</h2>
        <p className="intro-section-subtitle">디자인 시스템의 주요 요소들을 지금 바로 테스트해보세요.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div style={{ padding: '20px', border: '1px solid var(--border-subtle)', borderRadius: '8px' }}>
            <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#666', marginBottom: '14px' }}>
              Badges & Wishlist Interaction
            </h4>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px' }}>
              <Badge variant="sale" shape="sharp">SALE -35%</Badge>
              <Badge variant="new" shape="sharp">NEW</Badge>
              <Badge variant="exclusive" shape="pill">EXCLUSIVE</Badge>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <WishlistButton variant="floating" size="md" initialActive={false} />
              <WishlistButton variant="outline" size="md" initialActive={true} count={1240} />
            </div>
          </div>

          <div style={{ padding: '20px', border: '1px solid var(--border-subtle)', borderRadius: '8px' }}>
            <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#666', marginBottom: '14px' }}>
              Price & CTA Buttons
            </h4>
            <div style={{ marginBottom: '12px' }}>
              <Price price={189000} originalPrice={270000} size="lg" />
            </div>
            <Button variant="primary" size="md" fullWidth leftIcon={<ShoppingBag size={16} />}>
              Add to Bag
            </Button>
          </div>
        </div>
      </section>

      {/* Designer Guidelines */}
      <section className="intro-section">
        <h2 className="intro-section-title">Designer & Developer Collaboration</h2>
        <div className="intro-guide-box">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Palette size={18} />
              <h4>피그마(Figma)와의 연동</h4>
            </div>
            <p>
              본 시스템의 모든 토큰 이름은 Figma Variables의 네이밍 컨벤션과 동일하게 구성되어 있습니다.
              예를 들어 피그마의 <code>color/sale/primary</code> 변수는 코드의 <code>var(--color-sale-primary)</code>로 직결됩니다.
            </p>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Smartphone size={18} />
              <h4>모바일 뷰포트 검증</h4>
            </div>
            <p>
              스토리북 상단 툴바의 <strong>Viewport 메뉴</strong>를 클릭하면 언제든 iPhone 15/16 및 갤럭시 화면 크기로 전환하여
              모바일 2열 상품 그리드와 하단 고정 구매 바(MobileStickyOrderBar)의 실사용감을 점검할 수 있습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const meta: Meta<typeof IntroductionPage> = {
  title: 'Overview/Welcome',
  component: IntroductionPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof IntroductionPage>;

export const WelcomePortal: Story = {};
