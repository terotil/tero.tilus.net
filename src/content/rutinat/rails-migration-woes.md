---
title: Rails migration woes
radiant_id: 20
radiant_slug: rails-migration-woes
breadcrumb: Rails migration woes
created_at: 2008-10-10 14:52:20
updated_at: 2009-08-16 09:33:11
published_at: 2008-10-10 17:52:48programming,Ruby on Rails
comments:
-
  author: JD
  content: "Don't think it is such a widespread habit.  People use db/seeds.rb and accompanying rake tasks.  They should be mentioned in rails guides though.\r\n\r\nAnd the \"downside\".  I've never used or written downs myself.  Dunno really what is the use case."
  filter_id: Textile
  content_html: "<p>Don&#39;t think it is such a widespread habit.  People use db/seeds.rb and accompanying rake tasks.  They should be mentioned in rails guides though.</p>\n<p>And the &quot;downside&quot;.  I&#39;ve never used or written downs myself.  Dunno really what is the use case.</p>"
  created_at: 2010-12-21 06:51:40
---
<p>Who would tell me what&#8217;s the exact intended purpose of (insert your favorite <span class="caps">MVC</span> webapp framework here<sup class="footnote" id="fnr1"><a href="#fn1">1</a></sup>) migrations.  Yes, I know, using migrations you are supposed to maintain your schema and drag your production data with you as your app evolves.  And yes, I know, you can do all kinds of fancy maintenance and data refactoring things in there too.</p>
<p class="footnote" id="fn1"><a href="#fnr1"><sup>1</sup></a> I&#8217;m looking this mess from <a href="http://www.rubyonrails.org/">Rails</a> perspective.</p>
<p>There are quite a few things that puzzle me with this, but the seemingly very common habit of writing Rails app bootstrapper in migrations bugs me the most. (For now.)  People do it (a lot) even though it&#8217;s got several downsides.</p>
<ul>
	<li>Bootstrapping the application becomes heavi&#8230; no, not heavily, <em>totally</em> coupled with the whole history of your schema manipulations.  Bootstrapping process, instead of just sticking to what it really needs to do, ends up making a pilgrim through every step of evolution from simple <a href="http://en.wikipedia.org/wiki/Amino_acid">amino acids</a> to <a href="http://www.soininvaara.fi/">Osmo Soininvaara</a>.</li>
	<li>If you take the migrations strictly as schema migrations, they are inheretly run-once-code.  If you use your models in migrations (which you most probably are going to do in your bootstrapping code and if you bootstrap with migrations&#8230;)  and your application evolves you are sooner or later going to break you migrations or be bound to do serious hoop-jumping to keep them from not breaking. But why on earth do you even care to maintain run-once-code?  I think you shoud not.</li>
</ul>
<p>Another thing is the &#8220;downside&#8221; of a migration.  Have you ever written a <code>#down()</code> for a non-trivial schema or data manipulation?  Or have you ever even used a <code>#down()</code>?  And what are they good for?  If I want a safe (or heck, <em>any</em>) downgrade path for data, it&#8217;s a database dump and certainly not some snippet of code that might reverse the migration (or might not).</p>
<p>Now (and it may change any minute&#8230;) I think the Right&#8482; way to go would be to maintain schema, bootstrapper and migrations separately. Schema would be the up-to-date and no-bullshit description of your<br />
datastructures.  Most frameworks maintain schema automatically for you when you create migrations.  Bootstrapper would use schema description, application code and supporting dataset to bootstrap app. Migrations would be strictly for migrating schema and production data. And you should keep yourself from using app code in migrations.</p>