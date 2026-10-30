---
title: "Tối ưu hóa hiệu năng Static Web: Nghệ thuật của sự tinh gọn"
description: "Những kỹ thuật thực tế giúp website đạt 100/100 điểm Google Lighthouse mà không phải hy sinh hiệu ứng thị giác."
pubDate: 2026-10-20
tags:
  - "Performance"
  - "CSS"
  - "WebDev"
  - "Optimization"
cover: "/images/posts/web-performance.svg"
draft: false
---

# Tối ưu hóa hiệu năng Static Web: Nghệ thuật của sự tinh gọn

Hiệu ứng đẹp mắt và tốc độ tải trang nhanh thường bị xem là đối nghịch. Tuy nhiên, bằng cách áp dụng đúng các nguyên lý kỹ thuật, chúng ta hoàn toàn có thể đạt được cả hai.

## 1. Không lạm dụng JavaScript cho những việc CSS làm được

Nhiều website tải hàng trăm kilobytes thư viện JavaScript chỉ để tạo hiệu ứng hover hoặc lưới chuyển động. Trong portfolio này:

- **Lưới viễn cảnh 3D:** Được dựng hoàn toàn bằng CSS `linear-gradient` kết hợp với `perspective` và `rotateX`.
- **Ánh sáng Neon / Aurora:** Sử dụng các thẻ `div` với `filter: blur()` và chuyển động `transform`, chạy trực tiếp trên GPU compositor.

## 2. Tôn trọng Accessibility và Prefers-Reduced-Motion

Một website chuyên nghiệp luôn phải quan tâm đến mọi đối tượng người dùng:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Đoạn mã trên đảm bảo người dùng có triệu chứng nhạy cảm chuyển động (vestibular disorder) hoặc thiết bị tiết kiệm pin sẽ có trải nghiệm êm dịu, tĩnh và dễ chịu nhất.

## 3. Quản lý tài nguyên hình ảnh & định dạng SVG

Thay vì tải ảnh bitmap nặng hàng megabytes, chúng ta ưu tiên:
- Vector SVG có kích thước tính bằng bytes.
- Font chữ chỉ nạp các biến thể cần thiết thông qua Google Fonts hoặc self-hosted woff2.

Sự tinh gọn trong kiến trúc chính là yếu tố làm nên vẻ đẹp lâu dài của một sản phẩm công nghệ.
