// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "./model.sol";

library TournamentMutation {
    event TournamentCreated(string id_hash);
    event TournamentStarted(string id_hash);
    event TournamentArchived(string id_hash);
    event TournamentJoined(string id_hash, string player);
    event TournamentUpdated(string id_hash);
    event PrizeUpdated(string id_hash, uint128 newPrize);
    event TournamentTypeUpdated(string id_hash);
    event TournamentPostponed(string id_hash, string newStartDate);
    event LeaderboardUpdated();

    function createTournament(
        mapping(string => TournamentAccount) storage tournamentStore,
        TournamentAccount memory tournament
    ) public returns (bool) {
        string memory id_hash = tournament.id_hash;
        tournamentStore[id_hash] = tournament;
        emit TournamentCreated(id_hash);
        return true;
    }

    function startTournament(mapping(string => TournamentAccount) storage tournamentStore, string memory id_hash) public {
        TournamentAccount storage tournament = tournamentStore[id_hash];
        tournament.status = TournamentStatus.GameInProgress;
        emit TournamentStarted(id_hash);
    }

    function archiveTournament(mapping(string => TournamentAccount) storage tournamentStore, string memory id_hash) public {
        TournamentAccount storage tournament = tournamentStore[id_hash];
        tournament.status = TournamentStatus.Archived;
        emit TournamentArchived(id_hash);
    }

    function joinTournament(
        mapping(string => TournamentAccount) storage tournamentStore,
        string memory id_hash,
        string memory playerId,
        UserProfile memory userDetails,
        string[] memory inGameNames
    ) public {
        TournamentAccount storage tournament = tournamentStore[id_hash];

        // Add player to users list
        tournament.user.push(playerId);
        tournament.user_details.push(userDetails);
        tournament.in_game_names.push(inGameNames);

        // Handle entry fee increment logic
        if (tournament.no_of_participants_at_bump > 0 &&
            tournament.user.length % tournament.no_of_participants_at_bump == 0
        ) {
            if (tournament.tournament_variation == Variation.Infinite) {
                tournament.entry_fee += tournament.entry_fee_bump;
            }
        }
        emit TournamentJoined(id_hash, playerId);
    }

    function updateTournamentDetails(
        mapping(string => TournamentAccount) storage tournamentStore,
        string memory id_hash,
        string memory newRules
    ) public {
        tournamentStore[id_hash].tournament_rules = newRules;
        emit TournamentUpdated(id_hash);
    }

    function updateTournamentPoolPrice(
        mapping(string => TournamentAccount) storage tournamentStore,
        string memory id_hash,
        uint128 newPrize
    ) public {
        tournamentStore[id_hash].total_prize = newPrize;
        emit PrizeUpdated(id_hash, newPrize);
    }

    function updateTournamentTypeToBlitzkrieg(mapping(string => TournamentAccount) storage tournamentStore, string memory id_hash) public {
        tournamentStore[id_hash].tournament_type = TournamentType.Blitzkrieg;
        emit TournamentTypeUpdated(id_hash);
    }

    function postponeTournament(
        mapping(string => TournamentAccount) storage tournamentStore,
        string memory id_hash,
        string memory newStartDate
    ) public {
        tournamentStore[id_hash].starting_date = newStartDate;
        emit TournamentPostponed(id_hash, newStartDate);
    }





    function removeLoser(string[] storage losers, string memory winner) private {
        for (uint256 i = 0; i < losers.length; i++) {
            if (keccak256(abi.encodePacked(losers[i])) == keccak256(abi.encodePacked(winner))) {
                losers[i] = losers[losers.length - 1];
                losers.pop();
                break;
            }
        }
    }
}

