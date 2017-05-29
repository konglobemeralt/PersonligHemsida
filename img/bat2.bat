for %%a in ("*.gif") do ffmpeg -i "%%a" -vcodec h264 -acodec aac -strict -2  "newfiles\%%~na.mp4"
pause