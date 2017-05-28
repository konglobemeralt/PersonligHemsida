for %%a in ("*.gif") do ffmpeg -i "%%a" -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" "newfiles\%%~na.mp4"
pause