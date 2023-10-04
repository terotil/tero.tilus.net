---
title: "Cucumber running Selenium on Debian Lenny"
radiant_id: 38
radiant_slug: cucumber-running-selenium-on-debian-lenny
breadcrumb: "Cucumber running Selenium on Debian Lenny"
created_at: 2009-08-18T13:10:00.000Z
updated_at: 2009-08-18T13:17:10.000Z
published_at: 2009-08-18T16:10:00.000Z
tags: ["programming","Cucumber","Selenium"]
comments:
---
<p>I&#8217;ve been working with working with <a href="http://rspec.info/">RSpec</a> and <a href="http://cukes.info/">Cucumber</a> on <a href="http://rubyonrails.org/">Ruby on Rails</a> for a while.  I haven&#8217;t yet done any in browser testing but now I need to (need to automate a testsuite of non-RoR legacy webapp) and I like the idea of writing Cucumber scenarios for in browser tests too.  I decided to give <a href="http://seleniumhq.org/">Selenium</a> a try.</p>
<p>When I started my journey <a href="http://wiki.github.com/aslakhellesoy/cucumber/setting-up-selenium">the instructions on Cucumber wiki</a> were marked &#8220;outdated&#8221;.  I&#8217;ll try to document what I needed to do and improve the wiki.  This story applies to Debian Lenny, ruby 1.8.7 (2008-08-11 patchlevel 72) from Lenny packages, rubygems 1.3.1 from upstream source, rake 0.8.4 from gems and cucumber 0.3.96 from gems.</p>
<p>First I went to <a href="http://seleniumhq.org/download/">download Selenium remote control</a> and unpacked the zip.</p>
<pre><code>$ unzip selenium-remote-control-1.0.1-dist.zip</code></pre>
<p>Package contained selenium client for ruby, but I decided to follow the recommendation in <span class="caps">README</span> and install from gems.</p>
<pre><code>$ sudo gem install selenium-client</code></pre>
<p>The moment of truth&#8230;</p>
<pre><code>$ cd selenium-remote-control-1.0.1/selenium-server-1.0.1
$ java -jar selenium-server.jar</code></pre>
<p>Selenium server was up and running.  Then try to get some smoke out of Cucumber+Selenium examples.</p>
<pre><code>$ cucumber /usr/lib/ruby/gems/1.8/gems/cucumber-0.3.96/examples/selenium/features/</code></pre>
<p>Selenium server blew up complainig <a href="http://clearspace.openqa.org/thread/14502"><code>ERROR - Failed to start new browser session, shutdown browser and clear all session data java.lang.IllegalArgumentException: URI "file:selenium-server.jar" is not hierarchical</code>&#8220;.  Turned out &#8220;it was about Java implementation</a>.  Talk about Java being cross-platform and stuff&#8230;  Fine, easy one to fix.</p>
<pre><code>$ sudo apt-get install sun-java6-jdk
$ sudo update-java-alternatives -s java-6-sun</code></pre>
<p>Also Selenium server wanted to run Firefox binary (not the usual wrapper script) so I symlinked <tt>firefox-bin</tt> to <tt>/usr/local</tt>.  The next complaint was</p>
<pre><code>16:56:45.741 INFO - Preparing Firefox profile...
Could not read application.ini
16:57:05.757 ERROR - Failed to start new browser session, shutdown browser and clear all session data
java.lang.RuntimeException: Timed out waiting for profile to be created!
</code></pre>
<p>I spent quite a few hours trying to find out what was going on until I tried to run firefox-bin myself.  It turned out that FF expects to find <tt>application.ini</tt> from the same dir the binary is in. On Linux there&#8217;s no direct way of finding out the path of the running binary. What FF does (if <code>dirname(argv[0])</code> doesn&#8217;t work) is to manually walk thru <tt>$<span class="caps">PATH</span></tt>. Path of the real binary wasn&#8217;t on <tt>$<span class="caps">PATH</span></tt> (because I symlinked it there), FF couldn&#8217;t find <tt>application.ini</tt> and died.</p>
<p>Instead of symlink I just added FF dir (it&#8217;s the dir you have <tt>firefox-bin</tt> in, <tt>/usr/lib/iceweasel</tt> on Debian) to <tt>$<span class="caps">PATH</span></tt> and it worked.</p>