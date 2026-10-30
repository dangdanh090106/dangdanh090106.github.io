# Đặng Danh - Cyber-Tech Personal Portfolio & Tech Universe

Website Portfolio & Blog cá nhân mang phong cách công nghệ tương lai (Futuristic / Cyber-Tech), tối ưu hóa hiệu năng tối đa (Zero JS by default), xuất bản hoàn toàn tự động trên **GitHub Pages** thông qua **GitHub Actions** và quản lý nội dung bằng **Git + Markdown**.

🌐 **Live URL:** [https://dangdanh090106.github.io](https://dangdanh090106.github.io)

---

## 🚀 Tính năng nổi bật

- **⚡ Siêu nhanh & Nhẹ:** Xây dựng trên nền tảng **Astro 5** kết hợp kiến trúc Islands, sinh static HTML 100% tại thời điểm build.
- **🎨 Phong cách Futuristic & Cyber-Tech:** Bảng màu tối sâu (`#070B14`), hiệu ứng lưới viễn cảnh 3D (Perspective Grid), ánh sáng cực quang (Aurora Glow), mạng lưới hạt nano (Particle Canvas) và con trỏ Spotlight tương tác mượt mà.
- **📝 Đăng bài viết bằng Git (Zero CMS / No Database):** Không cần đăng nhập admin, không cần cơ sở dữ liệu. Chỉ cần thêm file Markdown và gõ lệnh `git push`.
- **🔍 Tìm kiếm & Lọc thẻ bài viết:** Bộ lọc tag và thanh tìm kiếm thời gian thực phía client.
- **📑 Trang bài viết chuẩn kỹ thuật:** Hỗ trợ Mục lục tự động (TOC), nút sao chép code một chạm (Copy Code Block), syntax highlighting chuẩn GitHub Dark.
- **🧪 AI & Creative Lab:** Khu thử nghiệm tương tác với canvas mô phỏng ma trận dữ liệu nhị phân (Matrix Rain) và công cụ tính toán dung lượng LLM Token / chi phí inference.
- **📱 100% Responsive & Tiếp cận (Accessibility):** Tương thích hoàn hảo trên Desktop, Tablet, Mobile và tự động tắt chuyển động khi người dùng bật chế độ `prefers-reduced-motion`.
- **📡 Tối ưu SEO, Sitemap & RSS:** Tự động tạo `sitemap-index.xml`, `robots.txt`, thẻ Open Graph / Twitter Card và kênh cấp tin `/rss.xml`.

---

## 🛠️ Cấu trúc thư mục

```text
dangdanh090106.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Pipeline CI/CD tự động deploy lên GitHub Pages
├── public/
│   ├── favicon.svg                 # Icon nhận diện thương hiệu công nghệ
│   ├── robots.txt                  # Cấu hình crawler SEO
│   ├── images/
│   │   └── og-default.svg          # Ảnh đại diện chia sẻ mạng xã hội (Open Graph)
│   └── files/
│       └── resume.pdf              # File CV / Sơ yếu lý lịch tải về
├── src/
│   ├── components/
│   │   ├── Header.astro            # Thanh điều hướng header & menu mobile
│   │   ├── Footer.astro            # Chân trang với chỉ số trạng thái hệ thống
│   │   ├── Hero.astro              # Khu vực giới thiệu mở đầu & terminal tương tác
│   │   ├── ProjectCard.astro       # Card hiển thị thông tin dự án
│   │   ├── PostCard.astro          # Card tóm tắt bài viết
│   │   ├── TableOfContents.astro   # Mục lục bài viết tự động
│   │   └── effects/
│   │       ├── AnimatedGrid.astro  # Lưới phối cảnh 3D
│   │       ├── AuroraBackground.astro # Quầng sáng cực quang
│   │       ├── ParticleField.astro # Mạng lưới hạt tương tác
│   │       └── CursorSpotlight.astro # Vùng sáng theo con trỏ chuột
│   ├── content/
│   │   ├── posts/                  # Thư mục chứa các bài viết Markdown (.md)
│   │   ├── projects/               # Dữ liệu các dự án
│   │   └── experiments/            # Dữ liệu các thí nghiệm phòng Lab
│   ├── layouts/
│   │   ├── BaseLayout.astro        # Layout chung cho toàn bộ website
│   │   └── PostLayout.astro        # Layout chi tiết bài viết
│   ├── pages/
│   │   ├── index.astro             # Trang chủ (/)
│   │   ├── about.astro             # Giới thiệu & lộ trình (/about/)
│   │   ├── projects.astro          # Danh mục dự án (/projects/)
│   │   ├── lab.astro               # Phòng thử nghiệm AI (/lab/)
│   │   ├── contact.astro           # Kênh liên hệ (/contact/)
│   │   ├── 404.astro               # Trang báo lỗi 404
│   │   ├── rss.xml.ts              # RSS Feed tự động (/rss.xml)
│   │   └── posts/
│   │       ├── index.astro         # Danh sách bài viết (/posts/)
│   │       └── [...slug].astro     # Trang chi tiết bài viết
│   ├── styles/
│   │   ├── tokens.css              # Biến màu, khoảng cách, font chữ
│   │   ├── animations.css          # Định nghĩa keyframes và reduced motion
│   │   └── global.css              # Thiết lập chung và style nút bấm, card
│   └── content.config.ts           # Schema xác thực frontmatter với Zod (Astro 5)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 💻 Cài đặt & Chạy ở máy Local

### 1. Yêu cầu môi trường
- **Node.js:** Phiên bản 20 trở lên (khuyên dùng Node.js 22 LTS).

### 2. Khởi chạy dự án
```bash
# Cài đặt các gói thư viện
npm install

# Khởi chạy server phát triển ở local (mặc định tại http://localhost:4321)
npm run dev

# Kiểm tra bản biên dịch production
npm run build

# Xem thử bản build tĩnh
npm run preview
```

---

## ✍️ Hướng dẫn Đăng bài viết mới bằng Git

Bạn không cần mở code giao diện. Mỗi khi muốn viết bài mới:

### Bước 1: Tạo file Markdown
Tạo một file mới trong thư mục `src/content/posts/`, ví dụ: `src/content/posts/hoc-tap-ai-agent.md`.

### Bước 2: Điền Frontmatter chuẩn
Phần đầu file có cấu trúc frontmatter như sau:

```markdown
---
title: "Tên bài viết của bạn tại đây"
description: "Mô tả ngắn gọn về nội dung bài viết, hiển thị ở trang danh sách và SEO."
pubDate: 2026-10-30
tags:
  - "AI"
  - "WebDev"
  - "TypeScript"
draft: false
---

# Tiêu đề bài viết

Nội dung bài viết được định dạng bằng cú pháp Markdown thông thường.

## Đề mục cấp 2

Bạn có thể viết công thức, chèn hình ảnh, danh sách hoặc đoạn mã:

```ts
const greeting = "Hello, Future Developer!";
console.log(greeting);
```
```

### Bước 3: Đẩy lên GitHub để xuất bản
```bash
git add .
git commit -m "content: add post hoc-tap-ai-agent"
git push origin main
```

Ngay sau khi push, GitHub Actions sẽ tự động biên dịch và triển khai bài viết mới lên website trong khoảng 1–2 phút.

---

## ⚙️ Hướng dẫn Thêm Dự án hoặc Thử nghiệm Lab

- **Thêm dự án:** Tạo file `.md` trong thư mục `src/content/projects/` với các trường `title`, `description`, `category`, `tags`, `github`, `demo`, `status` (`Completed` / `In Development` / `Experimental`).
- **Thêm thử nghiệm Lab:** Tạo file `.md` trong thư mục `src/content/experiments/` với các trường `title`, `description`, `type`, `status`, `tags`.

---

## 👤 Các thông tin cần cá nhân hóa trước khi công khai

Bạn có thể thay thế các placeholder sau để hoàn thiện thương hiệu cá nhân của mình:

1. **Email liên hệ:** Thay thế `contact.dangdanh@example.com` trong file [src/pages/contact.astro](file:///C:/dangdanh090106.github.io/src/pages/contact.astro) và [src/components/Footer.astro](file:///C:/dangdanh090106.github.io/src/components/Footer.astro).
2. **LinkedIn:** Cập nhật đường dẫn `[YOUR_LINKEDIN]` trong file [src/pages/contact.astro](file:///C:/dangdanh090106.github.io/src/pages/contact.astro) và [src/components/Footer.astro](file:///C:/dangdanh090106.github.io/src/components/Footer.astro).
3. **File CV:** Thay file PDF mẫu tại [public/files/resume.pdf](file:///C:/dangdanh090106.github.io/public/files/resume.pdf) bằng CV thực tế của bạn.

---

## 🚀 Kích hoạt GitHub Pages trên Repository

1. Mở repository trên GitHub: `https://github.com/dangdanh090106/dangdanh090106.github.io`
2. Vào **Settings** > **Pages**.
3. Tại mục **Build and deployment** > **Source**, chọn **GitHub Actions**.
4. Khi bạn push commit lên branch `main`, GitHub Actions sẽ tự động kích hoạt workflow `.github/workflows/deploy.yml` và deploy website lên domain `https://dangdanh090106.github.io`.
