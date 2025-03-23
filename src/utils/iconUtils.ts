import React from 'react';
import { IconType } from 'react-icons';

/**
 * A utility function to render React Icons safely with TypeScript
 * Works around the "cannot be used as a JSX component" and 
 * "No overload matches this call" TypeScript errors
 */
export const renderIcon = (Icon: IconType, props = {}) => {
  // Using a type assertion to work around the TypeScript errors
  return React.createElement(Icon as any, props);
}; 