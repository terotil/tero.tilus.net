---
title: "Maemo desktop icons"
radiant_id: 48
radiant_slug: maemo-desktop-icons
breadcrumb: "Maemo desktop icons"
created_at: 2010-09-05T08:29:49.000Z
updated_at: 2010-09-05T08:29:49.000Z
published_at: 2010-09-05T11:29:49.000Z
tags: ["hack-hack"]
comments:
---
<p>I finally got myself around flashing <span class="caps">PR1</span>.2 of Maemo to my <span class="caps">N900</span>.  I also went to draw nice icons for my common commands (fire <tt>osso-xterm</tt>, ssh to particular server and attach to particular screen there, etc.).  Until now I&#8217;ve recognized them by the location of their respective nice blue rounded and beveled squares (the default icon) on the desktop.</p>
<p>It took me all too long to realize it wasn&#8217;t me trying to put wrong kinds of icons to wrong places but <a href="https://bugs.maemo.org/show_bug.cgi?id=6931">a bug</a> preventing my <span class="caps">N900</span> from seeing my new icons.  Plain <tt>touch /usr/share/icons/hicolor</tt> and <tt>touch [the respective .desktop file]</tt> nudged her to see new icons.</p>