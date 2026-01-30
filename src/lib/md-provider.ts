
const mdFiles = import.meta.glob('../content/projects/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
});

export const getProjectDescription = (slug: string) => {
    const path = `../content/projects/${slug}.md`;
    return mdFiles[path] as string || "";
};