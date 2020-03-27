const vibes = [
   "... and you are awesome!",
   "... and you are wonderful!",
   "... and you are great!",
   "... and you've got this!",
   "... and you'll make it through this!!",
];

const vibe = document.querySelector(".vibe");

const todaysVibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

vibe.append(todaysVibe);