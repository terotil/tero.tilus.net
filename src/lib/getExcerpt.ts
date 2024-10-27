import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({ html: true })

export default function getExcerpt(post, length = 100) {
    const postHtml = md.render(post.body)
    return postHtml.replace(/<[^>]*>/g, '').slice(0, length)
}
