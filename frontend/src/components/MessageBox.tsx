import React from "react";
import { Alert } from "react-bootstrap";

export default function MessageBox({
  variant = "info",
  children,
}: {
  variant?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Alert variant={variant || "info"}>{children}</Alert>
    </div>
  );
}
