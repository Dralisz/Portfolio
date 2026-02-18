// Get the base path for the application
export const getBasePath = (): string => {
  if (typeof window !== 'undefined') {
    // Browser environment - get from window location or use empty string
    return '';
  }
  // Server environment
  return process.env.NODE_ENV === 'production' ? '/Portfolio' : '';
};

// Get a full path with base path prefix
export const withBasePath = (path: string): string => {
  const basePath = getBasePath();
  return `${basePath}${path}`;
};
