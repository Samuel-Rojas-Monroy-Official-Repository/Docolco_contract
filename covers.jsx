// Four cover designs for SR.DEV presentations.
// Each cover is 1920x1080. Shared editorial system, distinct colorways.

const W = 1920;
const H = 1080;

// ---------- Shared bits ----------

function CornerMark({ index, total, accent }) {
  return (
    <div style={{
      position: 'absolute', top: 60, left: 80,
      display: 'flex', alignItems: 'baseline', gap: 14,
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: 18, letterSpacing: '0.18em', textTransform: 'uppercase',
    }}>
      <span style={{ fontSize: 64, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1, color: accent }}>
        {String(index).padStart(2, '0')}
      </span>
      <span style={{ opacity: 0.55 }}>/ {String(total).padStart(2, '0')}</span>
    </div>
  );
}

function TopMeta({ left, right, color = 'rgba(0,0,0,0.55)' }) {
  return (
    <div style={{
      position: 'absolute', top: 60, right: 80,
      display: 'flex', gap: 48, alignItems: 'baseline',
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase',
      color,
    }}>
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}

function BottomBar({ items, color = 'rgba(0,0,0,0.7)', divider = 'rgba(0,0,0,0.15)' }) {
  return (
    <div style={{
      position: 'absolute', bottom: 60, left: 80, right: 80,
      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase',
      color,
      borderTop: `1px solid ${divider}`,
      paddingTop: 22,
    }}>
      {items.map((it, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 6, maxWidth: 320 }}>
          <span style={{ opacity: 0.55, fontSize: 11 }}>{it.label}</span>
          <span style={{ fontSize: 14 }}>{it.value}</span>
        </div>
      ))}
    </div>
  );
}

// Grid of faint dots / rules — editorial ornament
function GridLines({ color = 'rgba(0,0,0,0.06)' }) {
  return (
    <svg width={W} height={H} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      {/* vertical column rules at 80, 480, 960, 1440, 1840 */}
      {[80, 480, 960, 1440, 1840].map((x) => (
        <line key={x} x1={x} y1={0} x2={x} y2={H} stroke={color} strokeWidth="1" />
      ))}
    </svg>
  );
}

// ---------- Cover 1 — BIENVENIDA (warm cream) ----------

function CoverBienvenida() {
  const bg = '#F1E9DA';
  const ink = '#1A1714';
  const accent = '#C24A1F';
  return (
    <div style={{ width: W, height: H, background: bg, color: ink, position: 'relative', overflow: 'hidden', fontFamily: '"Instrument Serif", serif' }}>
      <GridLines color="rgba(26,23,20,0.05)" />
      <CornerMark index={1} total={4} accent={accent} />
      <TopMeta left="SR.DEV STUDIO" right="MAYO · 2025" color="rgba(26,23,20,0.6)" />

      {/* Eyebrow */}
      <div style={{
        position: 'absolute', top: 320, left: 80,
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 14, letterSpacing: '0.32em', textTransform: 'uppercase',
        color: accent,
      }}>
        Paquete de Bienvenida · Vol. I
      </div>

      {/* Title */}
      <div style={{
        position: 'absolute', top: 360, left: 76,
        fontSize: 360, lineHeight: 0.86,
        letterSpacing: '-0.045em',
        fontWeight: 400,
      }}>
        <div>Bien-</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 40 }}>
          <span>venidos</span>
          <span style={{ fontSize: 60, fontStyle: 'italic', color: accent, letterSpacing: '-0.02em', transform: 'translateY(-30px)' }}>—al proyecto.</span>
        </div>
      </div>

      {/* Right column — client stack */}
      <div style={{
        position: 'absolute', right: 80, top: 320,
        display: 'flex', flexDirection: 'column', gap: 28,
        textAlign: 'right',
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase',
      }}>
        <div style={{ opacity: 0.5 }}>Clientes</div>
        <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: 72, lineHeight: 0.9, letterSpacing: '-0.02em', textTransform: 'none' }}>
          Plasfilm<br/>S.A.S.
          <div style={{ fontSize: 32, opacity: 0.5, marginTop: 6 }}>+</div>
          Docolco<br/>LLC
        </div>
      </div>

      <BottomBar
        color="rgba(26,23,20,0.75)"
        divider="rgba(26,23,20,0.2)"
        items={[
          { label: 'Estudio', value: 'SR.DEV · Samuel Rojas' },
          { label: 'Documento', value: '01 — Bienvenida' },
          { label: 'Origen', value: 'Bogotá D.C. · Colombia' },
          { label: 'Contacto', value: '+57 304 353 8450' },
        ]}
      />
    </div>
  );
}

