// interface AudioPlayer {
//   audioVolume: number;
//   songDuration: number;
//   song: string;
//   details: Details;
// }

// interface Details {
//   author: string;
//   year: number;
// }

// const audioPlayer: AudioPlayer = {
//   audioVolume: 90,
//   songDuration: 36,
//   song: "Birds of a feather",
//   details: {
//     author: "Billie Eilish",
//     year: 2020,
//   },
// };

// const { songDuration, song, details } = audioPlayer;
// const { author, year } = details;

// console.log(`Song: ${song}`);
// console.log(`Author: ${author}`);
// console.log(`Duration: ${songDuration}`);
// console.log(`Year: ${year}`);

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
const [p1, p2] = dbz; // Desestructuración de arreglos
console.log(`Personaje 1: ${p1}`);
console.log(`Personaje 2: ${p2}`);
export {};
