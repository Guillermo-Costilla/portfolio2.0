function DataDecor() {
  return (
    <div className="analytics-artwork" aria-hidden="true">
      <div className="analytics-window">
        <div className="analytics-window-header">
          <span className="artwork-label">REVENUE OVERVIEW</span>
          <span className="artwork-period">2025</span>
        </div>
        <div className="analytics-chart">
          <div className="chart-grid">
            <span />
            <span />
            <span />
            <span />
          </div>
          <svg viewBox="0 0 520 180" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#23e6b2" stopOpacity=".32" />
                <stop offset="100%" stopColor="#23e6b2" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 148 C38 138 54 112 88 124 S145 153 178 105 226 117 260 82 306 106 342 62 395 90 426 44 478 55 520 16 V180 H0Z"
              fill="url(#chart-fill)"
            />
            <path
              d="M0 148 C38 138 54 112 88 124 S145 153 178 105 226 117 260 82 306 106 342 62 395 90 426 44 478 55 520 16"
              fill="none"
              stroke="#36e5b6"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
            />
            <circle cx="426" cy="44" r="4" fill="#b7fff0" />
            <circle cx="520" cy="16" r="4" fill="#b7fff0" />
          </svg>
        </div>
        <div className="analytics-bars">
          {[34, 48, 42, 63, 70, 86, 76, 100, 92, 116, 132].map((height, index) => (
            <span key={index} style={{ "--bar-height": `${height}%` }} />
          ))}
        </div>
      </div>
      <div className="analytics-donut-card">
        <div className="analytics-donut">
          <span />
        </div>
        <div className="donut-lines">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="analytics-stat-card">
        <span className="stat-caption">MONTHLY GROWTH</span>
        <strong>+24.8%</strong>
        <span className="stat-sparkline">▁ ▃ ▂ ▅ ▄ ▆ ▅ ▇</span>
      </div>
    </div>
  );
}

export default DataDecor;
