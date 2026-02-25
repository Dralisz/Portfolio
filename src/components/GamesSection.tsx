interface GameCardProps {
  title: string;
  src: string;
}

function GameCard({ title, src }: GameCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div
          className="bg-white rounded border border-gray-200"
          style={{ height: "400px" }}
        >
          <iframe
            src={src}
            title={`${title} Game`}
            className="w-full h-full border-none rounded"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>
    </div>
  );
}

export default function GamesSection() {
  const games = [
    { title: "Tic Tac Toe", src: "/Portfolio/games/TicTacToe/index.html" },
    { title: "Minesweeper", src: "/Portfolio/games/Minesweeper/index.html" },
    { title: "Sudoku", src: "/Portfolio/games/Sudoku/index.html" },
    { title: "Playground", src: "/Portfolio/games/Playground/index.html" },
    { title: "Tic Tac Toe AI", src: "/Portfolio/games/TicTacToeAI/index.html" },
  ];

  return (
    <section id="games" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Interactive Games
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <GameCard key={game.title} title={game.title} src={game.src} />
          ))}
        </div>
      </div>
    </section>
  );
}
