export default function monthUrl(post:Object) {
    const date = post.data.published_at
    const year  = date.getFullYear().toString()
    const month = (date.getMonth()+1).toString().padStart(2, '0')
    return `/rutinat/${year}/${month}/`
}

