import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import './introduction.css';
import { Layers, RefreshCw, FileCode, CheckCircle2, ArrowRight } from 'lucide-react';

const FigmaSyncGuide: React.FC = () => {
  const [copiedCmd, setCopiedCmd] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm run tokens:sync');
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <div className="intro-container">
      <header className="intro-hero">
        <span className="intro-badge">Design Ops & Figma Workflow</span>
        <h1 className="intro-title font-editorial">Figma Tokens Sync Pipeline</h1>
        <p className="intro-desc">
          피그마(Figma)에서 정의한 디자인 토큰/Variables(색상, 여백, 모서리 둥글기, 비율)를 코드베이스로 즉시 동기화하는 파이프라인입니다.
        </p>
      </header>

      <section className="intro-section">
        <h2 className="intro-section-title">동기화 프로세스 (3-Step Workflow)</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', margin: '24px 0' }}>
          <div style={{ background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--color-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '13px' }}>1</span>
              <h3 style={{ fontSize: '16px', fontWeight: 600 }}>Figma Variables / Tokens Export</h3>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-grey-600)', lineHeight: 1.6 }}>
              Figma의 <strong>Tokens Studio</strong> 플러그인 또는 Variables 내보내기 기능을 통해 JSON 파일을 내보냅니다.
            </p>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--color-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '13px' }}>2</span>
              <h3 style={{ fontSize: '16px', fontWeight: 600 }}>tokens.json 파일 덮어쓰기</h3>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-grey-600)', lineHeight: 1.6 }}>
              내보낸 JSON 내용을 <code>src/tokens/tokens.json</code> 파일에 저장합니다.
            </p>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--color-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '13px' }}>3</span>
              <h3 style={{ fontSize: '16px', fontWeight: 600 }}>Sync Script 실행</h3>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-grey-600)', lineHeight: 1.6 }}>
              터미널에서 명령어 한 줄로 CSS 변수(figma-generated.css)로 자동 변환됩니다.
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--color-grey-50)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '20px', marginTop: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-grey-500)', display: 'block' }}>CLI Synchronize Command</span>
              <code style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-black)', fontFamily: 'var(--font-mono)' }}>npm run tokens:sync</code>
            </div>
            <button
              onClick={handleCopy}
              style={{ padding: '8px 16px', background: 'var(--color-black)', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 600 }}
            >
              {copiedCmd ? '명령어 복사됨! ✓' : '명령어 복사'}
            </button>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <h2 className="intro-section-title">동기화 대상 토큰 스키마 예시</h2>
        <pre style={{ background: '#18181b', color: '#f4f4f5', padding: '20px', borderRadius: '8px', fontSize: '12px', lineHeight: 1.5, overflowX: 'auto', fontFamily: 'var(--font-mono)' }}>
{`{
  "color": {
    "neutral": {
      "black": { "$value": "#0f0f10", "$type": "color" },
      "warm": {
        "ivory": { "$value": "#fcfbf9", "$type": "color" },
        "sand": { "$value": "#f5f2eb", "$type": "color" }
      }
    },
    "accent": {
      "burgundy": { "$value": "#801323", "$type": "color" }
    },
    "sale": {
      "primary": { "$value": "#dc2626", "$type": "color" }
    }
  },
  "aspectRatio": {
    "fashion": { "$value": "3 / 4", "$type": "string" }
  }
}`}
        </pre>
      </section>
    </div>
  );
};

const meta: Meta<typeof FigmaSyncGuide> = {
  title: 'Overview/Figma Tokens Sync',
  component: FigmaSyncGuide,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof FigmaSyncGuide>;

export const SyncGuide: Story = {};
