export default function toTags(posts) {
    const tags = Object.entries(posts.map(post => post.data.tags).flat().reduce((counts, tag) => {
        counts[tag] = (counts[tag] || 0) + 1
        return counts
    }, {}))
    tags.sort((a, b) => b[1] - a[1])

    return tags
}