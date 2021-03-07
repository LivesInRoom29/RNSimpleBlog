import React from 'react';

interface BlogContextInterface {
  id: number;
  author: string;
  title: string;
  text: string;
}

const BlogContext = React.createContext<BlogContextInterface | null>(null);

export const BlogProvider: React.FC = ({ children }) => {
  return <BlogContext.Provider value={{
    id: 1,
    author: "anonymous",
    title: "Blog Post 1",
    text: "This is the first blag post.... more text goes here."
  }}>
    {children}
  </BlogContext.Provider>
}

export default BlogContext;