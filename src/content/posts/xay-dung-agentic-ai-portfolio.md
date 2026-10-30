---
title: "Xây dựng Portfolio AI & Software Engineering với Astro và GitHub Pages"
description: "Hành trình thiết kế hệ sinh thái cá nhân tối giản, tối ưu hiệu năng và đăng bài tự động thông qua Git."
pubDate: 2026-10-30
tags:
  - "Astro"
  - "GitHub Pages"
  - "WebDev"
  - "AI"
cover: "/images/posts/astro-portfolio.svg"
draft: false
---

# Xây dựng Portfolio AI & Software Engineering với Astro và GitHub Pages

Chào mừng bạn đến với không gian số của tôi. Đây là bài viết mở đầu chia sẻ về tư duy kiến trúc, công nghệ và triết lý đằng sau trang portfolio cá nhân này.

## Triết lý: Personal Tech Universe

Khi xây dựng một trang portfolio cho lập trình viên và kỹ sư AI, câu hỏi cốt lõi không chỉ là *"mình đã làm những gì"*, mà là *"mình tiếp cận công nghệ như thế nào"*.

Trang web này được xây dựng với các tiêu chí khắt khe:

1. **Hiệu năng cực đại (Zero JS by default):** Tận dụng kiến trúc Islands của Astro để sinh HTML tĩnh hoàn toàn tại thời điểm build.
2. **Không phụ thuộc cơ sở dữ liệu:** Mọi bài viết, ghi chú và dự án đều được quản lý trực tiếp bằng file Markdown trong kho lưu trữ Git.
3. **Thẩm mỹ Cyber-Tech & Futuristic:** Màu sắc tối sâu (`#070B14`), các đường viền neon cyan/violet có kiểm soát và cảm giác chiều sâu không gian.
4. **Tự động hóa CI/CD:** Mỗi lệnh `git push` kích hoạt GitHub Actions để build và deploy trong vài chục giây.

## Kiến trúc Content Collections trong Astro 5

Astro 5 mang đến Content Layer API hoàn toàn mới với khả năng kiểm tra kiểu dữ liệu (type safety) thông qua Zod schema:

```ts
// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});
```

Điều này ngăn chặn triệt để các lỗi sai sót frontmatter ngay từ lúc gõ lệnh build ở máy local.

## Quy trình xuất bản một bài viết mới

Quy trình đăng bài được đơn giản hóa đến mức tối đa:

```bash
# 1. Tạo file markdown trong src/content/posts/
touch src/content/posts/my-new-post.md

# 2. Kiểm tra giao diện local
npm run dev

# 3. Commit và push lên GitHub
git add .
git commit -m "content: publish new post"
git push origin main
```

Sau khi push, GitHub Actions sẽ tự động biên dịch toàn bộ website thành static files và đẩy lên GitHub Pages. Không cần đăng nhập CMS, không lo lộ database password hay server downtime.

## Dự định tương lai

Trong các bài viết tiếp theo, tôi sẽ chia sẻ sâu hơn về:
- Ứng dụng LLM và multi-agent workflows trong kỹ thuật phần mềm thực tế.
- Các kỹ thuật tối ưu hóa mô hình AI on-device và inference latency.
- Thử nghiệm các tương tác sáng tạo (Creative Computing & WebGL).

Cảm ơn bạn đã ghé thăm!
