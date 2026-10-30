# Kế hoạch xây dựng Portfolio cá nhân trên GitHub Pages

> **Mục tiêu:** Xây dựng một website portfolio cá nhân mang phong cách
> công nghệ tương lai, hiện đại, giàu hiệu ứng thị giác, thể hiện năng
> lực về IT / AI / Software Engineering. Website triển khai miễn phí
> trên GitHub Pages, nội dung bài viết được quản lý bằng Git và
> Markdown, không cần backend hoặc cơ sở dữ liệu.

------------------------------------------------------------------------

## 1. Tầm nhìn sản phẩm

Website nên tạo cảm giác như một **personal tech universe**: giao diện
tối, chiều sâu không gian, ánh sáng neon có kiểm soát, typography hiện
đại, chuyển động mượt và các chi tiết tương tác tinh tế.

Tuy nhiên, hiệu ứng phải phục vụ nội dung và thương hiệu cá nhân, không
làm website nặng hoặc khó đọc. Ưu tiên:

-   Ấn tượng ngay ở màn hình đầu tiên (hero section).
-   Thể hiện rõ bạn là ai, làm gì, có kỹ năng và dự án nào.
-   Có khu vực blog để đăng bài chỉ bằng cách thêm file Markdown và push
    Git.
-   Responsive tốt trên desktop, tablet và mobile.
-   Tối ưu SEO, tốc độ tải, khả năng truy cập và trải nghiệm bàn phím.
-   Dễ bảo trì, dễ mở rộng bởi AI coding agents.

## 2. Cấu trúc website đề xuất

Đề xuất **6 trang chính**:

  -----------------------------------------------------------------------
  Trang                   Đường dẫn               Vai trò
  ----------------------- ----------------------- -----------------------
  Home                    `/`                     Giới thiệu nhanh, điểm
                                                  nhấn, kỹ năng, dự án
                                                  nổi bật và lời kêu gọi
                                                  liên hệ

  About                   `/about/`               Hồ sơ cá nhân, hành
                                                  trình, định hướng, giá
                                                  trị và timeline

  Posts                   `/posts/`               Danh sách bài viết, tìm
                                                  kiếm, lọc theo tag và
                                                  phân trang nếu cần

  Projects                `/projects/`            Showcase sản phẩm, dự
                                                  án cá nhân, mã nguồn và
                                                  công nghệ sử dụng

  Lab                     `/lab/`                 Khu thử nghiệm AI / UI
                                                  / creative coding, demo
                                                  tương tác và ý tưởng
                                                  đang nghiên cứu

  Contact                 `/contact/`             Email, mạng xã hội,
                                                  GitHub, LinkedIn và
                                                  biểu mẫu liên hệ dạng
                                                  liên kết bên ngoài
  -----------------------------------------------------------------------

### 2.1. Home

Các section nên có:

1.  **Hero / Intro**
    -   Tên hoặc nickname, vai trò (ví dụ: AI Engineer / Software
        Developer).
    -   Một câu tagline ngắn, có cá tính.
    -   CTA: `Explore Projects`, `Read Articles`, `Contact Me`.
    -   Nền không gian số: gradient tối, grid perspective, hạt sáng hoặc
        aurora chuyển động.
    -   Có thể thêm avatar/ảnh chân dung hoặc abstract 3D visual.
2.  **About snapshot**
    -   Giới thiệu 2--3 câu.
    -   Link sang trang About.
3.  **Tech stack**
    -   Nhóm kỹ năng theo Frontend, Backend, AI/ML, DevOps, Tools.
    -   Không dùng thanh phần trăm kỹ năng thiếu căn cứ; ưu tiên tag
        hoặc nhóm công nghệ.
4.  **Featured projects**
    -   2--3 dự án nổi bật lấy từ dữ liệu dự án dùng chung.
5.  **Latest posts**
    -   Hiển thị 3 bài mới nhất tự động lấy từ Markdown.
6.  **Contact CTA**
    -   Một lời mời hợp tác và các liên kết liên hệ.

### 2.2. About

