#!/bin/bash

# Define the base music directory
MUSIC_DIR=~/Music

# Check if yt-dlp is installed
if ! command -v yt-dlp &>/dev/null; then
  echo "yt-dlp could not be found. Please install yt-dlp to use this script."
  exit 1
fi

# Function to display the playlist options
function show_playlists() {
  echo "Choose a playlist to save your music:"
  echo "1) Lofi"
  echo "2) Pop"
  echo "3) Melody"
  echo "4) Sturdy"
  echo "5) Japanese"
  echo "6) Bollywood"
}

# Show playlists and get user choice
show_playlists
read -p "Enter the number of your choice: " choice

# Determine the selected directory
case $choice in
1) TARGET_DIR="$MUSIC_DIR/Lofi" ;;
2) TARGET_DIR="$MUSIC_DIR/Pop" ;;
3) TARGET_DIR="$MUSIC_DIR/Melody" ;;
4) TARGET_DIR="$MUSIC_DIR/Sturdy" ;;
5) TARGET_DIR="$MUSIC_DIR/Japanese" ;;
6) TARGET_DIR="$MUSIC_DIR/Bollywood" ;;
*)
  echo "Invalid choice! Exiting."
  exit 1
  ;;
esac

# Create the target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# Check if the user provided a URL
if [ -z "$1" ]; then
  echo "Usage: $0 <YouTube-URL>"
  exit 1
fi

# Download and extract audio in MP3 format
yt-dlp -x --audio-format mp3 -o "$TARGET_DIR/%(title)s.%(ext)s" "$1"

echo "Download complete! Music saved in $TARGET_DIR"
