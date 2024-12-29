---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: "Agr Reader"
  text: Material3. Concise. Graceful. RSS Reader
  tagline: A minimalist and elegant Material3 You style RSS reader
  image:
    src: /logo.png
    alt: Agr Reader
  actions:
    - theme: google
      text: '中国用户可以前往此处下载'
      link: https://play.google.com/store/apps/details?id=com.lowae.agrreader
    - theme: alt
      text: Navigation
      link: /navigation/index

features:
  - icon: 🎨
    title: Elegant Material3 Design with Customizable Themes
    details: Fully compliant with Material3 guidelines, providing a visually consistent experience with customizable theme colors.
  - icon: 👍
    title: Powerful Full-text Parsing
    details: Most pages support full-text parsing and offline reading by default, offering a clean and distraction-free reading experience.
  - icon: 📱
    title: Convenient Home Screen Widgets
    details: Instantly access the latest articles from your feeds directly from the home screen, ensuring you never miss an update.
  - icon: 🛠️
    title: Rich Customization Options
    details: Configure reading page text styles, mark all as read, scroll marking options, and more for a tailored reading experience.
  - icon: 👏
    title: Supports Various RSS Services
    details: Compatible with popular self-hosted services such as FreshRSS, Tiny Tiny RSS, Miniflux, The Old Reader, and more, including Google Reader API and Fever API.
  - icon: 🔠
    title: Immersive Translation Features
    details: Enjoy automatic translation of titles in lists and immersive translation of article content, making it easy to read foreign-language RSS articles without language barriers.
  - icon: 🖥️
    title: Widescreen Mode
    details: Take full advantage of your tablet or large-screen device with a side-by-side display of article lists and reading views, allowing you to browse, read, and switch between stories seamlessly.\
  - icon: ☁️
    title: WebDAV Backup
    details: Support WebDAV Backup&Restore to prevent data loss due to unexpected situations.
---

## Screenshots
<div class="horizontal-scroll">
  <img src="/screenshots/en/1.webp" alt="Elegant Material3 Design with Customizable Themes" data-zoomable class="image_screenshot medium-zoom-image">
  <img src="/screenshots/en/2.webp" alt="Powerful Full-text Parsing" data-zoomable class="image_screenshot medium-zoom-image">
  <img src="/screenshots/en/3.webp" alt="Convenient Home Screen Widgets" data-zoomable class="image_screenshot medium-zoom-image">
  <img src="/screenshots/en/4.webp" alt="Extensive Customizable Reading Styles" data-zoomable class="image_screenshot medium-zoom-image">
  <img src="/screenshots/en/5.webp" alt="Supports Various RSS Services" data-zoomable class="image_screenshot medium-zoom-image">
  <img src="/screenshots/en/6.webp" alt="Immersive Translation Features" data-zoomable class="image_screenshot medium-zoom-image">
  <img src="/screenshots/en/7.webp" alt="Widescreen Mode" data-zoomable class="image_screenshot medium-zoom-image">
</div>

## RSSHub <Badge type="tip" text="Self-Hosted" />
The detailed content can be viewed.👉[Agr Reader's RSSHub](/navigation/#agr-reader-s-rsshub)
<div style="padding: 20px; border-radius: 10px; display: flex; flex-direction: column; align-items: center; background-color: var(--vp-c-bg-soft); box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
  <img src="/images/rsshub-logo.webp" alt="RSSHub" width="100" loading="lazy" style="margin-bottom: 20px;"/>
  <h1 style="margin-bottom: 20px; text-align: center;">Welcome to <span style="color:var(--vp-c-brand-1);"><a href="https://rsshub.agrreader.xyz/">Agr Reader's</a></span> <span style="color: #FF5722; ">RSSHub</span>!</h1>
  <button 
    onclick="window.location.href='https://rsshub.agrreader.xyz/';" 
    style="
      background-color: #FF5722; 
      color: white; 
      padding: 10px 40px; 
      border-radius: 20px; 
      cursor: pointer; 
      font-size: 16px; 
      transition: background-color 0.3s ease, transform 0.2s ease;
      "
      onmouseover="this.style.backgroundColor='#E64A19'; this.style.transform='scale(1.05)';"
      onmouseout="this.style.backgroundColor='#FF5722'; this.style.transform='scale(1)';"
      onmousedown="this.style.transform='scale(1.02)';"
      onmouseup="this.style.transform='scale(1.05)';"
      >
    GO!
  </button>
</div>

## Questions
::: details What is RSS?
RSS, short for Really Simple Syndication, is a format used for subscribing to and distributing website content. Through RSS, websites can provide structured information such as article titles, summaries, and full texts. Users can subscribe to a website’s RSS link and view updates from multiple sites in one RSS reader.

In short, RSS allows users to see the latest content from multiple sources in one place without visiting each site individually. This approach provides higher efficiency and greater autonomy in content consumption, avoiding the randomness and overload of algorithm-driven recommendations.
:::

::: details Why Choose RSS?
In the age of information overload, social media and content aggregation tools use algorithms to recommend a large amount of content that may interest us but can also lead to information overload and narrow the types of information we encounter.

RSS (Really Simple Syndication) offers a solution. It allows us to independently choose and subscribe to information sources without algorithm interference, displaying content in chronological order. This way, we can effectively control the information we receive, avoiding information overload.

Although RSS has a higher learning curve, its reliability—like a diligent student who completes tasks on time—allows us to efficiently obtain the information we need, making it an ideal tool for managing modern information excess.
:::
::: details How Do I Find RSS Feeds?
Visit: https://www.agrreader.xyz/navigation/
:::