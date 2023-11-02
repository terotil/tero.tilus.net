const { AsyncDatabase } = require("promised-sqlite3");
const textile = require("textile-js");
const fs = require('fs');

function timestamp(at) {
    return at.replace(' ', 'T') + '.000Z'
}

(async () => {
    try {
        // https://github.com/radiant/radiant + Categories, Paperclipped, Featured Pages, Comments -plugarit
        const db = await AsyncDatabase.open(__dirname+'/production.sqlite3.db');

        // Julkaistut blogipostaukset
        //const pages = await db.all("SELECT * FROM pages WHERE parent_id = 4 AND status_id = 100 AND class_name = ''");
        // Julkaistut politiikka-sivut
        const pages = await db.all("SELECT * FROM pages WHERE parent_id = 12 AND status_id = 100 AND class_name = ''");

        for (const page of pages) {
            let mdContent = "";
            mdContent += ("---");
            mdContent += (`\ntitle: ${JSON.stringify(page.title)}`);
            mdContent += (`\nradiant_id: ${page.id}`);
            mdContent += (`\nradiant_slug: ${page.slug}`);
            mdContent += (`\nbreadcrumb: ${JSON.stringify(page.breadcrumb)}`);
            mdContent += (`\ncreated_at: ${timestamp(page.created_at)}`);
            mdContent += (`\nupdated_at: ${timestamp(page.updated_at)}`);
            mdContent += (`\npublished_at: ${timestamp(page.published_at)}`);
            const tags = (await db.all(`SELECT meta_tags.name AS tag FROM taggings JOIN meta_tags ON taggings.meta_tag_id = meta_tags.id WHERE taggable_type = 'Page' AND taggable_id = ?`, [page.id])).map(t => t.tag);
            mdContent += (`\ntags: ${JSON.stringify(tags)}`);
            const comments = await db.all(`SELECT * FROM comments WHERE page_id = ?`, [page.id]);
            mdContent += ("\ncomments:");
            comments.forEach((c) => {
                mdContent += ("\n-");
                mdContent += (`\n  author: ${c.author}`);
                mdContent += (`\n  content: ${JSON.stringify(c.content)}`);
                mdContent += (`\n  filter_id: ${c.filter_id}`);
                mdContent += (`\n  content_html: ${JSON.stringify(c.content_html)}`);
                mdContent += (`\n  created_at: ${timestamp(c.created_at)}`);
            });
            mdContent += ("\n---\n");

            const [bodyPart, teaserPart] = await db.all(`SELECT * FROM page_parts WHERE page_id = ? ORDER BY name ASC`, [page.id]);
            if (bodyPart.filter_id === "" && teaserPart.filter_id === "Textile") {
                teaserPart.content = textile(teaserPart.content);
            }
            bodyPart.content = bodyPart.content.replace(/<r:content part="teaser" *\/>/, teaserPart.content);
            if ( bodyPart.filter_id === "Textile") {
                mdContent += (textile(bodyPart.content));
            } else {
                mdContent += (bodyPart.content);
            }
            fs.writeFileSync(`src/content/rutinat/${page.slug}.md`, mdContent);
        }
    } catch (err) {
        console.error(err);
    }
})();