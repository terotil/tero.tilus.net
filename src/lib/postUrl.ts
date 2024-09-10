import monthUrl from './monthUrl'

export default function postUrl(post:Object) {
    const date = post.data.published_at
    const day   = date.getDate().toString().padStart(2, '0')
    return `${monthUrl(post)}${day}/${post.slug}`
}

