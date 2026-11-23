/**
 * Server-rendered wrapper that fades its content up on scroll.
 * Content stays visible without JS (the `.js` class gates the hidden state)
 * and a failsafe in _document reveals everything if hydration stalls.
 */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) {
  return (
    <Tag
      data-reveal=""
      className={className}
      style={delay ? { ...style, "--reveal-delay": `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
