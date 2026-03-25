<div align="center">
      <h1> <img src="https://raw.githubusercontent.com/default-cybe/CodeShare/main/img/logo.jpeg" width="80px"><br/>CodeShare</h1>
     </div>
<p align="center"> <a href="https://github.com/default-cybe" target="_blank"><img alt="" src="https://img.shields.io/badge/Website-EA4C89?style=normal&logo=dribbble&logoColor=white" style="vertical-align:center" /></a> <a href="https://twitter.com/default_yt_" target="_blank"><img alt="" src="https://img.shields.io/badge/Twitter-1DA1F2?style=normal&logo=twitter&logoColor=white" style="vertical-align:center" /></a> <a href="https://www.instagram.com/kaivalya_ahir" target="_blank"><img alt="" src="https://img.shields.io/badge/Instagram-E4405F?style=normal&logo=instagram&logoColor=white" style="vertical-align:center" /></a> <a href="https://www.linkedin.com/in/kaivalya-ahir/" target="_blank"><img alt="" src="https://img.shields.io/badge/LinkedIn-0077B5?style=normal&logo=linkedin&logoColor=white" style="vertical-align:center" /></a> </p>

# Description
A VS Code extension for moving code straight from one editor to another. When you share, your active file gets pushed to a Firebase Realtime Database under a short, randomly generated team code. Whoever types that code into their VS Code gets the file dropped into their editor. No accounts, no links, nothing to paste into a chat app.

# Features

* Send the current editor's contents right from VS Code
* No logging in, and no jumping over to WhatsApp or Gmail to send a link
* One short team code covers both sending and receiving
* Good for those quick, one-off "here, take this file" moments

# How it works

There are two commands:

* **Share Code** grabs the text in your current editor, writes it to Firebase under a random 8-character team code, shows you the code, and copies it to your clipboard.
* **Receive Code** asks for a team code, pulls the matching code out of Firebase, and drops it in at your cursor.

Both commands are available from the Command Palette and the editor's right-click context menu.

