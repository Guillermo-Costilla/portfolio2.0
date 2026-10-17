import {
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const lines = [
  <span key="app">
    <span className="code-keyword">const</span> app ={" "}
    <span className="code-function">express</span>();
  </span>,
  <span key="middleware">
    app.<span className="code-function">use</span>(middleware);
  </span>,
  <span key="data">
    <span className="code-keyword">const</span> {"{ data }"} ={" "}
    <span className="code-keyword">await</span>{" "}
    <span className="code-function">getData</span>();
  </span>,
  <span className="code-keyword" key="return">return</span>,
  <span key="dashboard">
    &nbsp;&nbsp;&lt;<span className="code-tag">Dashboard</span>{" "}
    data={"{"}data{"}"} /&gt;
  </span>,
  <span key="close">&nbsp;&nbsp;&lt;/div&gt;</span>,
  <span key="component-close">{"};"}</span>,
];

function CodeDecor() {
  return (
    <div className="code-artwork" aria-hidden="true">
      <div className="code-window">
        <div className="code-window-header">
          <div className="window-controls">
            <span />
            <span />
            <span />
          </div>
          <div className="code-tab">
            <SiReact />
            <span>app.tsx</span>
          </div>
        </div>
        <div className="code-content">
          {lines.map((line, index) => (
            <div className="code-line" key={index}>
              <span className="code-line-number">{index + 1}</span>
              <code>{line}</code>
            </div>
          ))}
          <span className="code-cursor" />
        </div>
      </div>
      <div className="code-tech-stack">
        <span className="code-tech-icon react"><SiReact /></span>
        <span className="code-tech-icon node"><SiNodedotjs /></span>
        <span className="code-tech-icon typescript"><SiTypescript /></span>
        <span className="code-tech-icon code-mark">&lt;/&gt;</span>
      </div>
      <div className="code-orbit code-orbit-one" />
      <div className="code-orbit code-orbit-two" />
    </div>
  );
}

export default CodeDecor;
