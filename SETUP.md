# Equinox Equity Ventures — Setup & Deployment Guide

---

## What you need
- A free [EmailJS](https://emailjs.com) account (sends form enquiries to your Gmail — no backend required)
- A free [GitHub](https://github.com) account (hosts the site for free via GitHub Pages)

Estimated time: **15 minutes**

---

## PART 1 — EmailJS Setup (so form emails reach monyelajason@gmail.com)

### Step 1 — Create your EmailJS account
1. Go to **https://emailjs.com** and click **Sign Up Free**
2. Use your Gmail address: `monyelajason@gmail.com`
3. Verify your email

### Step 2 — Add your Gmail as an Email Service
1. In the EmailJS dashboard, go to **Email Services** (left sidebar)
2. Click **Add New Service**
3. Choose **Gmail**
4. Click **Connect Account** and sign in with `monyelajason@gmail.com`
5. Click **Create Service**
6. Note the **Service ID** — it looks like `service_xxxxxxx`  ← you'll need this

### Step 3 — Create an Email Template
1. In the dashboard, go to **Email Templates** (left sidebar)
2. Click **Create New Template**
3. Set the template up exactly like this:

   **To email:** `monyelajason@gmail.com`  
   **From name:** `{{from_name}}`  
   **Reply to:** `{{reply_to}}`  
   **Subject:** `New Enquiry — EEV Website | {{intent}}`

   **Body:**
   ```
   New enquiry received from the Equinox Equity Ventures website.

   Name:         {{from_name}}
   Organisation: {{organisation}}
   Email:        {{reply_to}}
   Enquiry type: {{intent}}

   Message:
   {{message}}
   ```

4. Click **Save**
5. Note the **Template ID** — it looks like `template_xxxxxxx`  ← you'll need this

### Step 4 — Get your Public Key
1. In the dashboard, go to **Account** → **General**
2. Copy your **Public Key** — it looks like `AbCdEfGhIjKlMnOp`  ← you'll need this

### Step 5 — Add your keys to the website file
Open `index.html` in any text editor (Notepad, VS Code, etc.) and find these three lines near the top (around line 10):

```javascript
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
```

Replace the placeholder values with your actual keys:

```javascript
const EMAILJS_PUBLIC_KEY  = 'AbCdEfGhIjKlMnOp';      // your public key
const EMAILJS_SERVICE_ID  = 'service_abc1234';          // your service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz5678';         // your template ID
```

Save the file.

### Step 6 — Test it (optional but recommended)
In EmailJS dashboard → Email Templates → click your template → **Send Test Email**
Check your Gmail inbox for the test message.

---

## PART 2 — GitHub Pages Deployment (free hosting)

### Step 1 — Create a GitHub account
If you don't have one, go to **https://github.com** and sign up free.

### Step 2 — Create a new repository
1. Click the **+** button (top right) → **New repository**
2. Name it: `equinox-equity-ventures` (or anything you like)
3. Set visibility to **Public** (required for free GitHub Pages)
4. Leave everything else as default
5. Click **Create repository**

### Step 3 — Upload your files
On the repository page:
1. Click **uploading an existing file** (or drag and drop)
2. Upload these two files from this folder:
   - `index.html`
   - `README.md`
3. Scroll down and click **Commit changes**

### Step 4 — Enable GitHub Pages
1. In your repository, click **Settings** (top tab)
2. In the left sidebar, click **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Under **Branch**, select `main` and `/ (root)`
5. Click **Save**

### Step 5 — Get your live URL
After about 2 minutes, refresh the Pages settings page.
Your site will be live at:

```
https://YOUR-GITHUB-USERNAME.github.io/equinox-equity-ventures/
```

GitHub will show you the exact URL once it's ready.

---

## File checklist — what to upload to GitHub

```
equinox-equity-ventures/
├── index.html        ← the website (with your EmailJS keys filled in)
└── README.md         ← optional, describes the repo
```

That's it. The site is fully self-contained — no npm, no build step, no server.

---

## Making updates later

To update the site after it's live:
1. Edit `index.html` on your computer
2. Go to your GitHub repository
3. Click on `index.html` → click the **pencil icon** (Edit) → paste new content → **Commit changes**

Or use the GitHub Desktop app for a more visual experience.

---

## Custom domain (optional)

If you ever buy a domain like `equinoxequityventures.com`:
1. In GitHub Pages settings, enter your domain under **Custom domain**
2. At your domain registrar (GoDaddy, Namecheap, etc.), add a CNAME record pointing to `YOUR-USERNAME.github.io`
3. GitHub will handle HTTPS automatically

---

## Support

- EmailJS docs: https://www.emailjs.com/docs/
- GitHub Pages docs: https://docs.github.com/en/pages
