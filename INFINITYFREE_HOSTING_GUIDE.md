# InfinityFree पे Website Host करने के Instructions

## Step 1: Website Download करें

1. Website पे नीचे right side में "Download Website" button दिखेगा
2. उस पर click करें - एक ZIP file download हो जाएगी
3. ZIP file को अपने computer पे save करें

## Step 2: InfinityFree Account बनाएं

1. जाएं: https://infinityfree.net/
2. "Sign Up" पर click करें
3. अपना email और password डालकर account बनाएं
4. Email verify करें

## Step 3: Website Setup करें

1. InfinityFree में login करें
2. Control Panel में जाएं
3. "Create Account" या "Add Website" पर click करें
4. अपना domain name choose करें (free subdomain मिलेगा जैसे: yourname.wuaze.com)
5. Website create होने का wait करें (2-5 minutes)

## Step 4: Files Upload करें

### Option A: File Manager से (Recommended)

1. Control Panel में "Online File Manager" open करें
2. `htdocs` folder में जाएं
3. पहले से जो files हैं उन्हें delete करें (index.html, default.php etc.)
4. Downloaded ZIP file को अपने computer पे extract करें
5. `public` folder के अंदर की **सभी files** को select करें:
   - index.html
   - assets folder
   - favicon.png
6. इन सभी files को `htdocs` folder में upload करें

### Option B: FTP से

1. FileZilla download करें: https://filezilla-project.org/
2. InfinityFree के Control Panel से FTP details copy करें:
   - Hostname
   - Username
   - Password
3. FileZilla में FTP details डालकर connect करें
4. Left side (Local Site) में: ZIP extract करके `public` folder open करें
5. Right side (Remote Site) में: `htdocs` folder open करें
6. `htdocs` में पहले से जो files हैं उन्हें delete करें
7. Left side से सभी files select करके right side में drag करें

## Step 5: Website Test करें

1. Browser में अपना domain open करें (जैसे: yourname.wuaze.com)
2. Website load हो रही है check करें
3. सभी pages और links काम कर रहे हैं verify करें

## Important Notes

### File Structure (बहुत जरूरी!)

ZIP में `public` folder के **अंदर** की files upload करनी हैं, folder खुद नहीं!

**✅ CORRECT htdocs structure:**
```
htdocs/
  ├── index.html
  ├── favicon.png
  └── assets/
      ├── index-xxx.css
      ├── index-xxx.js
      └── (images)
```

**❌ WRONG htdocs structure:**
```
htdocs/
  └── public/
      ├── index.html
      └── assets/
```

### Common Issues और Solutions

**Problem 1: Website white screen दिख रही है**
- Solution: Check करें कि `index.html` directly `htdocs` में है, `public` folder में नहीं

**Problem 2: Images load नहीं हो रहे**
- Solution: `assets` folder भी `htdocs` में properly upload हुआ है confirm करें
- File names case-sensitive होते हैं - exact spelling check करें

**Problem 3: 404 Error आ रहा है**
- Solution: सभी files upload हुई हैं check करें
- Wait करें 5-10 minutes - sometimes files propagate होने में time लगता है

**Problem 4: FTP connect नहीं हो रहा**
- Solution: InfinityFree के forum पे current FTP server address check करें
- कभी-कभी server address बदलता है

## Custom Domain (Optional)

अगर आपका खुद का domain है (जैसे: adityagupta.com):

1. InfinityFree Control Panel में "Addon Domains" जाएं
2. अपना domain add करें
3. Domain registrar (जहां से domain खरीदा) में जाएं
4. Nameservers को InfinityFree के nameservers से replace करें:
   - ns1.byet.org
   - ns2.byet.org
5. 24-48 hours wait करें DNS propagation के लिए

## Performance Tips

1. Images को compress रखें (already optimized हैं)
2. InfinityFree free है तो bandwidth limited है
3. अगर ज्यादा traffic हो तो paid hosting consider करें

## Support

- InfinityFree Forum: https://forum.infinityfree.net/
- Documentation: https://infinityfree.net/support/

---

**Good Luck! 🎉**

आपकी portfolio website अब live हो जाएगी और पूरी दुनिया में accessible होगी!
