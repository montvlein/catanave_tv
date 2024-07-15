// import { Server } from 'socket.io'
// import { GameCollection } from '@/server/models/game'

// const games = new GameCollection()

// const Responses = {
//   SUCCESS: 0,
//   GAME_EXISTS: 1,
//   GAME_NOT_EXISTS: 2,
//   GAME_FULL: 3
// }

// const Requests = {
//   CREATE_GAME: 'create-game',
//   JOIN_GAME: 'join-game'
// }

// const SocketHandler = (req, res) => {
//   if (res.socket.server.io) {
//     console.log('Socket is already running')
//   } else {
//     console.log('Socket is initializing')
//     const io = new Server(res.socket.server)
//     res.socket.server.io = io

//     io.on('connection', (socket) => {
//       socket.on(Requests.CREATE_GAME, (gameName) => {
//         if (games.createGame(gameName)) {
//           games.getGame(gameName).addPlayer(socket)
//           socket.emit('response', Responses.SUCCESS)
//         } else {
//           socket.emit('response', Responses.GAME_EXISTS)
//         }
//       })

//       socket.on(Requests.JOIN_GAME, (gameName) => {
//         const game = games.getGame(gameName)
//         if (!game) {
//           socket.emit('response', Responses.GAME_NOT_EXISTS)
//         } else {
//           if (game.addPlayer(socket)) {
//             socket.emit('response', Responses.SUCCESS)
//           } else {
//             socket.emit('response', Responses.GAME_FULL)
//           }
//         }
//       })
//     })
//   }
//   res.end()
// }

// export default SocketHandler