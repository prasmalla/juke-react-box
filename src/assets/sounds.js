const songs = {}
const files = require.context('./', true, /\.(WAV)$/);

files.keys().forEach((file)=>{
  const song = file.split('/').slice(-1)[0].split('.')[0];
  songs[song] = new Audio(files(file));
});

export default songs;