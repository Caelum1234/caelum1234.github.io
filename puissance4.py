class Puissance4:
    def __init__(self):
        self.rows = 6
        self.cols = 7
        self.grid = [["." for _ in range(self.cols)] for _ in range(self.rows)]
        self.current_player = "X"  # Alternates between 'X' and 'O'

    def display_grid(self):
        for row in self.grid:
            print(" ".join(row))
        print(" " + " ".join(map(str, range(self.cols))))  # Column indices for reference

    def drop_token(self, col):
        if col < 0 or col >= self.cols:
            print("Colonne invalide. Réessayez.")
            return False

        for row in reversed(self.grid):
            if row[col] == ".":
                row[col] = self.current_player
                return True

        print("Cette colonne est pleine. Réessayez.")
        return False

    def check_winner(self):
        # Check all possible directions for a win (horizontal, vertical, diagonal)
        directions = [(0, 1), (1, 0), (1, 1), (1, -1)]

        for r in range(self.rows):
            for c in range(self.cols):
                if self.grid[r][c] == ".":
                    continue

                for dr, dc in directions:
                    if self.check_direction(r, c, dr, dc):
                        return True

        return False

    def check_direction(self, r, c, dr, dc):
        token = self.grid[r][c]
        for i in range(1, 4):
            nr, nc = r + dr * i, c + dc * i
            if nr < 0 or nr >= self.rows or nc < 0 or nc >= self.cols or self.grid[nr][nc] != token:
                return False
        return True

    def switch_player(self):
        self.current_player = "O" if self.current_player == "X" else "X"

    def is_full(self):
        return all(self.grid[0][c] != "." for c in range(self.cols))

    def play(self):
        print("Bienvenue dans Puissance 4 !")
        self.display_grid()

        while True:
            try:
                col = int(input(f"Joueur {self.current_player}, choisissez une colonne (0-{self.cols - 1}): "))
            except ValueError:
                print("Veuillez entrer un numéro de colonne valide.")
                continue

            if self.drop_token(col):
                self.display_grid()

                if self.check_winner():
                    print(f"Le joueur {self.current_player} a gagné ! Félicitations !")
                    break

                if self.is_full():
                    print("La grille est pleine. Match nul !")
                    break

                self.switch_player()

if __name__ == "__main__":
    game = Puissance4()
    game.play()