-   Bio ngắn và ảnh đại diện.
-   Hành trình học tập / nghề nghiệp dạng timeline.
-   Triết lý làm việc và lĩnh vực quan tâm.
-   Kỹ năng và công nghệ.
-   CV: liên kết tới file PDF trong thư mục `public/` nếu có.
-   Các liên kết cá nhân.

### 2.3. Posts

-   Danh sách bài viết theo thời gian mới nhất.
-   Mỗi bài có tiêu đề, mô tả, ngày đăng, thời gian đọc, tag và ảnh
    cover tùy chọn.
-   Tìm kiếm phía client.
-   Lọc theo tag.
-   Trang chi tiết bài viết với mục lục (TOC), heading rõ ràng, code
    highlight, nút copy code và bài liên quan.
-   Có RSS feed nếu phù hợp với cấu hình build.

### 2.4. Projects

-   Card dự án có ảnh/thumbnail, mô tả, trạng thái, công nghệ, GitHub
    URL và Live Demo URL.
-   Có thể lọc theo nhóm: AI, Web, Tooling, Open Source.
-   Trang chi tiết dự án là tùy chọn; giai đoạn đầu có thể dùng modal
    hoặc liên kết ngoài.

### 2.5. Lab

Đây là khu vực tạo nét khác biệt cho portfolio:

-   Các mini experiment: AI concept, visual effects, canvas, CSS
    experiments, UI prototypes.
-   Mỗi experiment có mô tả, trạng thái `Experimental`, `In Progress`
    hoặc `Completed`.
-   Chỉ triển khai demo nhẹ, không nhúng mô hình AI nặng trực tiếp vào
    GitHub Pages.
-   Nếu demo cần API key hoặc backend, dùng dịch vụ riêng; tuyệt đối
    không để secret trong mã frontend.

### 2.6. Contact

-   Email dạng `mailto:`.
-   GitHub, LinkedIn và các nền tảng khác.
-   Có thể dùng dịch vụ form bên thứ ba nếu thật sự cần form gửi tin
    nhắn. GitHub Pages không chạy backend xử lý form.
-   Không hiển thị thông tin cá nhân nhạy cảm.

------------------------------------------------------------------------

## 3. Định hướng giao diện và hiệu ứng

### 3.1. Art direction

**Phong cách:** Futuristic / Cyber-tech / AI lab / Digital minimalism.

Bảng màu tham khảo (có thể tinh chỉnh):

-   Background chính: `#070B14` hoặc `#080A12`.
-   Surface/card: `#101827`.
-   Text chính: `#F3F6FC`.
-   Text phụ: `#9AA8BC`.
-   Accent cyan: `#45E6FF`.
-   Accent violet: `#9B7BFF`.
-   Accent blue: `#5B8CFF`.

Dùng cyan/violet làm điểm nhấn, không phủ neon lên mọi thành phần. Đảm
bảo độ tương phản văn bản.

### 3.2. Hiệu ứng đề xuất

Ưu tiên CSS và SVG; chỉ dùng canvas/WebGL khi thực sự có giá trị.

-   **Animated grid:** lưới phối cảnh chuyển động chậm ở hero.
-   **Aurora / gradient glow:** các vùng sáng mờ chuyển động phía nền.
-   **Particle field:** hạt sáng nhẹ, giới hạn số lượng và tắt trên
    thiết bị yếu nếu cần.
-   **Glass panels:** card có nền bán trong suốt, border mảnh và blur
    vừa phải.
-   **Cursor spotlight:** vùng sáng theo con trỏ trên desktop; tắt trên
    touch device.
-   **Scroll reveal:** nội dung xuất hiện nhẹ khi cuộn, không làm ẩn nội
    dung nếu JavaScript lỗi.
-   **Micro-interactions:** hover lift, underline animation, icon
    movement, button glow.
-   **Code / terminal motif:** chi tiết trang trí nhỏ gợi không khí
    developer.
-   **Page transition:** chỉ thêm nếu không ảnh hưởng điều hướng, SEO và
    accessibility.

