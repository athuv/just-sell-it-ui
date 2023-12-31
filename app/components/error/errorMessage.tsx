import React, { ReactNode } from 'react';

const ErrorMessage = ({ children }: { children: ReactNode }) => {
  return <span className="text-sm text-red-700">{children}</span>;
};

export default ErrorMessage;
