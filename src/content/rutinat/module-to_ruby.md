---
title: Module.to_ruby
radiant_id: 47
radiant_slug: module-to_ruby
breadcrumb: Module.to_ruby
created_at: 2010-03-03 23:06:52
updated_at: 2010-03-03 23:06:53
published_at: 2010-03-04 01:06:53programming,Ruby on Rails,Ruby
comments:
---
<p>When debugging <a href="http://api.rubyonrails.org/files/vendor/rails/activerecord/README.html">ActiveRecord</a> metaprogramming magic <a href="http://gilesbowkett.blogspot.com/2008/02/activerecord-ruby2ruby-this-is-where.html">it used to be handy to <code>Ruby2Ruby.translate(ConvolutedModel)</code></a>.  For some reason that method was removed from <a href="http://seattlerb.rubyforge.org/ruby2ruby/">ruby2ruby</a> on 1.2.3 release.  That gave me the required kick to fix my irb environment.</p>

<script src="http://gist.github.com/321038.js?file=module_to_ruby.rb"></script>