Không nên bật đồng thời quá nhiều animation. Chuyển động nền cần chậm,
tinh tế, không gây mất tập trung.

### 3.3. Quy tắc UX và accessibility

-   Hỗ trợ `prefers-reduced-motion`; khi người dùng yêu cầu giảm chuyển
    động, tắt particle, parallax và animation không cần thiết.
-   Không dùng hiệu ứng nhấp nháy nhanh.
-   Mọi chức năng phải dùng được bằng bàn phím.
-   Có focus state dễ nhìn.
-   Không dùng màu sắc làm tín hiệu duy nhất.
-   Nội dung chính phải đọc được khi animation không chạy.
-   Trên mobile, giảm hoặc tắt hiệu ứng tốn tài nguyên.
-   Có trạng thái loading / empty / not-found phù hợp.

------------------------------------------------------------------------

## 4. Công nghệ và kiến trúc kỹ thuật

### Stack khuyến nghị

  -----------------------------------------------------------------------
  Thành phần              Lựa chọn                Lý do
  ----------------------- ----------------------- -----------------------
  Framework               Astro                   Sinh static site nhanh,
                                                  phù hợp blog và GitHub
                                                  Pages

  UI                      Astro components +      Component hóa, type
                          TypeScript              safety, JavaScript chỉ
                                                  tải khi cần

  Styling                 CSS Modules hoặc global Chủ động thiết kế, nhẹ,
                          CSS + CSS variables     dễ kiểm soát hiệu ứng

  Content                 Markdown / MDX          Viết bài trực tiếp
                                                  trong Git

  Content schema          Astro Content           Kiểm tra frontmatter và
                          Collections             quản lý nội dung có cấu
                                                  trúc

  Icons                   Lucide hoặc SVG tự quản Đồng nhất, nhẹ
                          lý                      

  Animation               CSS +                   Tránh phụ thuộc nặng
                          IntersectionObserver;   
                          thư viện chỉ khi cần    

  Hosting                 GitHub Pages            Hosting static miễn phí

  CI/CD                   GitHub Actions          Tự động build và deploy
                                                  khi push
  -----------------------------------------------------------------------

**Không cần backend** cho phiên bản đầu. Website là static site; nội
dung được tạo tại thời điểm build.

### Lưu ý GitHub Pages

-   Cấu hình `site` và `base` trong `astro.config.mjs` chính xác theo
    loại URL.
-   Nếu dùng project repository, base path thường là
    `/<repository-name>/`; nếu dùng user/organization site dạng
    `<username>.github.io`, base path thường là `/`.
-   Dùng helper URL của Astro (`BASE_URL` / `import.meta.env.BASE_URL`)
    cho asset và internal links để tránh lỗi đường dẫn khi deploy dưới
    subpath.
-   Thiết lập GitHub Actions để build và deploy thư mục output (`dist`).
-   Không dùng server-side rendering hoặc API route cần server trên
    GitHub Pages.
-   Kiểm tra trực tiếp các URL khi deploy, đặc biệt ảnh, CSS, favicon và
    đường dẫn bài viết.

### Cấu trúc thư mục đề xuất

``` text
portfolio/
├── public/
│   ├── favicon.svg
│   ├── images/
│   ├── fonts/
│   └── files/
│       └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   ├── Hero.astro
│   │   ├── ProjectCard.astro
│   │   ├── PostCard.astro
│   │   ├── TagList.astro
│   │   ├── TableOfContents.astro
│   │   └── effects/
│   │       ├── AnimatedGrid.astro
│   │       ├── AuroraBackground.astro
│   │       └── ParticleField.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── posts/
│   │   │   └── welcome.md
│   │   ├── projects/
│   │   │   └── example-project.md
│   │   └── experiments/
│   │       └── first-experiment.md
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── posts/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── projects.astro
│   │   ├── lab.astro
│   │   ├── contact.astro
│   │   └── 404.astro
│   └── styles/
│       ├── global.css
│       ├── tokens.css
│       └── animations.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

Agent có thể điều chỉnh cấu trúc theo phiên bản Astro hiện hành, nhưng
cần giữ nguyên nguyên tắc tách components, layouts, pages, content và
styles.

------------------------------------------------------------------------

## 5. Cách đăng bài viết bằng Git

Đây là yêu cầu quan trọng: **không cần trang admin**. Mỗi bài viết là
một file Markdown trong `src/content/posts/`.

### 5.1. Ví dụ file bài viết

Tạo file `src/content/posts/hello-ai-world.md`:

``` md
---
title: "Hello AI World"
description: "Những ghi chú đầu tiên về hành trình khám phá AI."
pubDate: 2026-10-30
updatedDate: 2026-10-30
tags:
  - AI
  - Technology
  - Learning
