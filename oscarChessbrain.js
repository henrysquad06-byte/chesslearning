const oscarChessBrain = {

    basics: {
        board: [
            "The chessboard has 64 squares.",
            "The board has files a through h.",
            "The board has ranks 1 through 8.",
            "Each player starts with 16 pieces."
        ],

        pieces: {
            king: [
                "The king moves one square in any direction.",
                "The king cannot move onto a square attacked by an enemy piece."
            ],

            queen: [
                "The queen moves horizontally, vertically, or diagonally."
            ],

            rook: [
                "The rook moves horizontally or vertically."
            ],

            bishop: [
                "The bishop moves diagonally.",
                "A bishop stays on the same color of square."
            ],

            knight: [
                "The knight moves in an L shape.",
                "The knight can jump over pieces."
            ],

            pawn: [
                "A pawn normally moves forward.",
                "A pawn captures diagonally.",
                "A pawn can move two squares from its starting position."
            ]
        }
    },

    specialMoves: {
        castling: [
            "Castling moves the king and a rook at the same time.",
            "The king moves two squares toward the rook.",
            "The rook moves to the square next to the king.",
            "You cannot castle if the king has already moved.",
            "You cannot castle with a rook that has already moved.",
            "You cannot castle while in check.",
            "The king cannot cross an attacked square.",
            "The king cannot finish on an attacked square."
        ],

        promotion: [
            "When a pawn reaches the opposite end of the board, it promotes.",
            "A pawn can promote to a queen, rook, bishop, or knight."
        ],

        enPassant: [
            "En passant is a special pawn capture."
        ]
    },

    importantIdeas: {
        opening: [
            "Control the center.",
            "Develop your pieces.",
            "Get your king safe.",
            "Don't move the same piece repeatedly without a reason."
        ],

        check: [
            "Check means the king is currently attacked.",
            "A player must respond to check."
        ],

        checkmate: [
            "Checkmate means the king is in check and has no legal escape."
        ]
    },

    // Add new things here whenever Henry learns them.
    newKnowledge: []
};


function oscarExplain(topic) {
    const information = oscarChessBrain;

    if (information.basics.pieces[topic]) {
        return information.basics.pieces[topic];
    }

    if (information.specialMoves[topic]) {
        return information.specialMoves[topic];
    }

    if (information.importantIdeas[topic]) {
        return information.importantIdeas[topic];
    }

    return ["Oscar hasn't learned that yet."];
}
