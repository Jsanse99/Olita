export function Card({ children, ...props }) { return <div {...props}>{children}</div>; }
export function CardContent({ children }) { return <div>{children}</div>; }