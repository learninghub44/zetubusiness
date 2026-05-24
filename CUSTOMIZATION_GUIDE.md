# 🎨 CUSTOMIZATION GUIDE - Quick Reference

## How to Customize Your Premium Website

### 1. **Add Your Company Logo/Colors**

#### Change Primary Color (Cyan #00d4ff)
In `style.css`, find and replace:
```css
/* Current cyan */
color: #00d4ff;
background: #00d4ff;
border-color: #00d4ff;

/* Replace with your brand color */
color: #YourColorCode;
```

Common brand colors:
- Red: #FF0000
- Blue: #0066CC
- Green: #00AA00
- Purple: #7030A0
- Orange: #FF6600

---

### 2. **Update Company Information**

In `index.html`:

#### Company Name & Tagline
```html
<!-- Line ~25 -->
<div class="logo">
  Zetu <span>Business Solutions</span>
</div>

<!-- Change to your company name -->
<div class="logo">
  YourBrand <span>Your Tagline</span>
</div>
```

#### Hero Section
```html
<!-- Lines ~65-75 -->
<h1>
  We Build
  <span>Websites, Apps & Enterprise Systems</span>
</h1>
<p>
  Your company description here...
</p>
```

#### Contact Information
```html
<!-- Lines ~540 -->
<p>Founder: Chris Odhiambo</p>
<p>Kisii, Kenya</p>
<p>Email: info@zetubusinesssolutions.com</p>
<p>Phone: +254701059192</p>

<!-- Update to your details -->
```

---

### 3. **Add Your Portfolio Projects**

#### Update Portfolio Images
```html
<!-- Lines ~265 -->
<div class="portfolio-card">
  <img src="assets/images/project1.jpg" alt="Your Project">
  <div class="portfolio-overlay">
    <h3>Your Project Name</h3>
  </div>
</div>
```

**Steps:**
1. Replace images in `assets/images/`
2. Use JPG, PNG, or WebP formats
3. Recommended size: 500x350px
4. Update `alt` text for accessibility

---

### 4. **Update Pricing Plans**

In `index.html` lines ~395-425:

```html
<div class="pricing-card featured">
  <h3>Professional</h3>
  <h1>KES 45,000</h1>
  <p>Business System + Hosting</p>
  <!-- Add more details -->
</div>
```

---

### 5. **Add Team Members**

In `index.html` lines ~430:

```html
<div class="team-grid">
  <div class="team-card">
    <img src="assets/images/team1.jpg" alt="Name">
    <h3>Person Name</h3>
    <p>Job Title</p>
  </div>
  
  <!-- Copy block above to add more team members -->
</div>
```

---

### 6. **Add Testimonials**

In `index.html` lines ~470-520:

```html
<div class="testimonial-card">
  <img src="assets/images/testimonial1.jpg" alt="Client Name">
  <p>"Your testimonial text here"</p>
  <h4>Client Name</h4>
  <p class="role">Job Title, Company</p>
  <div class="stars">★★★★★</div>
</div>
```

**Rating Options:**
- Full stars: ★★★★★ (5 stars)
- Partial: ★★★★☆ (4 stars)
- Half: ★★★☆☆ (3 stars)

---

### 7. **Update Statistics**

In `index.html` lines ~290-325:

```html
<div class="stat-card">
  <div class="stat-icon">🎯</div>
  <h3 class="counter" data-target="150">0</h3>
  <p>Projects Completed</p>
  <span class="stat-detail">Across multiple industries</span>
</div>
```

Change the `data-target` value to your actual number.

---

### 8. **Add Videos**

Place your video files in `assets/videos/`:

#### Update Gallery Videos
```html
<!-- Lines ~350 -->
<div class="video-item">
  <video controls>
    <source src="assets/videos/your-video.mp4" type="video/mp4">
  </video>
  <div class="video-item-title">Your Video Title</div>
</div>
```

**Supported Formats:**
- MP4 (best compatibility)
- WebM
- OGG

---

### 9. **Customize Services**

In `index.html` lines ~120-200:

```html
<div class="service-card">
  <div class="service-icon">🌐</div>
  <h3>Service Name</h3>
  <p>Service description here</p>
</div>
```

**Popular Emojis:**
- Web: 🌐 🖥️ 💻
- Mobile: 📱 ☎️
- Cloud: ☁️ 🚀
- Security: 🔒 🛡️
- AI: 🤖 ⚙️
- Support: 👥 🎯

---

### 10. **Change Button Text**

In `index.html`:

```html
<!-- Hero buttons -->
<a href="#services" class="btn">Explore Services</a>
<a href="#contact" class="btn secondary-btn">Start Project</a>

<!-- Update text as needed -->
```

---

## 🎨 **CSS CUSTOMIZATION**

### Modify Spacing
```css
/* Increase padding */
section {
  padding: 150px 8%;  /* was 110px */
}

/* Increase gap between cards */
.services-grid {
  gap: 50px;  /* was 30px */
}
```

### Change Fonts
```css
/* Current */
font-family: 'Poppins', sans-serif;

/* Google Fonts alternatives */
font-family: 'Roboto', sans-serif;
font-family: 'Inter', sans-serif;
font-family: 'Ubuntu', sans-serif;
```

### Adjust Border Radius
```css
/* Less rounded */
border-radius: 10px;  /* was 25px */

/* More rounded */
border-radius: 35px;
```

### Shadow Effects
```css
/* Stronger shadow */
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

/* Subtle shadow */
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
```

---

## 📱 **RESPONSIVE DESIGN ADJUSTMENTS**

The site is responsive for:
- **Desktop**: 1920px and up
- **Tablet**: 768px - 1024px
- **Mobile**: Below 768px

Adjust breakpoints in CSS:
```css
@media(max-width: 1024px) {
  /* Tablet styles */
}

@media(max-width: 768px) {
  /* Mobile styles */
}

@media(max-width: 480px) {
  /* Small phone styles */
}
```

---

## 🚀 **PERFORMANCE TIPS**

1. **Optimize Images**
   - Use tools like TinyPNG
   - Compress before uploading
   - Use WebP format for better compression

2. **Video Optimization**
   - Use H.264 codec
   - Keep under 50MB per video
   - Consider using shorter clips

3. **Minify Files**
   - Use CSS/JS minifiers
   - Remove unused styles
   - Clean up comments

---

## 🔐 **SECURITY NOTES**

1. **Contact Form**
   - Currently uses client-side validation
   - Add backend for production
   - Implement SMTP for emails

2. **SEO**
   - Update meta descriptions
   - Add Open Graph tags
   - Submit sitemap to search engines

---

## 🎯 **QUICK WINS**

1. ✅ Add your logo and change colors (5 minutes)
2. ✅ Update company information (10 minutes)
3. ✅ Add your portfolio images (15 minutes)
4. ✅ Update testimonials (15 minutes)
5. ✅ Add your team members (15 minutes)

**Total: ~60 minutes to full customization**

---

## 📞 **TROUBLESHOOTING**

### Images not loading?
- Check file paths (case-sensitive on Linux)
- Ensure file format is supported
- Verify image dimensions

### Videos not playing?
- Use H.264 codec (MP4)
- Test with different browsers
- Check file permissions

### Styles not applying?
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS syntax
- Verify class names match

---

## 🎓 **LEARNING RESOURCES**

- CSS Gradients: https://cssgradient.io
- Color Picker: https://colorpicker.com
- Font Pairing: https://fonts.google.com
- Icons/Emojis: https://emojipedia.org

---

**Your website is ready for customization!** 🚀
