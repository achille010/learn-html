import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Learn HTML",
  description: "The ultimate guide to modern HTML5.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Reference', link: '/reference/' },
      { text: 'Github', link: 'https://github.com/' }
    ],
    sidebar: [
      {
        text: 'Foundations',
        items: [
          { text: 'What is HTML?', link: '/01-foundations/01-what-is-html' },
          { text: 'How Browsers Work', link: '/01-foundations/02-how-browsers-work' },
          { text: 'Environment Setup', link: '/01-foundations/03-setting-up-your-environment' },
          { text: 'Your First Page', link: '/01-foundations/04-your-first-html-page' },
          { text: 'Tags & Elements', link: '/01-foundations/05-tags-and-elements' },
          { text: 'Attributes', link: '/01-foundations/06-attributes' },
          { text: 'Comments', link: '/01-foundations/07-comments' },
          { text: 'Document Structure', link: '/01-foundations/08-document-structure' }
        ]
      },
      {
        text: 'Text and Content',
        items: [
          { text: 'Headings', link: '/02-text-and-content/01-headings' },
          { text: 'Paragraphs', link: '/02-text-and-content/02-paragraphs' },
          { text: 'Bold, Italic, Underline', link: '/02-text-and-content/03-bold-italic-underline' },
          { text: 'Line Breaks & HR', link: '/02-text-and-content/04-line-breaks-and-hr' },
          { text: 'Blockquotes', link: '/02-text-and-content/05-blockquotes' },
          { text: 'Preformatted Text', link: '/02-text-and-content/06-preformatted-text' },
          { text: 'Sup & Sub', link: '/02-text-and-content/07-superscript-and-subscript' },
          { text: 'Entities', link: '/02-text-and-content/08-special-characters-and-entities' }
        ]
      },
      {
        text: 'Links & Media',
        collapsed: true,
        items: [
          { text: 'Anchor Tags', link: '/03-links-and-navigation/01-anchor-tags' },
          { text: 'Internal Links', link: '/03-links-and-navigation/04-linking-to-page-sections' },
          { text: 'Images', link: '/04-images-and-media/01-img-tag-basics' },
          { text: 'Responsive Images', link: '/04-images-and-media/04-responsive-images' },
          { text: 'Audio & Video', link: '/04-images-and-media/06-audio' }
        ]
      },
      {
        text: 'Forms & Interaction',
        collapsed: true,
        items: [
          { text: 'Form Basics', link: '/07-forms/01-form-basics' },
          { text: 'Input Types', link: '/07-forms/02-input-types' },
          { text: 'Validation', link: '/07-forms/07-form-validation' },
          { text: 'Accessibility', link: '/07-forms/10-form-accessibility' }
        ]
      },
      {
        text: 'Advanced HTML',
        collapsed: true,
        items: [
          { text: 'Semantic HTML', link: '/08-semantic-html/README' },
          { text: 'Head & Metadata', link: '/09-head-and-metadata/README' },
          { text: 'Accessibility', link: '/10-accessibility/README' },
          { text: 'Advanced APIs', link: '/11-advanced-topics/README' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Cheat Sheet', link: '/reference/common-tags-cheat-sheet' },
          { text: 'A11y Checklist', link: '/reference/accessibility-checklist' },
          { text: 'Best Practices', link: '/reference/best-practices' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