// ---------- Cover 2 — ESTADO DEL PROYECTO (cool gray, data-led) ----------

function CoverEstado() {
  const bg = '#ECECE8';
  const ink = '#161616';
  const accent = '#1F5DBD';
  const muted = 'rgba(22,22,22,0.5)';
  return (
    <div style={{ width: W, height: H, background: bg, color: ink, position: 'relative', overflow: 'hidden', fontFamily: '"Instrument Serif", serif' }}>
      <GridLines color="rgba(22,22,22,0.05)" />
      <CornerMark index={2} total={4} accent={accent} />
      <TopMeta left="REPORTE SEMANAL" right="WK · 21 / 2025" color="rgba(22,22,22,0.6)" />

      {/* Title block — left */}
      <div style={{ position: 'absolute', top: 300, left: 76, maxWidth: 1100 }}>
        <div style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 14, letterSpacing: '0.32em', textTransform: 'uppercase',
          color: accent,
          marginBottom: 32,
        }}>
          Reporte de Avance · Semana 21
        </div>
        <div style={{ fontSize: 240, lineHeight: 0.88, letterSpacing: '-0.04em', fontWeight: 400 }}>
          Estado<br/>
          <span style={{ fontStyle: 'italic', color: accent }}>del</span> proyecto.
        </div>
      </div>

      {/* Progress block — right, mono dataviz */}
      <div style={{
        position: 'absolute', top: 300, right: 80,
        width: 380,
        display: 'flex', flexDirection: 'column', gap: 40,
      }}>
        <div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', color: muted, marginBottom: 12 }}>
            Plasfilm S.A.S. · CO
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 132, lineHeight: 1, letterSpacing: '-0.04em' }}>65</span>
            <span style={{ fontSize: 32, color: muted }}>%</span>
          </div>
          {/* progress bar */}
          <div style={{ height: 6, background: 'rgba(22,22,22,0.1)', marginTop: 8, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, width: '65%', background: accent }} />
          </div>
        </div>

        <div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', color: muted, marginBottom: 12 }}>
            Docolco LLC · US
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 132, lineHeight: 1, letterSpacing: '-0.04em' }}>40</span>
            <span style={{ fontSize: 32, color: muted }}>%</span>
          </div>
          <div style={{ height: 6, background: 'rgba(22,22,22,0.1)', marginTop: 8, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, width: '40%', background: accent }} />
          </div>
        </div>
      </div>

      <BottomBar
        color="rgba(22,22,22,0.75)"
        divider="rgba(22,22,22,0.2)"
        items={[
          { label: 'Estudio', value: 'SR.DEV · Samuel Rojas' },
          { label: 'Documento', value: '02 — Estado del proyecto' },
          { label: 'Próxima revisión', value: 'Lunes · 10:00 (BOG)' },
          { label: 'Versión', value: 'r.02 — Mayo 2025' },
        ]}
      />
    </div>
  );
}

// ---------- Cover 3 — CONTRATO + PAGOS (deep ink, formal) ----------

function CoverContrato() {
  const bg = '#171513';
  const ink = '#F1E9DA';
  const accent = '#D4A24C';
  const muted = 'rgba(241,233,218,0.5)';
  return (
    <div style={{ width: W, height: H, background: bg, color: ink, position: 'relative', overflow: 'hidden', fontFamily: '"Instrument Serif", serif' }}>
      <GridLines color="rgba(241,233,218,0.06)" />
      <CornerMark index={3} total={4} accent={accent} />
      <TopMeta left="DOCUMENTO LEGAL" right="REF · SRD-2025-002" color="rgba(241,233,218,0.55)" />

      {/* Centered editorial */}
      <div style={{
        position: 'absolute', top: 270, left: 80, right: 80,
      }}>
        <div style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 14, letterSpacing: '0.34em', textTransform: 'uppercase',
          color: accent,
          marginBottom: 36,
        }}>
          Acuerdo de Servicios · Capítulo III
        </div>
        <div style={{ fontSize: 280, lineHeight: 0.86, letterSpacing: '-0.045em', fontWeight: 400 }}>
          Contrato <span style={{ fontStyle: 'italic', color: accent }}>&amp;</span><br/>
          Pagos.
        </div>
      </div>

      {/* Summary strip */}
      <div style={{
        position: 'absolute', left: 80, right: 80, bottom: 200,
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32,
        paddingTop: 24,
        borderTop: '1px solid rgba(241,233,218,0.18)',
      }}>
        {[
          ['Valor total', '$2.000.000 COP'],
          ['Hitos', '2 pagos · 50 / 50'],
          ['Alcance', '2 sitios web completos'],
          ['Inicio', 'Mayo 2025'],
        ].map(([k, v]) => (
          <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: muted }}>{k}</span>
            <span style={{ fontSize: 28, lineHeight: 1.1, letterSpacing: '-0.01em' }}>{v}</span>
          </div>
        ))}
      </div>

      <BottomBar
        color="rgba(241,233,218,0.7)"
        divider="rgba(241,233,218,0.18)"
        items={[
          { label: 'Prestador', value: 'Samuel D. Rojas Monroy' },
          { label: 'Cliente', value: 'Plasfilm S.A.S. / Docolco LLC' },
          { label: 'Documento', value: '03 — Contrato + Pagos' },
          { label: 'Fecha', value: 'Mayo 2025 · Bogotá' },
        ]}
      />
    </div>
  );
}