draft: false
cover: "/images/posts/hello-ai-world.webp"
---

# Hello AI World

Đây là nội dung bài viết.

## Vì sao tôi quan tâm đến AI?

Viết nội dung tại đây bằng Markdown.

## Một đoạn code mẫu

```ts
const message = "Hello, AI World!";
console.log(message);
```


    ### 5.2. Quy trình xuất bản

    ```bash
    # 1. Lấy code mới nhất
    git pull

    # 2. Tạo file bài viết mới trong src/content/posts/
    # Ví dụ: src/content/posts/my-new-post.md

    # 3. Xem thử website ở local
    npm run dev

    # 4. Kiểm tra bản build
    npm run build

    # 5. Commit và push
    git add .
    git commit -m "content: add my new post"
    git push

Sau khi push lên branch được cấu hình, GitHub Actions tự build và
deploy. Bài viết sẽ xuất hiện sau khi workflow hoàn tất.

### 5.3. Quy tắc nội dung

-   `title`: bắt buộc.
-   `description`: bắt buộc, dùng cho SEO và preview.
-   `pubDate`: bắt buộc.
-   `updatedDate`: tùy chọn.
-   `tags`: mảng tag.
-   `draft`: `true` thì không xuất bản; `false` thì được xuất bản.
-   `cover`: tùy chọn, đường dẫn ảnh cover.
-   Slug mặc định lấy từ tên file; dùng tên file không dấu, chữ thường,
    phân tách bằng dấu gạch ngang.
-   Tạo schema để validate frontmatter; build phải báo lỗi rõ ràng nếu
    dữ liệu sai.
-   Không đưa secret, API key hoặc dữ liệu riêng tư vào Markdown.

------------------------------------------------------------------------

## 6. Chức năng chi tiết và yêu cầu triển khai

### Điều hướng

-   Header có logo/wordmark và menu Home, About, Posts, Projects, Lab,
    Contact.
-   Active state cho trang hiện tại.
-   Mobile navigation dạng menu gọn, hỗ trợ bàn phím.
-   Header có thể sticky nhưng không che nội dung khi anchor scroll.

### Posts

-   Sắp xếp mới nhất trước.
-   Tìm kiếm theo title, description và tags.
-   Tag filter.
-   Trang chi tiết có reading time, ngày đăng, TOC, code blocks và link
    bài trước/sau nếu phù hợp.
-   Draft không xuất hiện trong production.
-   Có empty state khi chưa có bài.

### Projects và Lab

-   Dữ liệu được quản lý bằng Markdown hoặc TypeScript data file có
    schema rõ ràng.
-   Không hard-code cùng một nội dung ở nhiều nơi.
-   Link ngoài mở an toàn với `rel="noopener noreferrer"` khi mở tab
    mới.

### SEO và chia sẻ

-   Mỗi trang có title và meta description riêng.
-   Open Graph và Twitter/X card metadata.
-   Canonical URL.
-   Sitemap và robots.txt.
-   Semantic HTML, heading hierarchy hợp lý.
-   Favicon và theme color.
-   RSS cho Posts nếu triển khai được ổn định.

### Performance

-   Ưu tiên static rendering.
-   Tối ưu ảnh (kích thước phù hợp, định dạng WebP/AVIF khi có thể).
-   Lazy-load ảnh ngoài màn hình đầu.
-   Hạn chế font weights và thư viện bên thứ ba.
-   Không tải Three.js/WebGL chỉ để trang trí nếu CSS/SVG đã đủ.
-   Tránh layout shift; khai báo width/height hoặc aspect ratio cho ảnh.
-   Hiệu ứng nền không được chặn tương tác hoặc làm giảm khả năng đọc.

------------------------------------------------------------------------

## 7. Nội dung cần cá nhân hóa trước khi public

Dùng các placeholder sau trong giai đoạn phát triển, sau đó thay bằng
thông tin thật:

-   `[YOUR_NAME]`: tên hiển thị.
-   `[YOUR_ROLE]`: vai trò chuyên môn.
-   `[YOUR_TAGLINE]`: câu giới thiệu ngắn.
-   `[YOUR_BIO]`: giới thiệu bản thân.
-   `[YOUR_EMAIL]`: email công khai.
-   `[GITHUB_URL]`: GitHub.
-   `[LINKEDIN_URL]`: LinkedIn.
-   `[RESUME_URL]`: CV nếu có.
-   `[AVATAR_PATH]`: ảnh đại diện.
-   `[PROJECTS]`: danh sách dự án thật.

Không tự bịa kinh nghiệm, chứng chỉ, khách hàng, số liệu thành tích hoặc
dự án của chủ website. Nếu chưa có dữ liệu, dùng placeholder dễ nhận
biết hoặc ẩn section đó.

------------------------------------------------------------------------

## 8. Lộ trình triển khai

### Phase 1 --- Foundation

-   Khởi tạo Astro + TypeScript.
-   Cấu hình GitHub Pages và GitHub Actions.
-   Tạo BaseLayout, design tokens, global styles.
-   Tạo Header, Footer và responsive navigation.
-   Tạo route cho đủ 6 trang.

**Kết quả:** website chạy local và deploy được bản skeleton lên GitHub
Pages.

### Phase 2 --- Visual identity

-   Xây dựng hero section.
-   Thiết kế nền futuristic.
-   Thêm typography, màu sắc, card, button và icon system.
-   Thêm animation có kiểm soát.
-   Hoàn thiện mobile layout và reduced-motion.

**Kết quả:** giao diện đồng nhất, nổi bật và responsive.

### Phase 3 --- Content system

-   Cấu hình Content Collections cho posts, projects, experiments.
-   Tạo schema frontmatter.
-   Tạo danh sách bài viết và trang chi tiết.
-   Thêm tag filter, tìm kiếm và TOC.
-   Thêm bài mẫu để kiểm thử.

**Kết quả:** có thể xuất bản bài viết bằng Git.

### Phase 4 --- Portfolio content

-   Hoàn thiện About, Projects, Lab, Contact.
-   Thêm dữ liệu cá nhân thật.
-   Bổ sung ảnh, CV và liên kết.
-   Kiểm tra mọi CTA và external links.

**Kết quả:** portfolio có nội dung hoàn chỉnh.

### Phase 5 --- Quality & launch

-   Kiểm tra build, link, ảnh và base path.
-   Kiểm tra responsive trên các kích thước màn hình.
-   Kiểm tra keyboard navigation và reduced-motion.
-   Kiểm tra SEO metadata, sitemap, 404.
-   Tối ưu performance và sửa lỗi.
-   Viết README hướng dẫn đăng bài và deploy.

**Kết quả:** website sẵn sàng public.

------------------------------------------------------------------------

## 9. Tiêu chí nghiệm thu (Definition of Done)

-   [ ] Website deploy thành công trên GitHub Pages bằng GitHub Actions.
-   [ ] Có đủ 6 trang: Home, About, Posts, Projects, Lab, Contact.
-   [ ] Tất cả route và asset hoạt động đúng cả khi deploy bằng project
    repository subpath.
-   [ ] Responsive trên mobile, tablet và desktop.
-   [ ] Visual style futuristic, nhất quán, có điểm nhấn nhưng không gây
    rối.
-   [ ] Animation có fallback và tôn trọng `prefers-reduced-motion`.
-   [ ] Có thể thêm bài bằng file Markdown + Git push, không cần sửa
    code giao diện.
-   [ ] Draft không xuất hiện trên production.
-   [ ] Trang Posts có tìm kiếm và lọc tag.
-   [ ] Trang bài viết có metadata, TOC (nếu bài đủ dài) và code
    highlight.
-   [ ] SEO metadata, Open Graph, sitemap, robots.txt và 404 hoạt động.
-   [ ] Không có API key/secret trong source frontend.
-   [ ] `npm run build` chạy thành công.
-   [ ] README mô tả rõ cách chạy local, thêm bài, thêm project và
    deploy.

------------------------------------------------------------------------

## 10. Chỉ dẫn trực tiếp cho AI Coding Agent

Hãy triển khai dự án theo tài liệu này. Làm việc như một senior frontend
engineer kiêm UI designer.

### Nguyên tắc bắt buộc

1.  Trước tiên kiểm tra repository hiện tại. Nếu đã có code, đọc và tận
    dụng cấu trúc hợp lý; không xóa hoặc ghi đè tùy tiện.
2.  Nếu repository trống, khởi tạo Astro + TypeScript theo cấu hình phù
    hợp với GitHub Pages.
3.  Triển khai từng phase theo thứ tự; sau mỗi phase chạy build hoặc
    kiểm tra tương ứng.
4.  Không chỉ tạo mockup tĩnh cho Home. Phải tạo đầy đủ các route và
    luồng nội dung hoạt động.
5.  Dùng Astro Content Collections (hoặc cơ chế content tương đương được
    validate) để quản lý Markdown posts.
6.  Tách component hợp lý, tránh một file page khổng lồ.
7.  Tạo design system bằng CSS variables; giữ màu sắc, spacing, radius,
    typography và motion nhất quán.
8.  Tự thiết kế giao diện có bản sắc, không sao chép nguyên mẫu của
    website khác.
9.  Ưu tiên CSS/SVG cho hiệu ứng; chỉ thêm dependency khi có lý do rõ
    ràng.
10. Không thêm chức năng backend không tương thích GitHub Pages.
11. Không tự tạo dữ liệu cá nhân giả. Dùng placeholder rõ ràng cho thông
    tin chưa được cung cấp.
12. Không để các nút, menu hoặc CTA chỉ mang tính trang trí; mọi control
    phải có hành vi hợp lý.
13. Kiểm tra đường dẫn khi deploy ở root và project subpath.
14. Tạo README tiếng Việt hướng dẫn sử dụng, nhất là cách đăng bài qua
    Git.
15. Khi hoàn tất, báo cáo những gì đã xây dựng, lệnh kiểm tra đã chạy,
    cách deploy và những placeholder chủ website cần thay.

### Thứ tự ưu tiên

-   **P0:** Build/deploy được; route hoạt động; responsive; đăng bài
    Markdown bằng Git.
-   **P1:** Thiết kế futuristic chất lượng cao; Projects; About;
    Contact; SEO.
-   **P2:** Lab experiments; search nâng cao; RSS; page transitions và
    hiệu ứng nâng cao.

Không hy sinh P0 để chạy theo hiệu ứng. Nếu phải lựa chọn, ưu tiên
website ổn định, nhanh, dễ đọc và dễ cập nhật.

------------------------------------------------------------------------

## 11. Lệnh và quy trình sử dụng nhanh

Sau khi Agent tạo dự án:

``` bash
npm install
npm run dev
npm run build
```

Đăng bài mới:

1.  Tạo file `src/content/posts/ten-bai-viet.md`.
2.  Điền frontmatter và nội dung Markdown.
3.  Chạy `npm run build` để kiểm tra.
4.  Commit và push lên GitHub.
5.  Chờ GitHub Actions hoàn tất deploy.

**Gợi ý:** Đặt file này ở root repository với tên `PORTFOLIO_PLAN.md`,
sau đó yêu cầu coding agent đọc toàn bộ file trước khi bắt đầu triển
khai.
