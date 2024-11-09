// File: src/hooks/useCmsData.js
import { useState, useEffect } from 'react';

// Helper function to parse YAML-style frontmatter
const parseFrontMatter = (text) => {
  try {
    if (!text || typeof text !== 'string') {
      console.error('Invalid input:', text);
      return null;
    }

    // Split content into frontmatter and body
    const matches = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!matches) {
      console.error('No valid frontmatter found');
      return null;
    }

    const [, frontmatterStr, content] = matches;
    let currentKey = null;
    let currentArray = null;
    const data = {};

    // Process each line of frontmatter
    frontmatterStr.split('\n').forEach(line => {
      const trimmedLine = line.trim();

      // Skip empty lines
      if (!trimmedLine) return;

      // Handle nested list items
      if (trimmedLine.startsWith('- ')) {
        if (!currentArray) {
          console.warn('Found list item without list declaration');
          return;
        }

        // Handle nested objects in lists
        if (trimmedLine.includes(': ')) {
          const [key, value] = trimmedLine.substring(2).split(': ');
          if (currentArray.length === 0 || Object.keys(currentArray[currentArray.length - 1]).length === 2) {
            currentArray.push({});
          }
          const currentItem = currentArray[currentArray.length - 1];
          currentItem[key.trim()] = value ? value.trim() : '';
        }
        return;
      }

      // Handle list declarations
      if (trimmedLine.endsWith(':') && !trimmedLine.includes(' ')) {
        currentKey = trimmedLine.slice(0, -1);
        currentArray = [];
        data[currentKey] = currentArray;
        return;
      }

      // Handle regular key-value pairs
      if (trimmedLine.includes(': ')) {
        const [key, ...valueParts] = trimmedLine.split(': ');
        const keyTrimmed = key.trim();
        const valueTrimmed = valueParts.join(': ').trim();
        
        // Clean up quotes if present
        data[keyTrimmed] = valueTrimmed.replace(/^['"](.*)['"]$/, '$1');
        currentKey = null;
        currentArray = null;
      }
    });

    return {
      data,
      content: content.trim()
    };
  } catch (error) {
    console.error('Error parsing frontmatter:', error);
    return null;
  }
};

// Hook for fetching page data (about, contact, etc.)
export const usePageData = (pageName) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/content/pages/${pageName}.md`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch ${pageName} page`);
        }

        const text = await response.text();
        console.log(`Raw ${pageName} content:`, text);

        // Check if we got HTML instead of markdown
        if (text.trim().startsWith('<!DOCTYPE html>') || text.trim().startsWith('<html>')) {
          throw new Error('Received HTML instead of markdown content');
        }

        const parsed = parseFrontMatter(text);
        if (!parsed) {
          throw new Error('Failed to parse page data');
        }

        console.log(`Parsed ${pageName} data:`, parsed.data);
        setData(parsed.data);
        setError(null);
      } catch (err) {
        console.error(`Error loading ${pageName} data:`, err);
        setData(getFallbackData(pageName));
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageName]);

  return { data, loading, error };
};

// Hook for fetching all projects
export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('/content/projects/index.json');
        
        if (!response.ok) {
          throw new Error('Failed to fetch projects index');
        }

        const projectFiles = await response.json();
        const projectsData = await Promise.all(
          projectFiles.map(async (fileName) => {
            const fileResponse = await fetch(`/content/projects/${fileName}`);
            const text = await fileResponse.text();
            const parsed = parseFrontMatter(text);
            
            if (!parsed) {
              throw new Error(`Failed to parse project: ${fileName}`);
            }

            return {
              ...parsed.data,
              content: parsed.content,
              slug: fileName.replace('.md', '')
            };
          })
        );

        setProjects(projectsData);
        setError(null);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setProjects(getFallbackProjects());
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};

// Hook for fetching a single project
export const useProject = (slug) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        const response = await fetch(`/content/projects/${slug}.md`);
        
        if (!response.ok) {
          throw new Error('Project not found');
        }

        const text = await response.text();
        const parsed = parseFrontMatter(text);
        
        if (!parsed) {
          throw new Error('Failed to parse project data');
        }

        setProject({
          ...parsed.data,
          content: parsed.content,
          slug
        });
        setError(null);
      } catch (err) {
        console.error('Error fetching project:', err);
        setProject(getFallbackProject(slug));
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  return { project, loading, error };
};

// Fallback data functions
const getFallbackData = (pageName) => {
  switch (pageName) {
    case 'about':
      return {
        name: 'Your Name',
        title: 'Digital Artist',
        bio: 'Welcome to my portfolio.',
        socialLinks: [
          { platform: 'GitHub', url: 'https://github.com' },
          { platform: 'LinkedIn', url: 'https://linkedin.com' }
        ]
      };
    case 'contact':
      return {
        email: 'contact@example.com',
        phone: '+1 234 567 8900',
        location: 'City, Country',
        successMessage: 'Thank you for your message!'
      };
    default:
      return {};
  }
};

const getFallbackProjects = () => [
  {
    title: 'Sample Project',
    slug: 'sample-project',
    category: 'Tech Art',
    description: 'A sample project showcasing various techniques.',
    thumbnail: '/api/placeholder/400/300',
    content: 'Sample project content goes here.',
    images: ['/api/placeholder/800/600'],
    featured: true,
    createdAt: new Date().toISOString()
  }
];

const getFallbackProject = (slug) => ({
  title: 'Sample Project',
  slug,
  category: 'Tech Art',
  description: 'A sample project showcasing various techniques.',
  thumbnail: '/api/placeholder/400/300',
  content: 'Sample project content goes here.',
  images: ['/api/placeholder/800/600'],
  featured: true,
  createdAt: new Date().toISOString()
});

export const clearCache = () => {
  // Implement cache clearing if needed
  console.log('Cache cleared');
};