// ---------- Cover 4 — ESTRATEGIA + ACCESOS (terracotta block, bold) ----------

function CoverEstrategia() {
  const bg = '#0E1A14';
  const ink = '#F0EBDF';
  const accent = '#76C893';
  const muted = 'rgba(240,235,223,0.55)';
  return (
    <div style={{ width: W, height: H, background: bg, color: ink, position: 'relative', overflow: 'hidden', fontFamily: '"Instrument Serif", serif' }}>
      <GridLines color="rgba(240,235,223,0.05)" />
      <CornerMark index={4} total={4} accent={accent} />
      <TopMeta left="POST-LANZAMIENTO" right="HORIZONTE · 90 DÍAS" color="rgba(240,235,223,0.55)" />

      {/* Big title — diagonal-ish layered */}
      <div style={{ position: 'absolute', top: 280, left: 76, right: 80 }}>
        <div style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 14, letterSpacing: '0.32em', textTransform: 'uppercase',
          color: accent,
          marginBottom: 32,
        }}>
          Crecimiento · Volumen IV
        </div>
        <div style={{ fontSize: 260, lineHeight: 0.86, letterSpacing: '-0.045em', fontWeight: 400 }}>
          Estrategia
        </div>
        <div style={{ fontSize: 110, lineHeight: 1, letterSpacing: '-0.03em', fontStyle: 'italic', color: accent, marginTop: 8 }}>
          + accesos del cliente.
        </div>
      </div>

      {/* Right meta — country pair */}
      <div style={{
        position: 'absolute', right: 80, top: 290,
        display: 'flex', flexDirection: 'column', gap: 20, textAlign: 'right',
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase',
      }}>
        <div style={{ opacity: 0.5 }}>Mercados</div>
        <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: 56, lineHeight: 1, letterSpacing: '-0.02em', textTransform: 'none' }}>
          Colombia<br/>
          <span style={{ opacity: 0.5, fontSize: 28 }}>+</span><br/>
          Estados Unidos
        </div>
      </div>

      <BottomBar
        color="rgba(240,235,223,0.7)"
        divider="rgba(240,235,223,0.18)"
        items={[
          { label: 'Estudio', value: 'SR.DEV · Samuel Rojas' },
          { label: 'Documento', value: '04 — Estrategia + Accesos' },
          { label: 'Horizonte', value: '60–90 días post-launch' },
          { label: 'Confidencial', value: 'Solo cliente' },
        ]}
      />
    </div>
  );
}

// ---------- Canvas root ----------

function App() {
  return (
    <DesignCanvas title="SR.DEV — Portadas (4)" subtitle="Sistema editorial · 1920×1080 · Listo para exportar como imagen e insertar como slide 1">
      <DCSection id="portadas" title="Las cuatro portadas">
        <DCArtboard id="cover-1" label="01 — Bienvenida" width={W} height={H}>
          <CoverBienvenida />
        </DCArtboard>
        <DCArtboard id="cover-2" label="02 — Estado del proyecto" width={W} height={H}>
          <CoverEstado />
        </DCArtboard>
        <DCArtboard id="cover-3" label="03 — Contrato + Pagos" width={W} height={H}>
          <CoverContrato />
        </DCArtboard>
        <DCArtboard id="cover-4" label="04 — Estrategia + Accesos" width={W} height={H}>
          <CoverEstrategia />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
