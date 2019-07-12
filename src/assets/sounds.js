const songs = {}
const files = require.context('./', true, /\.(ogg|mp3|wav|mpe?g)$/i);

files.keys().forEach((file)=>{
  const song = file.split('/').slice(-1)[0].split('.')[0];
  songs[song] = new Audio(files(file));
});

export default songs;