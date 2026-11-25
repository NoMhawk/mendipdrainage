"""Zip the built site/ folder for a Cloudflare Pages direct upload.

Usage (from the project root, after `node build.js`):
    python scripts/make-upload-zip.py

Writes mendip-site.zip in the project root (git-ignored). Paths inside use
forward slashes; zips made with Windows' Compress-Archive use backslashes,
which Cloudflare treats as part of the file name, so sub-pages 404.
"""
import os
import zipfile

OUT = "mendip-site.zip"
count = 0
with zipfile.ZipFile(OUT, "w", zipfile.ZIP_DEFLATED) as z:
    for root, _, files in os.walk("site"):
        for name in files:
            path = os.path.join(root, name)
            z.write(path, os.path.relpath(path, "site").replace(os.sep, "/"))
            count += 1
print(f"Wrote {OUT} with {count} files.")
