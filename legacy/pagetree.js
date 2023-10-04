const { AsyncDatabase } = require("promised-sqlite3");

(async () => {

    try {
        // https://github.com/radiant/radiant + Categories, Paperclipped, Featured Pages, Comments -plugarit
        const db = await AsyncDatabase.open(__dirname+'/production.sqlite3.db');

        async function printPages(pages, indent) {
            for (const page of pages) {
                console.log(`${indent}${page.slug} (${page.breadcrumb})`);
                const childPages = await db.all("SELECT * FROM pages WHERE parent_id = ?", [page.id]);
                await printPages(childPages, indent + '  ');
            }
        }

        const pages = await db.all("SELECT * FROM pages WHERE parent_id is NULL");
        await printPages(pages, '');

    } catch (err) {
        console.error(err);
    }
})();