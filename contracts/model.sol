// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;


    struct UserProfile {
        string id_hash;
        uint8 age;
        string date;
        Status status;
        uint8 wins;
        uint8 tournaments_created;
        uint8 attendance;
        uint8 losses;
        Point[] points;
        string username;
        bool is_mod;
        Role role;
        string principal_id;
        string account_id;
        string canister_id;
        string squad_badge;
        string referral_id;
    }

    struct TournamentAccount {
        string id_hash;
        string creator;
        string creator_id;
        TournamentStatus status;
        uint8 idx;
        string starting_date;
        string tournament_rules;
        TournamentType tournament_type;
        string game;
        Squad[] squad;
        string[][] squad_in_game_names;
        Chat[] messages;
        string[] user;
        UserProfile[] user_details;
        string[] winers;
        uint8 entry_prize;
        bool accepts_wagers;
        Wager[] wagers;
        uint128 entry_fee;
        uint128 nominal_entry_fee;
        uint128 entry_fee_bump;
        uint128 no_of_participants_at_bump;
        uint128 total_prize;
        uint8 no_of_winners;
        Variation tournament_variation;
        uint128 no_of_participants;
        string game_type;
        string end_date;
        string title;
        Point[] squad_points;
        Point[] points;
        Point[] squad_vector_mod_1;
        Point[] points_vector_mod_1;
        Point[] squad_vector_mod_2;
        Point[] points_vector_mod_2;
        Point[] squad_vector_mod_3;
        Point[] points_vector_mod_3;
        string[][] in_game_names;
        TournamentLobbyType tournament_lobby_type;
        LobbyAccount[] lobbies;
        Winner[] winners;
        bool ended;
    }

    struct Winner {
        string position;
        uint128 amount;
        string user_account;
    }

    struct LobbyAccount {
        TournamentStatus status;
        LobbyStatus lobby_status;
        uint8 idx;
        string starting_date;
        string lobby_rules;
        TournamentType tournament_type;
        string game;
        Squad[] squads;
        Chat[] messages;
        string[] participants;
        string[] winers;
        uint8 no_of_winners;
        uint128 no_of_participants;
        GameType game_type;
        string name;
    }

    struct Point {
        uint128 position_points;
        uint128 kill_points;
        uint128 total_points;
    }

    struct Squad {
        string id_hash;
        string captain;
        SquadType status;
        string name;
        string tag;
        uint8 wins;
        uint8 attendance;
        uint8 losses;
        Member[] members;
        string[] requests;
        Point[] points;
    }

    struct Member {
        string name;
        string principal_id;
    }

    struct Wager {
        uint128 amount;
        string staker_principal_id;
        string staker_account_id;
        string player_principal_id;
    }

    struct Chat {
        string name;
        string id;
        string time;
        string message;
    }

    enum Status { Online, Offline }
    enum Role { Player, Mod, TribunalMod }
    enum ModTag { Mod1, Mod2, Mod3 }
    enum GameType { TeamvTeam, Single, Duo, Squad }
    enum TournamentStatus { AcceptingPlayers, GameInProgress, GameCompleted, Archived }
    enum LobbyStatus { ReadyToStart, GameInProgress, GameCompleted }
    enum TournamentType { Crowdfunded, Prepaid, Blitzkrieg }
    enum TournamentLobbyType { SingleLobby, MultiLobby }
    enum SquadType { Open, Closed }
    enum Variation { Capped, Infinite }

